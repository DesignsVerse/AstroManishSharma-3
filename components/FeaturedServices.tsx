"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, TrendingUp, Heart, Shield } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedServices() {
  const { t } = useLanguage();

  const featuredServices = [
    {
      icon: Star,
      title: "Birth Chart Reading",
      description: "Discover your cosmic blueprint and life purpose",
      price: "₹2,999",
      duration: "60 min",
      popular: true,
      link: "/services/birth-chart-analysis"
    },
    {
      icon: Heart,
      title: "Love Compatibility",
      description: "Find your perfect match through astrology",
      price: "₹3,499",
      duration: "45 min",
      popular: false,
      link: "/services/relationship-compatibility"
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Navigate your professional journey with confidence",
      price: "₹2,499",
      duration: "45 min",
      popular: false,
      link: "/services/career-guidance"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Most Popular Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey with our most sought-after astrology consultations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 relative ${service.popular ? 'ring-2 ring-orange-200' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <service.icon className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-orange-600">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Link href={service.link}>Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}