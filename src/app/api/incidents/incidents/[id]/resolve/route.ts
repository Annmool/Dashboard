import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const incidentId = parseInt(params.id, 10);

  if (isNaN(incidentId)) {
    return NextResponse.json({ error: 'Invalid incident ID' }, { status: 400 });
  }

  try {
    const updatedIncident = await prisma.incident.update({
      where: { id: incidentId },
      data: { resolved: true },
    });
    return NextResponse.json(updatedIncident);
  } catch (error) {
    console.error(`API Error resolving incident ${incidentId}:`, error);
    return NextResponse.json({ error: `Incident with ID ${incidentId} not found` }, { status: 404 });
  }
}