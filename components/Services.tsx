"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

export default function ServicesPreview() {
  const { t } = useLanguage();
  const services = t('services.items') as any[];
  const displayedServices = services.slice(0, 6); // Show first 6 services

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0 flex-grow">
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <div className="px-6 pb-6">
                <Button 
                  asChild 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Link href={`/services/${service.id}`}>Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}