'use client';

import { useState } from 'react';
import { IncidentItem } from './IncidentItem';
import { IncidentWithCamera } from '@/types';

interface IncidentListProps {
  initialIncidents: IncidentWithCamera[];
}

export const IncidentList = ({ initialIncidents }: IncidentListProps) => {
  const [incidents, setIncidents] = useState<IncidentWithCamera[]>(initialIncidents);

  const handleResolve = async (incidentId: number) => {
    const originalIncidents = [...incidents];
    setIncidents(prev => prev.filter(inc => inc.id !== incidentId));

    try {
      const res = await fetch(`/api/incidents/${incidentId}/resolve`, { method: 'PATCH' });
      if (!res.ok) {
        setIncidents(originalIncidents);
      }
    } catch (error) {
      setIncidents(originalIncidents);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 h-full flex flex-col border border-orange-500">
      <h2 className="text-lg font-semibold mb-4 text-red-400">{incidents.length} Unresolved Incidents</h2>
      <div className="overflow-y-auto space-y-3 pr-2">
        {incidents.map((incident) => (
          <IncidentItem key={incident.id} incident={incident} onResolve={handleResolve} />
        ))}
        {incidents.length === 0 && <p className="text-gray-400 text-center py-8">All incidents resolved!</p>}
      </div>
    </div>
  );
};