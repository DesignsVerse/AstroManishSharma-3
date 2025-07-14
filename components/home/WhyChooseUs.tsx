"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock, Star, Heart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Award,
  Shield,
  Users,
  Clock,
  Star,
  Heart,
};

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const data = t('whyChooseUs');
  const reasons = data.reasons;

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {reasons.map((reason: any, index: number) => {
            const Icon = iconMap[reason.icon] || Award;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-orange-200 transition-colors">
                    <Icon className="w-5 h-5 md:w-8 md:h-8 text-orange-600" />
                  </div>
                  <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}