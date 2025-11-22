import Image from 'next/image';

export default function PoliceScotlandLogo() {
  return (
    <div className="flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity">
      <Image
        src="/uploads/logo-low-res.png"
        alt="Police Scotland Crest"
        width={120}
        height={120}
        className="w-[100px] md:w-[130px] h-auto select-none pointer-events-none"
        priority
      />
    </div>
  );
}
