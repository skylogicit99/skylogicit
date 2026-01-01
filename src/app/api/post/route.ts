import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import parsePhoneNumber from "libphonenumber-js";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // Check if user is authenticated and type is a poster
  if (!session || session.user.type !== "poster") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const {
      phoneNumber,
      message,
      clientName,
      agentName,
      location,
      rent,
      screenshot,
    } = await req.json();

    // Validate inputs
    if (!phoneNumber || !message) {
      return NextResponse.json(
        { error: "Phone number and message are required." },
        { status: 400 },
      );
    }

    const parsed = parsePhoneNumber(phoneNumber, "US");
    if (!parsed?.isValid()) {
      return NextResponse.json(
        { error: "Invalid phone number format." },
        { status: 400 },
      );
    }
    const formattedNumber = parsed.number;
    const foundedPost = await prisma.post.findUnique({
      where: {
        phone: formattedNumber,
      },
    });

    if (foundedPost) {
      return NextResponse.json(
        { error: "Phone Number Already Added It's A Duplicate" },
        { status: 400 },
      );
    }

    const counter = await prisma.globalPostCounter.findFirst();

    if (counter && counter.enabled) {
      if (counter.count === counter.limit) {
        const res = await fetch("https://emancipation.vercel.app/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: formattedNumber,
            message,
            clientName,
            posterId: session.user.id,
            agentName,
            rent,
            location,
            screenshot,
          }),
        });

        if (!res.ok) {
          return NextResponse.json(
            { error: "Something went wrong" },
            { status: 400 },
          );
        }
        await prisma.globalPostCounter.update({
          where: { id: counter.id },
          data: { count: 0 },
        });
        return NextResponse.json(
          { error: "Phone Number Already Added It's A Duplicate" },
          { status: 400 },
        );
      } else {
        const post = await prisma.post.create({
          data: {
            phone: formattedNumber,
            message,
            clientName,
            posterId: session.user.id,
            agentName,
            rent,
            location,
            screenshot,
          },
        });

        await prisma.globalPostCounter.update({
          where: { id: counter.id },
          data: { count: counter.count + 1 },
        });

        return NextResponse.json(
          { message: "Lead created successfully.", post },
          { status: 201 },
        );
      }
    }
  } catch (error) {
    console.error("[POST_CREATE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
