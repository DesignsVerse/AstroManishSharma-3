"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonials = t('testimonials.items') as any[];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= testimonials.length) return 0;
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-amber-400 fill-current' : 'text-gray-200'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Mobile view - single testimonial */}
          <div className="lg:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full shadow-sm border-orange-100 bg-white/70 hover:shadow-md transition-shadow mx-4">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="absolute top-4 right-4 text-amber-100">
                    <Quote className="w-10 h-10" />
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-6 italic flex-1">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 bg-amber-100">
                        {testimonials[currentIndex].image && (
                          <AvatarImage src={testimonials[currentIndex].image} />
                        )}
                        <AvatarFallback className="text-amber-600 font-medium">
                          {testimonials[currentIndex].name.split(' ').map((n: string) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs">
                      {testimonials[currentIndex].service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Desktop view - 3 testimonials */}
          <div className="hidden lg:block">
            <div 
              ref={containerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => {
                // Handle overflow by looping back to start
                const actualIndex = (currentIndex + index) % testimonials.length;
                return (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full shadow-sm border-orange-100 bg-white/70 hover:shadow-md transition-shadow">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="absolute top-4 right-4 text-amber-100">
                          <Quote className="w-10 h-10" />
                        </div>
                        <div className="flex items-center gap-1 mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed mb-6 italic flex-1">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10 bg-amber-100">
                              {testimonial.image && (
                                <AvatarImage src={testimonial.image} />
                              )}
                              <AvatarFallback className="text-amber-600 font-medium">
                                {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-gray-900">
                                {testimonial.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {testimonial.location}
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs">
                            {testimonial.service}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}