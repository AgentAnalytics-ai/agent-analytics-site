import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agent Analytics - AI-Powered Problem Solving',
  description:
    'We help leaders solve hard problems using AI, product thinking, and real strategy.',
  keywords: ['AI', 'problem solving', 'strategy', 'consulting', 'analytics'],
  authors: [{ name: 'Agent Analytics' }],
  creator: 'Agent Analytics',
  publisher: 'Agent Analytics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agentanalytics.com'),
  openGraph: {
    title: 'Agent Analytics - AI-Powered Problem Solving',
    description:
      'We help leaders solve hard problems using AI, product thinking, and real strategy.',
    url: 'https://agentanalytics.com',
    siteName: 'Agent Analytics',
    images: [
      {
        url: '/images/Agent Analytics Official Logo.png',
        width: 1200,
        height: 630,
        alt: 'Agent Analytics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Analytics - AI-Powered Problem Solving',
    description:
      'We help leaders solve hard problems using AI, product thinking, and real strategy.',
    images: ['/images/Agent Analytics Official Logo.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Calendly Widget Script - Remove event handlers for Next.js 15 compatibility */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} h-full`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen pt-28">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
