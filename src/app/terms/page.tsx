import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Wortday',
  description: 'Terms of Service for Wortday German learning app',
};

const TermsPage = () => {
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
          <h1 className="text-4xl font-bold text-ink mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-sm mb-10">
            Last updated: January 31, 2026
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Wortday (&quot;the Service&quot;), you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                2. Description of Service
              </h2>
              <p>
                Wortday is a German language learning platform designed to help
                users build vocabulary through etymology, mnemonics, and
                interactive exercises. The Service is provided on a
                freemium basis with optional paid features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                3. User Accounts
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Provide accurate and complete registration information</li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
                <li>Not share your account with others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                4. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>
                  Use the Service for any illegal or unauthorized purpose
                </li>
                <li>
                  Attempt to gain unauthorized access to the Service or its
                  systems
                </li>
                <li>
                  Interfere with or disrupt the Service or servers
                </li>
                <li>
                  Scrape, data mine, or harvest content from the Service without
                  permission
                </li>
                <li>
                  Impersonate any person or entity or misrepresent your
                  affiliation
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of Wortday (including
                but not limited to text, graphics, logos, images, mnemonics, and
                software) are owned by Wortday and are protected by
                international copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="mt-2">
                You may not copy, reproduce, distribute, or create derivative
                works from our content without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                6. User-Generated Content
              </h2>
              <p>
                If you submit feedback, suggestions, or other content to
                Wortday, you grant us a worldwide, royalty-free license to use,
                modify, and incorporate such content into the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                7. Payments and Subscriptions
              </h2>
              <p>
                Paid features and subscriptions are billed in advance on a
                recurring basis. You agree to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Provide accurate payment information</li>
                <li>
                  Authorize us to charge your payment method for recurring fees
                </li>
                <li>
                  Cancel subscriptions before the next billing cycle to avoid
                  charges
                </li>
              </ul>
              <p className="mt-2">
                Refunds are handled on a case-by-case basis. Contact us at{' '}
                <a
                  href="mailto:hello@wortday.com"
                  className="text-primary font-semibold hover:underline"
                >
                  hello@wortday.com
                </a>{' '}
                for refund requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                8. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account if you
                violate these Terms. You may also delete your account at any
                time from the app settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                9. Disclaimer of Warranties
              </h2>
              <p>
                The Service is provided &quot;as is&quot; without warranties of
                any kind, either express or implied. We do not guarantee that
                the Service will be uninterrupted, error-free, or secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                10. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Wortday shall not be
                liable for any indirect, incidental, or consequential damages
                arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                11. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. Continued use of
                the Service after changes constitute acceptance of the new
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                12. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the jurisdiction where
                Wortday operates, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">
                13. Contact Us
              </h2>
              <p>
                For questions or concerns about these Terms, please contact us
                at:
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

export default TermsPage;
