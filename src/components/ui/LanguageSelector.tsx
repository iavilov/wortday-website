'use client';

export const LanguageSelector = () => {
  return (
    <div className="relative">
      <button
        disabled
        className="flex items-center gap-2 px-3 py-2 border-2 border-ink rounded-md bg-card text-ink font-medium text-sm shadow-brutal-sm cursor-not-allowed opacity-60"
        title="Multi-language support coming soon"
      >
        <span>🌐</span>
        <span>EN</span>
      </button>
      <span className="absolute -top-1 -right-1 bg-accent-yellow text-ink text-xs font-bold px-1.5 py-0.5 rounded-sm border border-ink">
        Soon
      </span>
    </div>
  );
};
