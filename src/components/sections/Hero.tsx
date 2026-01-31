const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.wortday.com';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: '#FFFAF0',
          backgroundImage: 'radial-gradient(#121212 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-ink mb-8 leading-tight">
          LEARN GERMAN.
          <br />
          BUILD HABIT.
          <br />
          DON&apos;T SUFFER.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl mx-auto">
          Context, etymology, and visual style that keeps you awake.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Stop memorizing boring tables and start understanding the roots.
        </p>

        <a
          href={APP_URL}
          className="inline-block bg-accent-yellow text-ink font-bold text-lg py-4 px-10 border-3 border-ink rounded-md shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-brutal-active active:translate-x-0.5 active:translate-y-0.5 transition-all uppercase"
        >
          Launch Web App 🚀
        </a>
      </div>
    </section>
  );
};
