import Link from 'next/link';

type Officer = {
  id: string;
  name: string;
  collar: string;
  rank: string;
  bio?: string;
};

export function OfficerProfile({ officer }: { officer: Officer }) {
  return (
    <section className="relative z-10 mx-auto max-w-4xl p-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h1 className="font-space text-4xl font-bold text-white">{officer.name}</h1>
            <p className="font-mono text-sm text-white/40 mt-2">{officer.rank} • Collar {officer.collar} • ID {officer.id}</p>
          </div>
          <div className="text-right">
            <Link href="/contact-police" className="text-sm font-mono text-white/60 hover:text-white">Back to directory</Link>
          </div>
        </div>

        {officer.bio && (
          <div className="mt-6 text-white/60 font-mono">
            {officer.bio}
          </div>
        )}
      </div>
    </section>
  );
}

export default OfficerProfile;
