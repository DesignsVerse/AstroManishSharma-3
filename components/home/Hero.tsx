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

      <div className="container mx-auto px-2 py-4 lg:px-4 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-20 items-center pt-20 lg:pt-10">
          {/* Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative w-full h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
              <img
                src="/images/maa.webp"
                alt={language === 'hi' ? 'पेशेवर ज्योतिषी परामर्श' : 'Professional Astrology Consultation'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 lg:p-6 text-white text-center">
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 lg:p-4 shadow-lg animate-bounce">
              <Stars className="w-8 h-8 text-orange-600" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 lg:p-4 shadow-lg animate-bounce delay-1000">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <div className="inline-flex items-center gap-2 lg:gap-2 bg-orange-100 text-orange-700 px-2 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-medium mt-3 mb-3 lg:mb-8">
              <Stars className="w-4 h-4" />
              {language === 'hi' ? '5000+ खुश ग्राहकों का विश्वास' : 'Trusted by 5000+ Happy Clients'}
            </div>
            <h1 className="text-2xl lg:text-5xl font-bold text-white mb-3 lg:mb-6 leading-tight">
              {language === 'hi' ? 'ज्योतिष और वास्तु के माध्यम से जीवन को सकारात्मक बनाएं' : 'Transform Your Life Through Astrology & Vastu'}
            </h1>
            <p className="text-base lg:text-xl text-orange-300 font-semibold mb-3 lg:mb-8">
              {language === 'hi' ? 'तंत्र और मंत्र के माध्यम से जीवन को सकारात्मक बनाएं।' : 'Harness Planetary Power to Alter Your Destiny'}
            </p>
            <p className="text-sm lg:text-lg text-gray-200 mb-3 lg:mb-10 max-w-2xl">
              {language === 'hi' 
                ? 'हमारे अनुभवी तंत्र आचार्य पंडित मनीष शर्मा जी से पाए तंत्र और मंत्र के माध्यम से अपने जीवन से जुड़ी सभी समस्याओं के शीघ्र समाधान।'
                : 'Our experienced astrologers analyze your birth chart to provide precise remedies based on planetary positions. Bring positive energy into your life by applying Vastu Shastra principles.'}
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-2 lg:gap-6 mb-3 lg:mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm text-gray-200">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Stars key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-medium">{language === 'hi' ? '4.9/5 रेटिंग' : '4.9/5 Rating'}</span>
              </div>
              <div className="text-xs lg:text-sm text-gray-200">
                <span className="font-medium">{language === 'hi' ? '98% संतुष्टि दर' : '98% Satisfaction Rate'}</span>
              </div>
              <div className="text-xs lg:text-sm text-gray-200">
                <span className="font-medium">{language === 'hi' ? '25+ वर्षों का अनुभव' : '25+ Years Experience'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg"
              >
                <a
                  href={`https://wa.me/7733994827?text=${encodeURIComponent(
                    language === 'hi'
                      ? 'नमस्ते पंडित मनीष शर्मा जी मुझे मां बगलामुखी पूजा करवानी है।'
                      : 'Hello, I need astrology consultation'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'hi' ? 'अपनी पूजा बुक करें' : 'Book Consultation'}
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg"
              >
                <a href="tel:+917733994827">
                  {language === 'hi' ? 'पूजा के बारे में जानकारी ले' : 'Free Consultation'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}