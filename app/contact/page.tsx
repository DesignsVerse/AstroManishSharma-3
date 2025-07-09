"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactComponent from '@/components/contact';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ContactComponent />
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about our astrology services and consultations.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    How accurate are astrology predictions?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our predictions are based on authentic Vedic astrology principles with over 98% accuracy rate. We combine traditional techniques with modern insights to provide you with the most precise guidance possible.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    What information do I need for a consultation?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    For the most accurate reading, we need your exact birth date, time, and place. This information is crucial for creating your birth chart and providing personalized insights.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    How long does a consultation take?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Consultation duration varies by service, ranging from 30 minutes to 60 minutes. Each session includes detailed analysis and time for your questions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

