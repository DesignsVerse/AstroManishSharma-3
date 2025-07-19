"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, Target, Shield, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export const metadata = {
  title: 'Astrology Services by Pandit Manish Sharma - Maa Baglamukhi Puja & More',
  description: 'Explore astrology services by Pandit Manish Sharma including Maa Baglamukhi Puja, Vedic readings, and personalized consultations at Maa Baglamukhi Mandir.',
  keywords: 'Pandit Manish Sharma, Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Mandir, Maa Baglamukhi Puja, Maa Baglamukhi Pandit, Maa Baglamukhi Pujan, Best Maa Baglamukhi Pandit, Best Maa Baglamukhi Puja',
  openGraph: {
    title: 'Astrology Services - Pandit Manish Sharma & Maa Baglamukhi Mandir',
    description: 'Discover a range of astrology services including Maa Baglamukhi Puja and Vedic readings by Pandit Manish Sharma.',
    url: 'http://maabaglamukhipujan.com/services',
    siteName: 'Maa Baglamukhi Mandir',
    images: [
      {
        url: 'http://maabaglamukhipujan.com/images/services.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrology Services - Pandit Manish Sharma',
    description: 'Get expert astrology services including Maa Baglamukhi Puja by Pandit Manish Sharma at Maa Baglamukhi Mandir.',
    images: ['http://maabaglamukhipujan.com/images/services.jpg'],
  },
  alternates: {
    canonical: 'http://maabaglamukhipujan.com/services',
    languages: {
      'en': 'http://maabaglamukhipujan.com/en/services',
      'hi': 'http://maabaglamukhipujan.com/hi/services',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <ServicesContent />
  );
}

function ServicesContent() {
  const { t, language } = useLanguage();
  const services = t('services.items') as any[];
  const [searchQuery, setSearchQuery] = useState('');

  const benefits = [
    {
      icon: Users,
      title: "Expert Astrologers",
      description: "Certified professionals with decades of Vedic astrology experience"
    },
    {
      icon: Target,
      title: "Precise Guidance",
      description: "97% client satisfaction rate with accurate predictions"
    },
    {
      icon: Clock,
      title: "Timely Reports",
      description: "Receive your personalized analysis within 24-48 hours"
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "Your data and consultations remain completely private"
    }
  ];

  // Filter services based on search query
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              {language === 'en'
                ? t('services.hero.title_en')
                : t('services.hero.title_hi')}
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-orange-100 mb-6 md:mb-8">
              {language === 'en'
                ? t('services.hero.desc_en')
                : t('services.hero.desc_hi')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              <Badge variant="secondary" className="bg-orange-400/20 text-orange-100 hover:bg-orange-400/30 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                {language === 'hi' ? 'व्यक्तिगत रीडिंग्स' : 'Personalized Readings'}
              </Badge>
              <Badge variant="secondary" className="bg-orange-400/20 text-orange-100 hover:bg-orange-400/30 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                {language === 'hi' ? 'उपाय समाधान' : 'Remedial Solutions'}
              </Badge>
              <Badge variant="secondary" className="bg-orange-400/20 text-orange-100 hover:bg-orange-400/30 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                {language === 'hi' ? 'वार्षिक पूर्वानुमान' : 'Yearly Forecasts'}
              </Badge>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <Input
                  type="text"
                  placeholder="Search for astrology services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 md:py-3 text-sm md:text-base border-2 border-white/30 focus:border-white focus:ring-white bg-white/10 backdrop-blur-sm text-white placeholder:text-orange-200 rounded-lg md:rounded-xl"
                />
              </div>
              {searchQuery && (
                <p className="text-xs md:text-sm text-orange-200 mt-2 md:mt-3">
                  Found {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Changed to always show 2 columns on mobile */}
      <section className="py-4 md:py-6">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t('services.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Changed grid to always show 2 columns on all screens below lg */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredServices.map((service, index) => (
              <Link href={`/services/${service.id}`} key={index} className="block group">
                <Card className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 overflow-hidden flex flex-col h-full cursor-pointer">
                  {/* Image Section */}
                  <div className="relative h-40 sm:h-48 md:h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex flex-col flex-1 pt-0 pb-3 px-3 sm:pb-4 sm:px-4">
                    <CardHeader className="pb-1 sm:pb-2 px-0">
                      <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2 text-xs sm:text-sm md:text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    {/* Spacer to push buttons to bottom */}
                    <div className="flex-1"></div>
                    
                    {/* Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        asChild
                        className="flex-1 bg-orange-600 hover:bg-orange-700 text-white h-8 sm:h-10 text-xs sm:text-sm"
                      >
                        <a
                          href={`https://wa.me/7733994827?text=${encodeURIComponent(
                            language === 'hi'
                              ? `नमस्ते, मुझे ${service.title} करानी है`
                              : `Namaste, Mujko ${service.title} Karani Hai`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                        >
                          {language === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline"
                        className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 h-8 sm:h-10 text-xs sm:text-sm"
                      >
                        <a href="tel:+917733994827" onClick={e => e.stopPropagation()}>{language === 'hi' ? 'कॉल करें' : 'Call Now'}</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              {language === 'hi' ? 'क्यों चुनें हमें' : 'Why Clients Choose Us'}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'hi' ? 'हम केवल भविष्यवाणी नहीं, बल्कि जीवन बदलने वाली व्यावहारिक सलाह भी देते हैं।' : 'We provide more than just predictions - we offer practical guidance to transform your life.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4 md:p-6 lg:p-8 bg-gray-50 rounded-lg lg:rounded-xl hover:bg-white hover:shadow-md lg:hover:shadow-lg transition-all">
                <div className="bg-orange-100/50 p-2 md:p-3 lg:p-4 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 lg:mb-6 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-orange-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 md:mb-2 lg:mb-3">
                  {language === 'hi'
                    ? (benefit.title === 'Expert Astrologers' ? 'विशेषज्ञ पंडित जी'
                      : benefit.title === 'Precise Guidance' ? 'सटीक मार्गदर्शन'
                      : benefit.title === 'Timely Reports' ? 'समय पर रिपोर्ट'
                      : benefit.title === '100% Confidential' ? '100% गोपनीय'
                      : benefit.title)
                    : benefit.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">
                  {language === 'hi'
                    ? (benefit.title === 'Expert Astrologers' ? 'दशकों के अनुभव वाले प्रमाणित पंडित जी'
                      : benefit.title === 'Precise Guidance' ? '97% क्लाइंट संतुष्टि सटीक भविष्यवाणी के साथ'
                      : benefit.title === 'Timely Reports' ? '24-48 घंटे में व्यक्तिगत विश्लेषण प्राप्त करें'
                      : benefit.title === '100% Confidential' ? 'आपका डेटा और सलाह पूरी तरह गोपनीय'
                      : benefit.description)
                    : benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-r from-orange-700 to-amber-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-xl lg:rounded-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 lg:mb-6">
              {language === 'hi' ? 'क्या आप तैयार हैं अपनी समस्या से छुटकारा पाने के लिए' : 'Ready to Transform Your Life?'}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-orange-100 mb-4 md:mb-6 lg:mb-8">
              {language === 'hi' ? 'आज ही अपनी पूजा बुक करें और अपने जीवन को नई दिशा दे।' : "Book your puja today and get divine guidance for your life's journey."}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 text-sm sm:text-base md:text-lg"
              >
                <Link href="/contact">{language === 'hi' ? 'सत्र बुक करें' : 'Book Session'}</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 text-sm sm:text-base md:text-lg"
              >
                <Link href="/about">{language === 'hi' ? 'कार्यप्रणाली' : 'Methodology'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}