"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  message: string;
};

type ServiceItem = {
  title: string;
  description?: string;
};

export default function ContactComponent() {
  const { t } = useLanguage();
  const { language } = useLanguage();
  const services = t('services.items') as ServiceItem[];
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log('Form submitted:', data);
      alert(t('contact.successMessage'));
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
      alert(t('contact.errorMessage'));
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <Card className="shadow-xl border-orange-100">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {t('contact.formTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.formLabels.name')}</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      {...form.register('name', { 
                        required: t('contact.formErrors.name') 
                      })} 
                      className="border-orange-200 focus:border-orange-500" 
                      placeholder={t('contact.formPlaceholders.name')}
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.formLabels.email')}</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...form.register('email', { 
                        required: t('contact.formErrors.email'),
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t('contact.formErrors.email')
                        }
                      })} 
                      className="border-orange-200 focus:border-orange-500" 
                      placeholder={t('contact.formPlaceholders.email')}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.formLabels.phone')}</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      {...form.register('phone', { 
                        required: t('contact.formErrors.phone'),
                        minLength: {
                          value: 8,
                          message: t('contact.formErrors.phone')
                        }
                      })} 
                      className="border-orange-200 focus:border-orange-500" 
                      placeholder={t('contact.formPlaceholders.phone')}
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">{t('contact.formLabels.service')}</Label>
                    <Select 
                      value={form.watch('service')} 
                      onValueChange={val => form.setValue('service', val, { shouldValidate: true })}
                    >
                      <SelectTrigger className="border-orange-200 focus:border-orange-500">
                        <SelectValue placeholder={t('contact.formPlaceholders.service')} />
                      </SelectTrigger>
                      <SelectContent>
                        {services?.map((service, idx) => (
                          <SelectItem key={idx} value={service.title}>{service.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {t('contact.formErrors.service')}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">{t('contact.formLabels.birthDate')}</Label>
                    <Input 
                      id="birthDate" 
                      type="date" 
                      {...form.register('birthDate', { 
                        required: t('contact.formErrors.name') 
                      })} 
                      className="border-orange-200 focus:border-orange-500" 
                    />
                    {form.formState.errors.birthDate && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.birthDate.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthTime">{t('contact.formLabels.birthTime')}</Label>
                    <Input 
                      id="birthTime" 
                      type="time" 
                      {...form.register('birthTime', { 
                        required: t('contact.formErrors.name') 
                      })} 
                      className="border-orange-200 focus:border-orange-500" 
                    />
                    {form.formState.errors.birthTime && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.birthTime.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthPlace">{t('contact.formLabels.birthPlace')}</Label>
                    <Input 
                      id="birthPlace" 
                      type="text" 
                      {...form.register('birthPlace', { 
                        required: t('contact.formErrors.name') 
                      })} 
                      className="border-orange-200 focus:border-orange-500" 
                      placeholder={t('contact.formPlaceholders.birthPlace')}
                    />
                    {form.formState.errors.birthPlace && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.birthPlace.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.formLabels.message')}</Label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    {...form.register('message', { 
                      required: t('contact.formErrors.message'),
                      minLength: {
                        value: 10,
                        message: t('contact.formErrors.message')
                      }
                    })} 
                    className="border-orange-200 focus:border-orange-500" 
                    placeholder={t('contact.formPlaceholders.message')} 
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg transition-colors duration-300"
                  disabled={form.formState.isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {form.formState.isSubmitting 
                    ? t('contact.form.submitting') 
                    : t('contact.submitButton')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            <Card className="shadow-xl border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  {t('contact.infoTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t('contact.phoneLabel')}
                    </h4>
                    <p className="text-gray-600">
                      {t('contact.info.phone')}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button
                        asChild
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2"
                      >
                        <a href="tel:+917733994827" className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {t('contact.info.callNow') || (language === 'hi' ? 'कॉल करें' : 'Call')}
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50 px-4 py-2"
                      >
                        <a
                          href={`https://wa.me/7733994827?text=${encodeURIComponent(
                            language === 'hi'
                              ? 'नमस्ते पंडित मनीष शर्मा जी मुझे मां बगलामुखी पूजा करवानी है।'
                              : 'Hello, I need astrology consultation'
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.11 1.52 5.82L0 24l6.18-1.52A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-2.12-.55-4.11-1.52-5.82zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.9.9-3.67-.22-.37A9.96 9.96 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm4.29-7.71l-1.42-1.42a1 1 0 00-1.42 0l-.29.29a8.01 8.01 0 01-3.18-3.18l.29-.29a1 1 0 000-1.42l-1.42-1.42a1 1 0 00-1.42 0l-.71.71a2.99 2.99 0 00-.29 3.18c1.13 2.26 3.13 4.26 5.39 5.39a2.99 2.99 0 003.18-.29l.71-.71a1 1 0 000-1.42z" />
                          </svg>
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t('contact.emailLabel')}
                    </h4>
                    <p className="text-gray-600">
                      {t('contact.info.email')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t('contact.addressLabel')}
                    </h4>
                    <p className="text-gray-600">
                      {t('contact.info.address')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t('contact.hoursTitle')}
                    </h4>
                    <p className="text-gray-600">
                      {t('contact.info.hoursValue')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Section */}
<Card className="shadow-xl border-orange-100 h-[380px]">
  <CardHeader>
    <CardTitle className="text-2xl text-gray-900">
      {t('contact.info.location') || 'Maa Baglamukhi Mandir'}
    </CardTitle>
  </CardHeader>
  <CardContent className="p-0 h-[350px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7137.147730209316!2d76.22609230654193!3d23.841389699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964b97a0576ae97%3A0x45323f30be84261c!2sBaglamukhi%20Mandir%20Nalkheda!5e1!3m2!1sen!2sin!4v1753252051245!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </CardContent>
</Card>
          </div>
        </div>
      </div>
    </section>
  );
}