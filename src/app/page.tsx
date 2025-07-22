import { IncidentPlayer } from '@/components/IncidentPlayer';
import { IncidentList } from '@/components/IncidentList';
import { Navbar } from '@/components/Navbar';
import { IncidentWithCamera } from '@/types';

async function getUnresolvedIncidents(): Promise<IncidentWithCamera[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${apiUrl}/api/incidents?resolved=false`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function DashboardPage() {
  const unresolvedIncidents = await getUnresolvedIncidents();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col lg:flex-row p-4 lg:p-8 gap-8">
        <div className="flex-1 lg:w-2/3">
          <IncidentPlayer />
        </div>
        <div className="w-full lg:w-1/3 lg:max-w-md">
          <IncidentList initialIncidents={unresolvedIncidents} />
        </div>
      </main>
    </div>
  );
}