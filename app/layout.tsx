import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maa Baglamukhi Pujan - Professional Astrology Consultation & Guidance by Pandit Manish Sharma',
  description: 'Get authentic astrology consultations with expert guidance for career, relationships, health, and life decisions. Professional Vedic astrology services by Pandit Manish Sharma at Maa Baglamukhi Mandir.',
  keywords: 'Pandit Manish Sharma, Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Mandir, Maa Baglamukhi Puja, Maa Baglamukhi Pandit, Maa Baglamukhi Pujan, Best Maa Baglamukhi Pandit, Best Maa Baglamukhi Puja',
  openGraph: {
    title: 'Maa Baglamukhi Pujan - Vedic Astrology by Pandit Manish Sharma',
    description: 'Discover expert Vedic astrology consultations and Maa Baglamukhi Puja services by Pandit Manish Sharma at Maa Baglamukhi Mandir.',
    url: 'http://maabaglamukhipujan.com',
    siteName: 'Maa Baglamukhi Mandir',
    images: [
      {
        url: 'http://maabaglamukhipujan.com/images/logo.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maa Baglamukhi Pujan - Pandit Manish Sharma',
    description: 'Expert Vedic astrology and Maa Baglamukhi Puja services by Pandit Manish Sharma at Maa Baglamukhi Mandir.',
    images: ['http://maabaglamukhipujan.com/images/logo.jpg'],
  },
  alternates: {
    canonical: 'http://maabaglamukhipujan.com',
    languages: {
      'en': 'http://maabaglamukhipujan.com/en',
      'hi': 'http://maabaglamukhipujan.com/hi',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='notranslate'
    translate="no"
>
      <body className={inter.className}>       
        <LanguageProvider>
          <Header/>
          {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}