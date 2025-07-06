"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function ServicesContent() {
  const { t } = useLanguage();

  const services = t('services.items') as any[];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('services.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('services.subtitle')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Choose from our comprehensive range of astrology services designed to provide you with deep insights and practical guidance for all aspects of your life.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                        <Star className="w-6 h-6 text-orange-600" />
                      </div>
                      <Badge variant="secondary" className="bg-orange-50 text-orange-700 text-lg px-3 py-1">
                        {service.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Book Consultation
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
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
              Ready to Unlock Your Destiny?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Book your consultation today and discover what the stars have in store for you.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <ServicesContent />
    </LanguageProvider>
  );
}