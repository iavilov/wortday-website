import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Wortday Logo"
        width={40}
        height={40}
        className="w-10 h-10"
        priority
      />
      <span className="text-xl font-bold text-ink">Wortday</span>
    </div>
  );
};
