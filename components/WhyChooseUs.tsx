"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock, Star, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Trusted expertise in Vedic and Western astrology with thousands of successful consultations."
    },
    {
      icon: Shield,
      title: "98% Accuracy Rate",
      description: "Our predictions are backed by authentic astrological methods and proven track record."
    },
    {
      icon: Users,
      title: "5000+ Happy Clients",
      description: "Join our community of satisfied clients who have transformed their lives through astrology."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Get guidance whenever you need it with our round-the-clock consultation services."
    },
    {
      icon: Star,
      title: "Personalized Approach",
      description: "Every reading is tailored specifically to your unique birth chart and life circumstances."
    },
    {
      icon: Heart,
      title: "Compassionate Guidance",
      description: "We provide caring, empathetic support to help you navigate life's challenges with confidence."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AstroMystic?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the most trusted name in astrology consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <reason.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}