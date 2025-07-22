import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  await prisma.incident.deleteMany();
  await prisma.camera.deleteMany();

  const camera1 = await prisma.camera.create({ data: { name: 'Camera 01', location: 'Shop Floor A' } });
  const camera2 = await prisma.camera.create({ data: { name: 'Camera 02', location: 'Vault Entrance' } });
  const camera3 = await prisma.camera.create({ data: { name: 'Camera 03', location: 'Parking Lot' } });

  await prisma.incident.createMany({
    data: [
      { type: 'Unauthorised Access', tsStart: new Date(Date.now() - 2 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/unauthorised-1.jpg', cameraId: camera1.id },
      { type: 'Unauthorised Access', tsStart: new Date(Date.now() - 5 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/unauthorised-2.jpg', cameraId: camera2.id },
      { type: 'Unauthorised Access', tsStart: new Date(Date.now() - 10 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/unauthorised-3.jpg', cameraId: camera1.id },
      { type: 'Unauthorised Access', tsStart: new Date(Date.now() - 11 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/unauthorised-4.jpg', cameraId: camera3.id, resolved: true },
      { type: 'Gun Threat', tsStart: new Date(Date.now() - 3 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/gun-threat-1.jpg', cameraId: camera2.id },
      { type: 'Gun Threat', tsStart: new Date(Date.now() - 8 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/gun-threat-2.jpg', cameraId: camera3.id },
      { type: 'Face Recognised', tsStart: new Date(Date.now() - 1 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/face-1.jpg', cameraId: camera1.id },
      { type: 'Face Recognised', tsStart: new Date(Date.now() - 12 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/face-2.jpg', cameraId: camera2.id },
      { type: 'Fire Hazard', tsStart: new Date(Date.now() - 6 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/fire-1.jpg', cameraId: camera1.id },
      { type: 'Vehicle of Interest', tsStart: new Date(Date.now() - 15 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/vehicle-1.jpg', cameraId: camera3.id },
      { type: 'Crowd Forming', tsStart: new Date(Date.now() - 4 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/crowd-1.jpg', cameraId: camera1.id },
      { type: 'Medical Emergency', tsStart: new Date(Date.now() - 7 * 3600 * 1000), tsEnd: new Date(), thumbnailUrl: '/thumbnails/medical-1.jpg', cameraId: camera2.id, resolved: true },
    ],
  });
  console.log('Seeding finished.');
}

main().catch(e => console.error(e)).finally(async () => await prisma.$disconnect());