import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1e293b" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} h-full antialiased`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen pt-20 md:pt-28">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
