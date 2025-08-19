"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import ContactComponent from '@/components/home/contact';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const metadata = {
  title: 'Contact Pandit Manish Sharma - Maa Baglamukhi Puja & Astrology Services',
  description: 'Get in touch with Pandit Manish Sharma for Maa Baglamukhi Puja, astrological consultations, and spiritual guidance at Maa Baglamukhi Mandir. Contact us today!',
  keywords: 'Pandit Manish Sharma, Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Mandir, Maa Baglamukhi Puja, Maa Baglamukhi Pandit, Maa Baglamukhi Pujan, Best Maa Baglamukhi Pandit, Best Maa Baglamukhi Puja',
  openGraph: {
    title: 'Contact Us - Pandit Manish Sharma & Maa Baglamukhi Mandir',
    description: 'Reach out to Pandit Manish Sharma for expert astrology and Maa Baglamukhi Puja services. Get personalized spiritual guidance now.',
    url: 'http://maabaglamukhipujan.com/contact',
    siteName: 'Maa Baglamukhi Mandir',
    images: [
      {
        url: 'http://maabaglamukhipujan.com/images/contact.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Pandit Manish Sharma - Maa Baglamukhi Puja',
    description: 'Contact Pandit Manish Sharma for Maa Baglamukhi Puja and astrology consultations at Maa Baglamukhi Mandir.',
    images: ['http://maabaglamukhipujan.com/images/contact.jpg'],
  },
  alternates: {
    canonical: 'http://maabaglamukhipujan.com/contact',
    languages: {
      'en': 'http://maabaglamukhipujan.com/en/contact',
      'hi': 'http://maabaglamukhipujan.com/hi/contact',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 py-16 bg-gradient-to-b from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
            </h1>
            <p className="text-xl text-orange-100 font-semibold mb-8">
              {language === 'hi' ? 'हम आपकी ज्योतिष यात्रा में मदद के लिए यहाँ हैं।' : "We're here to help you with your astrological journey."}
            </p>
            <p className="text-orange-100 leading-relaxed text-lg">
              {language === 'hi' ? 'परामर्श, सवाल या किसी भी सहायता के लिए हमसे संपर्क करें। हमारी टीम जल्द से जल्द जवाब देगी।' : 'Reach out for consultations, questions, or any support you need. Our team will respond as soon as possible.'}
            </p>
          </div>
        </div>
      </section>
      <main className="pt-20">
        <ContactComponent />

      </main>
    </div>
  );
}