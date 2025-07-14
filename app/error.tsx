"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

function ErrorContent({ reset }: { reset: () => void }) {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {language === 'hi' ? 'कुछ गलत हो गया' : 'Something Went Wrong'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'hi'
                  ? 'माफ़ कीजिए, आपके अनुरोध को संसाधित करते समय एक त्रुटि हुई। आप होम पेज पर जा सकते हैं या फिर से प्रयास कर सकते हैं।'
                  : 'Sorry, an error occurred while processing your request. You can go to the home page or try again.'}
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
              <Button 
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
                onClick={reset}
              >
                {language === 'hi' ? 'फिर से प्रयास करें' : 'Try Again'}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function Error({ reset }: { reset: () => void }) {
  return (
    <LanguageProvider>
      <ErrorContent reset={reset} />
    </LanguageProvider>
  );
} 