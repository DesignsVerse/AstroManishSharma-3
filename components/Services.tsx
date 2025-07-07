"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const { t } = useLanguage();

  const services = t('services.items') as any[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white mb-2"
                >
                  <Link href={`/services/${service.id}`}>Learn More</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}