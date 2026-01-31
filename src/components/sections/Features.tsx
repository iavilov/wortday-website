import type { Feature } from '@/types';

const features: Feature[] = [
  {
    title: 'ETYMOLOGY FIRST',
    description:
      "Understand where words come from. We break down compound nouns so you actually learn the logic, not just the sound.",
  },
  {
    title: 'BRUTAL DESIGN',
    description:
      'High contrast, no fluff. A UI designed to keep you alert and focused on the vocabulary without distractions.',
  },
  {
    title: 'STREAK HABIT',
    description:
      "Daily goals that actually matter. Track your progress with hard data and visual streaks that you won't want to break.",
  },
];

const featureColors = ['#86EFAC', '#FF80BF', '#F9A8D4'];
const featureLabels = ['CONTEXT', 'VISUALS', 'PROGRESS'];

export const Features = () => {
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

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-8 border-3 border-ink rounded-lg shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              {/* Icon placeholder with label */}
              <div className="mb-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 border-2 border-ink rounded-sm text-sm font-semibold text-ink mb-4"
                  style={{ backgroundColor: featureColors[index] }}
                >
                  {featureLabels[index]}
                </div>
                <div
                  className="w-12 h-12 rounded-round border-3 border-ink flex items-center justify-center shadow-brutal-sm"
                  style={{ backgroundColor: featureColors[index] }}
                >
                  <span className="text-2xl">
                    {index === 0 ? '📖' : index === 1 ? '👁️' : '📈'}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-ink mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
