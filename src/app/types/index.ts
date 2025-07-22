import { Incident, Camera } from '@prisma/client';

export type IncidentWithCamera = Incident & {
  camera: Camera;
};