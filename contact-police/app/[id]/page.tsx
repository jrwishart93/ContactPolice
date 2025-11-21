import officers from '@/lib/officerData';
import { notFound } from 'next/navigation';
import LiquidBackground from '@/components/LiquidBackground';
import { OfficerProfile } from '@/components/OfficerProfile';

export default function OfficerPage({ params }: { params: { id: string } }) {
  const officer = officers.find(
    (o) => o.id.toLowerCase() === params.id.toLowerCase()
  );

  if (!officer) return notFound();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <LiquidBackground />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(167,139,250,0.12),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_25%)]" />
      <OfficerProfile officer={officer} />
    </main>
  );
}
