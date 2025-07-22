'use client';

import { useState } from 'react';
import { IncidentItem } from './IncidentItem';
import { IncidentWithCamera } from '@/types';
import { Plus, User, ArrowUpRight } from 'lucide-react';

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
    <div className="bg-[#1C1C1C]/80 rounded-lg p-4 h-full flex flex-col border border-orange-500/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-red-400 flex items-center gap-2">
          <span className="font-bold text-xl">{incidents.length}</span>
          <span>Unresolved Incidents</span>
        </h2>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Plus size={16} />
          <User size={16} />
          <div className="flex items-center gap-1">
            <span>4 resolved incidents</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto space-y-2 pr-2 -mr-2">
        {incidents.map((incident) => (
          <IncidentItem key={incident.id} incident={incident} onResolve={handleResolve} />
        ))}
        {incidents.length === 0 && <p className="text-gray-400 text-center py-8">All incidents resolved!</p>}
      </div>
    </div>
  );
};