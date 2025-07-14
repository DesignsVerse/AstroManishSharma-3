"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function AboutAstrologer() {
  const { t } = useLanguage();
  const data = t('aboutAstrologer');

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
          </div>
          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>
            <p className="text-xl text-orange-600 font-semibold mb-6">
              {data.subtitle}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 