"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type Service = {
  id: string;
  title: string;
  description: string;
  duration: string;
  content: { heading: string; description: string }[];
  benefits: string[];
  overview: string;
  process: string;
  howItWorks: { title: string; description: string }[];
  image: string;
};

export default function ServiceDetailContent({ params }: { params: { slug: string } }) {
  const { t, language } = useLanguage();
  const services = t('services.items') as Service[];

  const service = services.find(s => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter(s => s.id !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-orange-600 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-lg">{language === 'hi' ? 'सभी सेवाएँ' : 'All Services'}</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
                <p className="text-xl text-orange-100 mb-8">{service.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {service.content.map((item, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10 text-orange-50 hover:bg-white/20">
                      {item.heading}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Card - Only visible on mobile */}
      <div className="lg:hidden container mx-auto px-4 -mt-10 mb-10">
        <Card className="border border-orange-200 shadow-lg bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader className="bg-orange-50 border-b border-orange-100 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-7 h-7 text-orange-600 animate-pulse" />
              <CardTitle className="text-2xl font-bold text-gray-900">
                {language === 'hi' ? 'कॉल करें' : 'Call Now'}
              </CardTitle>
            </div>
            <Badge className="bg-green-100 text-green-700 mb-2 animate-pulse">
              {language === 'hi' ? 'उपलब्ध अभी' : 'Available Now'}
            </Badge>
            <CardDescription className="text-gray-600 text-center text-base">
              {language === 'hi' ? 'हमारे विशेषज्ञ ज्योतिषी से तुरंत बात करें!' : 'Talk to our expert astrologer instantly!'}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4 flex flex-col items-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-bold text-orange-700 tracking-wide bg-orange-100 px-4 py-1 rounded-lg border border-orange-200 shadow-sm">
                +123 456 7890
              </span>
              <span className="text-sm text-gray-500">{language === 'hi' ? '24x7 सहायता' : '24x7 Support'}</span>
            </div>
            <div className="space-y-4 w-full">
              <Button 
                asChild 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg animate-bounce shadow-lg"
              >
                <Link href="tel:+917733994827" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  {language === 'hi' ? 'कॉल करें' : 'Call Now'}
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 h-14 text-lg"
              >
                <Link href="/contact">{language === 'hi' ? 'सवाल पूछें' : 'Ask Questions'}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {language === 'hi' ? 'सेवा का अवलोकन' : 'Service Overview'}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.overview}
                </p>
              </div>

              {/* What's Included */}
              <div>
                {service.content.map((item, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">{item.heading}</h3>
                    <p className="text-gray-700 text-lg">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {language === 'hi' ? 'मुख्य लाभ' : 'Key Benefits'}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card (Desktop only) */}
            <div className="hidden lg:block lg:col-span-1">
              <Card className="sticky top-24 border border-orange-200 shadow-lg bg-gradient-to-r from-orange-50 to-amber-50">
                <CardHeader className="bg-orange-50 border-b border-orange-100 flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-7 h-7 text-orange-600 animate-pulse" />
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {language === 'hi' ? 'कॉल करें' : 'Call Now'}
                    </CardTitle>
                  </div>
                  <Badge className="bg-green-100 text-green-700 mb-2 animate-pulse">
                    {language === 'hi' ? 'उपलब्ध अभी' : 'Available Now'}
                  </Badge>
                  <CardDescription className="text-gray-600 text-center text-base">
                    {language === 'hi' ? 'हमारे विशेषज्ञ ज्योतिषी से तुरंत बात करें!' : 'Talk to our expert astrologer instantly!'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4 flex flex-col items-center">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl font-bold text-orange-700 tracking-wide bg-orange-100 px-4 py-1 rounded-lg border border-orange-200 shadow-sm">
                      +123 456 7890
                    </span>
                    <span className="text-sm text-gray-500">{language === 'hi' ? '24x7 सहायता' : '24x7 Support'}</span>
                  </div>
                  <div className="space-y-4 w-full">
                    <Button 
                      asChild 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg animate-bounce shadow-lg"
                    >
                      <Link href="tel:+917733994827" className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        {language === 'hi' ? 'कॉल करें' : 'Call Now'}
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 h-14 text-lg"
                    >
                      <Link href="/contact">{language === 'hi' ? 'सवाल पूछें' : 'Ask Questions'}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'hi' ? 'और सेवाएँ देखें' : 'Explore More Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'hi' ? 'जानिए हम आपकी यात्रा में और कैसे मदद कर सकते हैं' : 'Discover other ways we can help guide your journey'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <Card key={relatedService.id} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-48">
                    <Image
                      src={relatedService.image}
                      alt={relatedService.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {relatedService.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {relatedService.description}
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="mt-auto">
                  <div className="flex gap-2 w-full">
                    <Button 
                      asChild 
                      className="w-1/2 bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      <Link href={`/services/${relatedService.id}`}>{language === 'hi' ? 'विवरण देखें' : 'View More'}</Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-1/2 border-orange-600 text-orange-600 hover:bg-orange-50"
                    >
                      <Link href="tel:+917733994827">{language === 'hi' ? 'कॉल करें' : 'Call Now'}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}