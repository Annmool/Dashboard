'use client';

import { useState, useEffect } from 'react';

interface ClientDateTimeProps {
  date: Date | string;
}

export const ClientDateTime = ({ date }: ClientDateTimeProps) => {
  // This state ensures the component only renders the formatted date on the client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatDate = (dateToFormat: Date | string) => {
    const d = new Date(dateToFormat);
    return `${d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} on ${d.toLocaleDateString('en-GB', { day: '2-digit' })}-${d.toLocaleString('en-GB', { month: 'short' })}-${d.getFullYear()}`;
  };

  // On the server and during the initial client render, render a placeholder or nothing.
  // This guarantees the server and client HTML match.
  if (!isMounted) {
    return <p className="text-xs text-gray-500">--:-- on -- --- ----</p>;
  }

  // After mounting on the client, render the actual formatted date.
  return <p className="text-xs text-gray-500">{formatDate(date)}</p>;
};