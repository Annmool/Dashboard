'use client';

import { useState } from 'react';
import { IncidentWithCamera } from '@/types';
import { ClientDateTime } from './ClientDateTime'; // <-- IMPORT the new component
import { ShieldOff, Target, UserCheck, Flame, Car, Users, AlertTriangle } from 'lucide-react';

const incidentMeta: { [key: string]: { icon: React.ElementType, color: string } } = {
  'Unauthorised Access': { icon: ShieldOff, color: 'text-red-400' },
  'Gun Threat': { icon: Target, color: 'text-red-600' },
  'Face Recognised': { icon: UserCheck, color: 'text-blue-400' },
  'Fire Hazard': { icon: Flame, color: 'text-orange-400' },
  'Vehicle of Interest': { icon: Car, color: 'text-yellow-400' },
  'Crowd Forming': { icon: Users, color: 'text-purple-400' },
  'default': { icon: AlertTriangle, color: 'text-gray-400' },
};

interface IncidentItemProps {
  incident: IncidentWithCamera;
  onResolve: (id: number) => void;
}

export const IncidentItem = ({ incident, onResolve }: IncidentItemProps) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  const meta = incidentMeta[incident.type] || incidentMeta.default;
  const Icon = meta.icon;

  const handleResolveClick = () => {
    setIsFadingOut(true);
    setTimeout(() => onResolve(incident.id), 300);
  };

  // The old `formatDate` function is now gone from this file.

  return (
    <div className={`flex items-center gap-3 p-2 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      <img src={incident.thumbnailUrl} alt={incident.type} className="w-24 h-16 object-cover rounded-md flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className={`flex items-center gap-2 font-semibold ${meta.color}`}>
          <Icon size={16} />
          <p className="truncate">{incident.type}</p>
        </div>
        <p className="text-sm text-gray-400">{incident.camera.location}</p>
        
        {/* V-- THIS IS THE FIX --V */}
        <ClientDateTime date={incident.tsStart} />
        
      </div>
      <button onClick={handleResolveClick} className="text-yellow-400 hover:text-yellow-200 text-sm font-semibold pr-2">
        {'Resolve >'}
      </button>
    </div>
  );
};