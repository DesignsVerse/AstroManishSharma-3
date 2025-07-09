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
            <Card className="shadow-xl border-orange-100 h-30%">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  {t('contact.info.location') || 'Our Location'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-30%">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.716068979762!2d76.2141693153845!3d23.10903541899178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA2JzMyLjUiTiA3NsKwMTInNTUuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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