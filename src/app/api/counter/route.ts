import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const counter = await prisma.globalPostCounter.findFirst();

    if (!counter) {
      return NextResponse.json(
        { error: "GlobalPostCounter not found." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        counter,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[GLOBAL_POST_COUNTER_GET]", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}

export async function POST() {
  try {
    // 🚫 Prevent multiple rows
    const existing = await prisma.globalPostCounter.findFirst();

    if (existing) {
      return NextResponse.json(
        { message: "GlobalPostCounter already exists." },
        { status: 200 },
      );
    }

    // ✅ Create initial counter
    const counter = await prisma.globalPostCounter.create({
      data: {
        count: 0,
        limit: 15,
        enabled: true,
      },
    });

    return NextResponse.json(
      {
        message: "GlobalPostCounter initialized successfully.",
        counter,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[GLOBAL_POST_COUNTER_CREATE]", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const { limit, enabled, count } = await req.json();

    // Get existing counter (single row)
    const existing = await prisma.globalPostCounter.findFirst();

    if (!existing) {
      return NextResponse.json(
        { error: "GlobalPostCounter not found." },
        { status: 404 },
      );
    }

    // Update fields dynamically
    const counter = await prisma.globalPostCounter.update({
      where: { id: existing.id },
      data: {
        ...(limit !== undefined && { limit }),
        ...(enabled !== undefined && { enabled }),
        ...(count !== undefined && { count }),
      },
    });

    return NextResponse.json(
      {
        message: "GlobalPostCounter updated successfully.",
        counter,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[GLOBAL_POST_COUNTER_UPDATE]", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
