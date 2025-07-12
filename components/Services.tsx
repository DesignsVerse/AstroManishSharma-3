"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesPreview() {
  const { t, language } = useLanguage();
  const services = t('services.items') as any[];
  const displayedServices = services.slice(0, 6); // Show first 6 services

  // Function to truncate description for mobile
  const truncateDescription = (desc: string) => {
    if (typeof desc !== 'string') return desc;
    return desc.length > 100 ? `${desc.substring(0, 100)}...` : desc;
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {displayedServices.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-32 md:h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority={index < 2} // Only prioritize first 2 images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              <CardHeader className="pb-2 md:pb-4 px-3 md:px-6">
                <CardTitle className="text-base md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0 flex-grow px-3 md:px-6">
                <div className="mb-3 md:mb-6">
                  <span className="text-gray-700 text-xs md:text-sm line-clamp-3">
                    {truncateDescription(service.description)}
                  </span>
                </div>
              </CardContent>

              <div className="px-3 md:px-6 pb-3 md:pb-6">
                <div className="flex flex-col space-y-2">
                  <Button 
                    asChild 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs md:text-sm h-8 md:h-10"
                  >
                    <Link href={`/services/${service.id}`}>
                      {language === 'hi' ? 'और जानें' : 'View More'}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 text-xs md:text-sm h-8 md:h-10"
                  >
                    <a href="tel:+917733994827">
                      {language === 'hi' ? 'अभी कॉल करें' : 'Call Now'}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base"
          >
            <Link href="/services">
              {language === 'hi' ? 'सभी सेवाएँ देखें' : 'View All Services'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}