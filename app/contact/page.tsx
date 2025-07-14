"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactComponent from '@/components/contact';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 py-16 bg-gradient-to-b from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
            </h1>
            <p className="text-xl text-orange-100 font-semibold mb-8">
              {language === 'hi' ? 'हम आपकी ज्योतिष यात्रा में मदद के लिए यहाँ हैं।' : "We're here to help you with your astrological journey."}
            </p>
            <p className="text-orange-100 leading-relaxed text-lg">
              {language === 'hi' ? 'परामर्श, सवाल या किसी भी सहायता के लिए हमसे संपर्क करें। हमारी टीम जल्द से जल्द जवाब देगी।' : 'Reach out for consultations, questions, or any support you need. Our team will respond as soon as possible.'}
            </p>
          </div>
        </div>
      </section>
      <main className="pt-20">
        <ContactComponent />
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'hi' ? 'हमारी ज्योतिष सेवाओं और परामर्श से जुड़े सामान्य सवाल।' : 'Common questions about our astrology services and consultations.'}
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {language === 'hi' ? 'ज्योतिष भविष्यवाणियाँ कितनी सटीक होती हैं?' : 'How accurate are astrology predictions?'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {language === 'hi' ? 'हमारी भविष्यवाणियाँ प्रामाणिक वैदिक ज्योतिष सिद्धांतों पर आधारित हैं और 98% से अधिक सटीकता रखती हैं। हम पारंपरिक तकनीकों को आधुनिक दृष्टिकोण के साथ जोड़ते हैं ताकि आपको सबसे सटीक मार्गदर्शन मिल सके।' : 'Our predictions are based on authentic Vedic astrology principles with over 98% accuracy rate. We combine traditional techniques with modern insights to provide you with the most precise guidance possible.'}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {language === 'hi' ? 'परामर्श के लिए मुझे कौन सी जानकारी देनी होगी?' : 'What information do I need for a consultation?'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {language === 'hi' ? 'सबसे सटीक फलादेश के लिए हमें आपकी सही जन्म तिथि, समय और स्थान चाहिए। यह जानकारी आपकी जन्म कुंडली बनाने और व्यक्तिगत सलाह देने के लिए आवश्यक है।' : 'For the most accurate reading, we need your exact birth date, time, and place. This information is crucial for creating your birth chart and providing personalized insights.'}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {language === 'hi' ? 'एक परामर्श में कितना समय लगता है?' : 'How long does a consultation take?'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {language === 'hi' ? 'परामर्श का समय सेवा के अनुसार बदलता है, जो 30 से 60 मिनट तक हो सकता है। हर सत्र में विस्तृत विश्लेषण और आपके सवालों के लिए समय शामिल होता है।' : 'Consultation duration varies by service, ranging from 30 minutes to 60 minutes. Each session includes detailed analysis and time for your questions.'}
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

