'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { useState } from 'react';
import { ContactModal } from '@/components/ui/ContactModal';

export const Footer = () => {
  const year = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="py-12 px-4 border-t-3 border-ink bg-card">
        <div className="max-w-6xl mx-auto">
          {/* Top row — Logo + Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <Logo />

            <nav className="flex flex-wrap gap-6 items-center justify-center">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-ink transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-ink transition-colors font-medium"
              >
                Terms
              </Link>
            </nav>
          </div>

          {/* Bottom row — Copyright + Language + Email button */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-gray-200">
            <p className="text-gray-500 text-sm">
              © {year} Wortday Project.
            </p>

            <div className="flex items-center gap-4">
              <LanguageSelector />

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-card text-ink font-semibold text-sm py-2 px-6 border-2 border-ink rounded-md shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                hello@wortday.com
              </button>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
