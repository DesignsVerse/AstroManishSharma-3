"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Stars, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-"
        >
          <source src="/video/2.mp4" type="video/mp4" />
          {language === 'hi' ? 'आपका ब्राउज़र वीडियो को सपोर्ट नहीं करता' : 'Your browser does not support the video tag'}
        </video>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-1">
        <div className="absolute top-20 left-10 animate-pulse">
          <Stars className="w-8 h-8 text-orange-600" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Sparkles className="w-6 h-6 text-amber-600" />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <Stars className="w-10 h-10 text-orange-600" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-500">
          <Sparkles className="w-8 h-8 text-amber-600" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center pt-10">
          {/* Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
              <img
                src="/images/maa.webp"
                alt={language === 'hi' ? 'पेशेवर ज्योतिषी परामर्श' : 'Professional Astrology Consultation'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                {/* <h3 className="text-xl font-bold">
                  {language === 'hi' ? 'पंडित जी शर्मा' : 'Pandit Ji Sharma'}
                </h3>
                <p className="text-orange-200">
                  {language === 'hi' ? '25+ वर्षों का अनुभव' : '25+ Years Experience'}
                </p> */}
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
              <Stars className="w-8 h-8 text-orange-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-bounce delay-1000">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Stars className="w-4 h-4" />
              {language === 'hi' ? '5000+ खुश ग्राहकों का विश्वास' : 'Trusted by 5000+ Happy Clients'}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {language === 'hi' ? 'ज्योतिष और वास्तु के माध्यम से जीवन को सकारात्मक बनाएं' : 'Transform Your Life Through Astrology & Vastu'}
            </h1>
            <p className="text-xl text-orange-300 font-semibold mb-8">
              {language === 'hi' ? 'ग्रहों की शक्ति का उपयोग करके अपने भाग्य को बदलें' : 'Harness Planetary Power to Alter Your Destiny'}
            </p>
            <p className="text-lg text-gray-200 mb-10 max-w-2xl">
              {language === 'hi' 
                ? 'हमारे अनुभवी ज्योतिषाचार्य आपकी कुंडली का विश्लेषण करके ग्रहों की स्थिति के अनुसार सटीक समाधान प्रदान करते हैं। वास्तु शास्त्र के सिद्धांतों को लागू करके आपके जीवन में सकारात्मक ऊर्जा लाएं।'
                : 'Our experienced astrologers analyze your birth chart to provide precise remedies based on planetary positions. Bring positive energy into your life by applying Vastu Shastra principles.'}
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Stars key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-medium">{language === 'hi' ? '4.9/5 रेटिंग' : '4.9/5 Rating'}</span>
              </div>
              <div className="text-sm text-gray-200">
                <span className="font-medium">{language === 'hi' ? '98% संतुष्टि दर' : '98% Satisfaction Rate'}</span>
              </div>
              <div className="text-sm text-gray-200">
                <span className="font-medium">{language === 'hi' ? '25+ वर्षों का अनुभव' : '25+ Years Experience'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
              >
                <a
                  href={`https://wa.me/7733994827?text=${encodeURIComponent(
                    language === 'hi'
                      ? 'नमस्ते, मुझे ज्योतिष परामर्श चाहिए'
                      : 'Hello, I need astrology consultation'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
              >
                <a href="tel:+917733994827">
                  {language === 'hi' ? 'मुफ्त परामर्श' : 'Free Consultation'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}