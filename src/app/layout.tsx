import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import LenisProvider from '@/components/providers/LenisProvider';
import Cursor from '@/components/ui/Cursor';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-ibm-plex-sans-arabic',
  weight: ['200', '300', '400', '500'],
  display: 'swap',
});

export const viewport = {
  themeColor: '#F7F1E9',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://valleyrose.design'),
  title: 'Valley Rose — Luxury Floral Brand Guidelines',
  description: 'The official interactive brand guidelines for Valley Rose, showcasing the complete luxury floral identity system, design principles, applications and visual language.',
  alternates: {
    canonical: './',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Valley Rose',
    statusBarStyle: 'default',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Valley Rose — Luxury Floral Brand Guidelines',
    description: 'The official interactive brand guidelines for Valley Rose, showcasing the complete luxury floral identity system, design principles, applications and visual language.',
    url: 'https://valleyrose.design',
    siteName: 'Valley Rose Brand Guidelines',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Valley Rose Brand Guidelines Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valley Rose — Luxury Floral Brand Guidelines',
    description: 'The official interactive brand guidelines for Valley Rose, showcasing the complete luxury floral identity system, design principles, applications and visual language.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} ${ibmPlexSansArabic.variable} antialiased`}
      >
        <LanguageProvider>
          <LenisProvider>
            <Cursor />
            {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

