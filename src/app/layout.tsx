import type { Metadata } from 'next';
import { ibmPlexSans } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wortday.com'),
  title: {
    default: 'Wortday — Learn German, One Word at a Time',
    template: '%s — Wortday',
  },
  description:
    'Master German vocabulary with daily micro-lessons. Learn one word a day with mnemonics, exercises, and spaced repetition.',
  keywords: [
    'German learning',
    'vocabulary',
    'word of the day',
    'language learning',
    'German words',
    'learn German',
    'etymology',
    'mnemonics',
    'spaced repetition',
  ],
  authors: [{ name: 'Wortday Team' }],
  creator: 'Wortday',
  publisher: 'Wortday',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/favicon.ico' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wortday.com',
    siteName: 'Wortday',
    title: 'Wortday — Learn German Daily',
    description: 'Daily German vocabulary lessons in just 2 minutes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wortday — Learn German vocabulary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wortday — Learn German Daily',
    description: 'Daily German vocabulary lessons',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://wortday.com" />
      </head>
      <body className={`${ibmPlexSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
