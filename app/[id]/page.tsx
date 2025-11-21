import LiquidBackground from '@/components/LiquidBackground';
import { OfficerProfileLayout } from '@/components/OfficerProfileLayout';
import officers from '@/lib/officerData';
import { notFound } from 'next/navigation';

export default function OfficerPage({ params }: { params: { id: string } }) {
  const officer = officers.find((o) => o.id.toLowerCase() === params.id.toLowerCase());

  if (!officer) {
    return notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#030305] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <LiquidBackground />
      </div>
      <div className="relative z-10">
        <OfficerProfileLayout officer={officer} />
      </div>
    </main>
  );
}
