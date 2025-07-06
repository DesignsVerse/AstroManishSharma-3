"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Star,
  CheckCircle,
  TrendingUp,
  Heart,
  Shield,
  Zap,
  BookOpen,
  ArrowLeft,
} from 'lucide-react';

import Link from 'next/link';
import { notFound } from 'next/navigation';

type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  benefits: string[];
  overview: string;
  process: string;
  howItWorks: { title: string; description: string }[];
};

export default function ServiceDetailContent({ params }: { params: { slug: string } }) {
  const { t } = useLanguage();
  const services = t('services.items') as Service[];

  const iconMap: Record<string, any> = {
    'birth-chart-analysis': Star,
    'relationship-compatibility': Heart,
    'career-guidance': TrendingUp,
    'health-astrology': Shield,
    'financial-astrology': Zap,
    'gemstone-consultation': BookOpen,
  };

  const service = services.find(s => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.id] || Star;
  const relatedServices = services.filter(s => s.id !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Link href="/services" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <IconComponent className="w-12 h-12 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{service.description}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-orange-100 text-orange-700 px-4 py-2">{service.price}</Badge>
              <Badge className="bg-orange-100 text-orange-700 px-4 py-2">{service.duration}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* What's Included */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
                <p className="text-gray-700 leading-relaxed">{service.overview}</p>
              </div>

              {/* How It Works */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.howItWorks.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-orange-600">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Process</h2>
                <p className="text-gray-700 leading-relaxed">{service.process}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Book This Service</CardTitle>
                  <CardDescription>Get started with your personalized consultation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{service.price}</div>
                    <div className="text-gray-600">{service.duration} consultation</div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    {[
                      'Expert astrologer consultation',
                      'Detailed PDF report',
                      'Follow-up support',
                      'Confidential service',
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white" size="lg">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Services You Might Like</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our other comprehensive astrology services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService, index) => {
              const RelatedIcon = iconMap[relatedService.id] || Star;

              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
                  <CardHeader>
                    <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                      <RelatedIcon className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {relatedService.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{relatedService.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-orange-600">{relatedService.price}</span>
                      <span className="text-sm text-gray-500">{relatedService.duration}</span>
                    </div>
                    <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      <Link href={`/services/${relatedService.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
