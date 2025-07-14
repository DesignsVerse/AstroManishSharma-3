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

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid - Always 2 columns on mobile, 3 on tablet/desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-10">
          {displayedServices.map((service, index) => (
            <Link href={`/services/${service.id}`} key={index} className="block group">
              <Card 
                className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-300 overflow-hidden h-full flex flex-col cursor-pointer"
              >
                {/* Image with fixed aspect ratio */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    priority={index < 3} // Only prioritize first 3 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                {/* Card Content */}
                <div className="flex-1 p-3 sm:p-4 flex flex-col">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 flex-grow">
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-3">
                      {service.description}
                    </p>
                  </CardContent>

                  {/* Buttons */}
                  <div className="flex flex-row space-x-2 mt-auto">
                    <Button 
                      asChild
                      size="sm"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white h-8 sm:h-9"
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
                      size="sm"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 h-8 sm:h-9"
                    >
                      <a href="tel:+917733994827" onClick={e => e.stopPropagation()}>
                        {language === 'hi' ? 'कॉल करें' : 'Call Now'}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            className="border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 text-sm sm:text-base"
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