"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, CheckCircle, Users, TrendingUp, Heart, Shield, Zap, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';

function ServicesContent() {
  const { t } = useLanguage();

  const services = t('services.items') as any[];

  const iconMap = {
    'birth-chart-analysis': Star,
    'relationship-compatibility': Heart,
    'career-guidance': TrendingUp,
    'health-astrology': Shield,
    'financial-astrology': Zap,
    'gemstone-consultation': BookOpen,
  };

  const benefits = [
    {
      icon: Users,
      title: "Expert Astrologers",
      description: "Experienced professionals with 15+ years of practice"
    },
    {
      icon: Target,
      title: "Accurate Predictions",
      description: "98% accuracy rate based on ancient Vedic wisdom"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Get your detailed report within 24-48 hours"
    },
    {
      icon: Shield,
      title: "Confidential Service",
      description: "Your privacy and personal information are protected"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Astrology Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover comprehensive astrology solutions tailored to your needs. From birth chart analysis to relationship compatibility, we provide expert guidance for every aspect of your life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-4 py-2">
                Professional Consultation
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-4 py-2">
                Vedic Astrology
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-4 py-2">
                Accurate Predictions
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.id as keyof typeof iconMap] || Star;
              
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-orange-600" />
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-orange-50 text-orange-700">
                      {service.price}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        asChild 
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      >
                        <Link href={`/services/${service.id}`}>Learn More</Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline"
                        className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
                      >
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine ancient wisdom with modern techniques to provide you with the most accurate and helpful astrological guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your Destiny?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards understanding your cosmic blueprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <ServicesContent />
    </LanguageProvider>
  );
}
