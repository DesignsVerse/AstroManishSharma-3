"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, CheckCircle, ArrowLeft, Users, Award, Shield } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { serviceDetails } from '@/data/serviceDetails';
import { ServiceId } from '@/types/service';

function ServiceDetailContent() {
  const { t, language } = useLanguage();
  const params = useParams();
  const serviceId = params.id as ServiceId;

  const service = serviceDetails[language][serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Button asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button asChild variant="ghost" className="text-orange-600 hover:text-orange-700">
                  <Link href="/services" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                  </Link>
                </Button>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-orange-600 font-semibold mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-orange-50 text-orange-700 text-lg px-4 py-2">
                        {service.price}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{service.duration}</span>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                  >
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                What's Included
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                What You'll Receive
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {service.whatYouGet.map((item: string, index: number) => (
                  <Card key={index} className="border-orange-100">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <Star className="w-5 h-5 text-orange-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Our Service
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {service.whyChoose.map((reason: string, index: number) => (
                  <Card key={index} className="text-center border-orange-100">
                    <CardContent className="p-6">
                      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        {index === 0 && <Award className="w-8 h-8 text-orange-600" />}
                        {index === 1 && <Star className="w-8 h-8 text-orange-600" />}
                        {index === 2 && <Users className="w-8 h-8 text-orange-600" />}
                        {index === 3 && <Shield className="w-8 h-8 text-orange-600" />}
                        {index === 4 && <CheckCircle className="w-8 h-8 text-orange-600" />}
                        {index === 5 && <Clock className="w-8 h-8 text-orange-600" />}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Book your {service.title.toLowerCase()} consultation today and discover the insights that await you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/services">View Other Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function ServiceDetailPage() {
  return (
    <LanguageProvider>
      <ServiceDetailContent />
    </LanguageProvider>
  );
}