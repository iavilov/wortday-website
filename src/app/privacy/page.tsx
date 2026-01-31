import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Wortday',
  description: 'Privacy Policy for Wortday German learning app',
};

const PrivacyPage = () => {
  return (
    <main className="min-h-screen py-20 px-4 bg-bg">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-gray-600 hover:text-ink transition-colors font-medium"
        >
          ← Back to Home
        </Link>

        <div className="bg-card border-3 border-ink rounded-lg shadow-brutal p-8 md:p-12">
          <h1 className="text-4xl font-bold text-ink mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-sm mb-10">
            Last updated: January 31, 2026
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                1. Information We Collect
              </h2>
              <p>
                Wortday collects minimal personal data to provide and improve
                our German learning service. This includes:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>
                  Account information (email address, username) when you create
                  an account
                </li>
                <li>
                  Learning progress data (words learned, streaks, quiz results)
                </li>
                <li>
                  Device and usage information (browser type, IP address, app
                  interactions)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                2. How We Use Your Data
              </h2>
              <p>We use collected data to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Provide personalized learning experiences</li>
                <li>Track your progress and maintain learning streaks</li>
                <li>
                  Improve our app through anonymized analytics and user feedback
                </li>
                <li>
                  Send important updates about the service (opt-out available)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                3. Data Sharing
              </h2>
              <p>
                We do <strong>not</strong> sell your personal data. We may share
                data only in the following cases:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>
                  With service providers (hosting, analytics) under strict
                  confidentiality agreements
                </li>
                <li>
                  If required by law or to protect our legal rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                4. Data Storage and Security
              </h2>
              <p>
                Your data is stored securely using industry-standard encryption.
                We implement technical and organizational measures to protect
                against unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                5. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Export your learning data</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, contact us at{' '}
                <a
                  href="mailto:hello@wortday.com"
                  className="text-primary font-semibold hover:underline"
                >
                  hello@wortday.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                6. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar technologies to enhance your
                experience and analyze app usage. You can manage cookie
                preferences in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Significant
                changes will be communicated via email or in-app notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                8. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:hello@wortday.com"
                  className="text-primary font-semibold hover:underline"
                >
                  hello@wortday.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
