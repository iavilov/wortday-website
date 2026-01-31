const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.wortday.com';

export const MobileApp = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dotted background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: '#FFFAF0',
          backgroundImage: 'radial-gradient(#121212 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-card border-3 border-ink rounded-lg shadow-brutal p-10 md:p-16 text-center border-dashed">
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6">
            MOBILE APP COOKING... 🔥
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Native apps for iOS and Android are in development. Use the Web App
            for now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* App Store — disabled */}
            <div className="relative">
              <button
                disabled
                className="flex items-center gap-3 bg-gray-200 text-gray-500 font-semibold text-base py-3 px-6 border-3 border-gray-400 rounded-md cursor-not-allowed opacity-60"
              >
                <span className="text-2xl">🍎</span>
                App Store
              </button>
              <span className="absolute -top-2 -right-2 bg-ink text-card text-xs font-bold px-2 py-1 rounded-sm border-2 border-ink">
                SOON
              </span>
            </div>

            {/* Google Play — disabled */}
            <div className="relative">
              <button
                disabled
                className="flex items-center gap-3 bg-gray-200 text-gray-500 font-semibold text-base py-3 px-6 border-3 border-gray-400 rounded-md cursor-not-allowed opacity-60"
              >
                <span className="text-2xl">▶️</span>
                Google Play
              </button>
              <span className="absolute -top-2 -right-2 bg-ink text-card text-xs font-bold px-2 py-1 rounded-sm border-2 border-ink">
                SOON
              </span>
            </div>
          </div>

          {/* Web App CTA */}
          <div className="mt-10">
            <a
              href={APP_URL}
              className="inline-block bg-primary text-ink font-bold text-lg py-4 px-10 border-3 border-ink rounded-md shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-brutal-active active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              Use Web App Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
