"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { Button } from '@/components/ui/button';
import { Search, Home } from 'lucide-react';
import Link from 'next/link';

function NotFoundContent() {
  const { t, language } = useLanguage();

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
                {language === 'hi' ? 'पेज नहीं मिला' : 'Page Not Found'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'hi'
                  ? 'आप जो पेज ढूंढ रहे हैं, वह मौजूद नहीं है या हटा दिया गया है। कृपया URL जांचें या होम पेज पर जाएं।'
                  : "The page you're looking for doesn't exist or may have been moved. Please check the URL or go to the home page."}
              </p>
            </div>
            <div className="space-y-4">
              <Button 
                asChild 
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  {language === 'hi' ? 'होम पेज पर जाएं' : 'Go Home'}
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
    <LanguageProvider>
      <NotFoundContent />
    </LanguageProvider>
  );
} 