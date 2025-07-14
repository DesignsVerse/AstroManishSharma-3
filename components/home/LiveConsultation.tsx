"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Video, Phone, MessageCircle, Calendar, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LiveConsultation() {
  const { t } = useLanguage();
  const [onlineAstrologers, setOnlineAstrologers] = useState(3);

  useEffect(() => {
    // Simulate changing number of online astrologers
    const interval = setInterval(() => {
      setOnlineAstrologers(prev => Math.max(2, Math.min(5, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const consultationMethods = [
    {
      icon: Video,
      title: "Video Call",
      description: "Face-to-face consultation with screen sharing",
      duration: "30-60 min"
    },
    {
      icon: Phone,
      title: "Voice Call",
      description: "Personal phone consultation at your convenience",
      duration: "30-45 min"
    },
    {
      icon: MessageCircle,
      title: "Chat Support",
      description: "Quick answers to your astrology questions",
      duration: "15-30 min"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {onlineAstrologers} Astrologers Online Now
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Instant Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with our expert astrologers right now for immediate guidance and support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {consultationMethods.map((method, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <method.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{method.duration}</span>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Link href="/contact">Start Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Astrologer */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <Badge className="bg-green-100 text-green-700">Available Now</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Master Astrologer Rajesh Sharma
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.9/5 from 1,200+ reviews)</span>
                </div>
                <p className="text-gray-600 mb-6">
                  15+ years of experience in Vedic astrology. Specializes in career guidance, relationship compatibility, and life predictions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Video className="w-4 h-4 mr-2" />
                    Video Call
                  </Button>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    <Phone className="w-4 h-4 mr-2" />
                    Voice Call
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src="https://images.pexels.com/photos/6077329/pexels-photo-6077329.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Master Astrologer"
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}