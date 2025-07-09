"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="bg-orange-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Search className="w-12 h-12 text-orange-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Service Not Found
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The service you're looking for doesn't exist or may have been moved. 
                Please check the URL or browse our available services.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                asChild 
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Link href="/services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View All Services
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function NotFound() {
  return (
    <NotFoundContent />
  );
} 