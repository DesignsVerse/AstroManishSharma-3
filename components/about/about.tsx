"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Star, TrendingUp, Award, BookOpen, Heart, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Pandit Manish Sharma - Best Maa Baglamukhi Puja & Astrological Services',
  description: 'Pandit Manish Sharma offers expert Maa Baglamukhi Puja, astrological consultations, and spiritual guidance at Maa Baglamukhi Mandir. Book your consultation today!',
  keywords: 'Pandit Manish Sharma, Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Mandir, Maa Baglamukhi Puja, Maa Baglamukhi Pandit, Maa Baglamukhi Pujan, Best Maa Baglamukhi Pandit, Best Maa Baglamukhi Puja',
  openGraph: {
    title: 'Pandit Manish Sharma - Maa Baglamukhi Puja & Astrology',
    description: 'Discover expert astrological services and Maa Baglamukhi Puja with Pandit Manish Sharma at Maa Baglamukhi Mandir.',
    url: 'http://maabaglamukhipujan.com/about',
    siteName: 'Maa Baglamukhi Mandir',
    images: [
      {
        url: 'http://maabaglamukhipujan.com/images/about.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pandit Manish Sharma - Best Maa Baglamukhi Puja',
    description: 'Expert Maa Baglamukhi Puja and astrology by Pandit Manish Sharma. Visit Maa Baglamukhi Mandir for spiritual guidance.',
    images: ['http://maabaglamukhipujan.com/images/about.jpg'],
  },
  alternates: {
    canonical: 'http://maabaglamukhipujan.com/about',
    languages: {
      'en': 'http://maabaglamukhipujan.com/en/about',
      'hi': 'http://maabaglamukhipujan.com/hi/about',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

function AboutContent() {
  const { t, language } = useLanguage();

  const stats = t('about.stats') as any[];

  const iconMap = {
    0: Calendar,
    1: Users,
    2: Star,
    3: TrendingUp,
  };

  const values = [
    {
      icon: Heart,
      title: "Compassionate Guidance",
      description: "We provide readings with empathy and understanding, helping you navigate life's challenges with care."
    },
    {
      icon: Target,
      title: "Accurate Predictions",
      description: "Our experienced astrologers deliver precise and meaningful insights based on ancient wisdom."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "We stay updated with the latest astrological techniques and combine them with traditional methods."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Committed to maintaining the highest standards in astrological consultation and client service."
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-orange-500 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-orange-100 font-semibold mb-8">
                {t('about.subtitle')}
              </p>
              <p className="text-orange-100 leading-relaxed text-lg">
                {t('about.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = iconMap[index as keyof typeof iconMap];
                return (
                  <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
                    <CardContent className="p-5">
                      <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                        <Icon className="w-10 h-10 text-orange-600" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-3">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium text-lg">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {language === 'hi' ? 'हमारी कहानी' : 'Our Story'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {t('about.story')}
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Link href="/contact">{language === 'hi' ? 'अपनी यात्रा शुरू करें' : 'Start Your Journey'}</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/images/about.jpg"
                  alt="About us"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'hi' ? 'हमारे मूल्य' : 'Our Values'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'hi' ? 'वे सिद्धांत जो हमारे कार्य और हर ग्राहक के साथ हमारे संबंध को आकार देते हैं।' : 'The principles that guide our practice and shape our relationship with every client.'}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
                  <CardContent className="p-5">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                      <value.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {language === 'hi'
                        ? (value.title === 'Compassionate Guidance' ? 'सहानुभूतिपूर्ण मार्गदर्शन'
                          : value.title === 'Accurate Predictions' ? 'सटीक भविष्यवाणी'
                          : value.title === 'Continuous Learning' ? 'निरंतर सीखना'
                          : value.title === 'Professional Excellence' ? 'पेशेवर उत्कृष्टता'
                          : value.title)
                        : value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {language === 'hi'
                        ? (value.title === 'Compassionate Guidance' ? 'हम सहानुभूति और समझ के साथ रीडिंग्स प्रदान करते हैं, ताकि आप जीवन की चुनौतियों का सामना सहजता से कर सकें।'
                          : value.title === 'Accurate Predictions' ? 'हमारे अनुभवी ज्योतिषी प्राचीन ज्ञान के आधार पर सटीक और अर्थपूर्ण सलाह देते हैं।'
                          : value.title === 'Continuous Learning' ? 'हम नवीनतम ज्योतिष तकनीकों के साथ-साथ पारंपरिक विधियों को भी अपनाते हैं।'
                          : value.title === 'Professional Excellence' ? 'ज्योतिष परामर्श और ग्राहक सेवा में उच्चतम मानकों को बनाए रखने के लिए प्रतिबद्ध।'
                          : value.description)
                        : value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'hi' ? 'क्या आप अपनी ज्योतिष यात्रा शुरू करने के लिए तैयार हैं?' : 'Ready to Begin Your Astrological Journey?'}
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              {language === 'hi' ? 'हमारे अनुभवी ज्योतिषियों से जुड़ें और वे जानकारियाँ पाएं जो आपके जीवन को बदल सकती हैं।' : 'Connect with our experienced astrologers and discover the insights that can transform your life.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact">{language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/services">{language === 'hi' ? 'सेवाएँ देखें' : 'View Services'}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}