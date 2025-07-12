"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Stars, Sparkles, Play } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const { t, language } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
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

      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Stars className="w-4 h-4" />
              {language === 'hi' ? '5000+ खुश ग्राहकों का विश्वास' : 'Trusted by 5000+ Happy Clients'}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-orange-600 font-semibold mb-8">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              {t('hero.description')}
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Stars key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-medium">{language === 'hi' ? '4.9/5 रेटिंग' : '4.9/5 Rating'}</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">{language === 'hi' ? '98% सटीकता' : '98% Accuracy'}</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">{language === 'hi' ? '15+ वर्षों का अनुभव' : '15+ Years Experience'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
              >
                <Link href="/contact">{t('hero.cta')}</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
              >
                <Link href="/about">{t('hero.secondary')}</Link>
              </Button>
            </div>
          </div>

          {/* Image with Video Modal */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6077329/pexels-photo-6077329.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Astrology consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="bg-white/90 hover:bg-white rounded-full p-6 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Play className="w-8 h-8 text-orange-600 ml-1" />
                </button>
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
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 text-2xl"
            >
              ✕
            </button>
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-white text-xl mb-4">{language === 'hi' ? 'Maa Baglamukhi Pujan में आपका स्वागत है' : 'Welcome to Maa Baglamukhi Pujan'}</h3>
              <p className="text-gray-300 mb-6">
                {language === 'hi' ? 'प्रामाणिक ज्योतिष मार्गदर्शन की शक्ति का अनुभव करें। हमारा वीडियो परिचय जल्द ही उपलब्ध होगा।' : 'Experience the power of authentic astrology guidance. Our video introduction will be available soon.'}
              </p>
              <Button onClick={() => setIsVideoPlaying(false)} className="bg-orange-600 hover:bg-orange-700">
                {language === 'hi' ? 'बंद करें' : 'Close'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}