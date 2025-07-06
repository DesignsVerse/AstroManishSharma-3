"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Star, TrendingUp } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const stats = t('about.stats') as any[];

  const iconMap = {
    0: Calendar,
    1: Users,
    2: Star,
    3: TrendingUp,
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-orange-600 font-semibold mb-6">
              {t('about.subtitle')}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about.story')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = iconMap[index as keyof typeof iconMap];
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-orange-100 hover:border-orange-200">
                  <CardContent className="text-center p-6">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}