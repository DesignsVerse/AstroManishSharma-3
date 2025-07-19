"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Left Side */}
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

          {/* Image - Right Side */}
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/temple-1.jpg" // Update with your image path
              alt={t('about.title')}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}