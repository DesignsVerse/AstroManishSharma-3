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
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason: any, index: number) => {
            const Icon = iconMap[reason.icon] || Award;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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