"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

function ContactContent() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      message: ''
    });
  };

  const services = t('services.items') as any[];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-orange-600 font-semibold mb-8">
                {t('contact.subtitle')}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('contact.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="shadow-xl border-orange-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Book Your Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.form.name')}</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">{t('contact.form.service')}</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="border-orange-200 focus:border-orange-500">
                            <SelectValue placeholder="Choose a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service.title}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="birthDate">{t('contact.form.birthDate')}</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange('birthDate', e.target.value)}
                          required
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthTime">{t('contact.form.birthTime')}</Label>
                        <Input
                          id="birthTime"
                          type="time"
                          value={formData.birthTime}
                          onChange={(e) => handleInputChange('birthTime', e.target.value)}
                          required
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthPlace">{t('contact.form.birthPlace')}</Label>
                        <Input
                          id="birthPlace"
                          type="text"
                          value={formData.birthPlace}
                          onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                          required
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.message')}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={4}
                        className="border-orange-200 focus:border-orange-500"
                        placeholder="Tell us about your specific questions or concerns..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-xl border-orange-100">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      {t('contact.info.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.phone')}</h4>
                        <p className="text-gray-600">{t('footer.contact.phone')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.email')}</h4>
                        <p className="text-gray-600">{t('footer.contact.email')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.address')}</h4>
                        <p className="text-gray-600">{t('footer.contact.address')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.hours')}</h4>
                        <p className="text-gray-600">{t('contact.info.hoursValue')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map placeholder */}
                <Card className="shadow-xl border-orange-100">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                        <p className="text-gray-600">Interactive Map</p>
                        <p className="text-sm text-gray-500">Find us easily</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

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

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
}