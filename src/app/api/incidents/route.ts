import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const resolvedParam = searchParams.get('resolved');
  const resolved = resolvedParam === 'false' ? false : undefined;

  try {
    const incidents = await prisma.incident.findMany({
      where: {
        ...(resolved !== undefined && { resolved }),
      },
      orderBy: { tsStart: 'desc' },
      include: { camera: true },
    });
    return NextResponse.json(incidents);
  } catch (error) {
    console.error("API Error fetching incidents:", error);
    return NextResponse.json({ error: "Failed to fetch incidents" }, { status: 500 });
  }
}