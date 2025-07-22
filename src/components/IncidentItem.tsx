'use client';

import { useState } from 'react';
import { IncidentWithCamera } from '@/types';

const typeColors: { [key: string]: string } = {
  'Unauthorised Access': 'bg-red-500', 'Gun Threat': 'bg-red-700', 'Face Recognised': 'bg-blue-500',
  'Fire Hazard': 'bg-orange-500', 'default': 'bg-gray-500',
};

interface IncidentItemProps {
  incident: IncidentWithCamera;
  onResolve: (id: number) => void;
}

export const IncidentItem = ({ incident, onResolve }: IncidentItemProps) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleResolveClick = () => {
    setIsFadingOut(true);
    setTimeout(() => onResolve(incident.id), 300);
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' on ' + 
           new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className={`flex items-center gap-3 p-2 rounded-lg bg-gray-700/80 transition-opacity duration-300 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      <img src={incident.thumbnailUrl} alt={incident.type} className="w-24 h-16 object-cover rounded-md flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
           <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${typeColors[incident.type] || typeColors.default}`}></span>
           <p className="font-semibold truncate">{incident.type}</p>
        </div>
        <p className="text-sm text-gray-400">{incident.camera.location}</p>
        <p className="text-xs text-gray-400">{formatDate(incident.tsStart)}</p>
      </div>
      <button onClick={handleResolveClick} className="text-yellow-400 hover:text-yellow-200 text-sm font-semibold pr-2">
        Resolve >
      </button>
    </div>
  );
};