"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Star, TrendingUp, Award, BookOpen, Heart, Target } from 'lucide-react';
import Link from 'next/link';

function AboutContent() {
  const { t } = useLanguage();

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
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-orange-600 font-semibold mb-8">
                {t('about.subtitle')}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = iconMap[index as keyof typeof iconMap];
                return (
                  <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
                    <CardContent className="p-8">
                      <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
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
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {t('about.story')}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  Our journey began with a simple mission: to make authentic astrological guidance accessible to everyone. We believe that astrology is not just about predicting the future, but about understanding yourself better and making informed decisions that align with your true purpose.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6077329/pexels-photo-6077329.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide our practice and shape our relationship with every client.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
                  <CardContent className="p-8">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                      <value.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
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
              Ready to Begin Your Astrological Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Connect with our experienced astrologers and discover the insights that can transform your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
}