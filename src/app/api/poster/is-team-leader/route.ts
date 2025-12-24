import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Check if the user is leader of any team
    const team = await prisma.posterTeam.findFirst({
      where: { leaderId: userId },
      select: {
        id: true,
        name: true,
      },
    });

    if (!team) {
      return NextResponse.json({
        isLeader: false,
        teamId: null,
        teamName: null,
      });
    }

    return NextResponse.json({
      isLeader: true,
      teamId: team.id,
      teamName: team.name,
    });
  } catch (error: any) {
    console.error("Error checking team leader:", error);
    return NextResponse.json(
      { error: "Server Error", details: error.message },
      { status: 500 },
    );
  }
}
