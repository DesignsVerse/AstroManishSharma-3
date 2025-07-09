"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define form validation schema for both languages
const formSchema = (t: any) => z.object({
  name: z.string().min(2, { message: t('contact.formErrors.name') }),
  email: z.string().email({ message: t('contact.formErrors.email') }),
  phone: z.string().min(10, { message: t('contact.formErrors.phone') }),
  message: z.string().min(10, { message: t('contact.formErrors.message') }),
  service: z.string().min(1, { message: t('contact.formErrors.service') })
});

export default function ContactComponent() {
  const { t } = useLanguage();
  const form = useForm({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Add your form submission logic here
    alert(t('contact.successMessage'));
    form.reset();
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-amber-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {t('contact.formTitle')}
              </h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.formLabels.name')}
                  </label>
                  <Input
                    id="name"
                    placeholder={t('contact.formPlaceholders.name')}
                    {...form.register('name')}
                    className={`${form.formState.errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {form.formState.errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {form.formState.errors.name.message as string}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.formLabels.email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('contact.formPlaceholders.email')}
                      {...form.register('email')}
                      className={`${form.formState.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {form.formState.errors.email.message as string}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.formLabels.phone')}
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t('contact.formPlaceholders.phone')}
                      {...form.register('phone')}
                      className={`${form.formState.errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {form.formState.errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {form.formState.errors.phone.message as string}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.formLabels.service')}
                  </label>
                  <select
                    id="service"
                    {...form.register('service')}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 ${
                      form.formState.errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">{t('contact.formPlaceholders.service')}</option>
                    <option value="horoscope">{t('services.horoscope')}</option>
                    <option value="kundli">{t('services.kundli')}</option>
                    <option value="vastu">{t('services.vastu')}</option>
                    <option value="palmistry">{t('services.palmistry')}</option>
                    <option value="numerology">{t('services.numerology')}</option>
                  </select>
                  {form.formState.errors.service && (
                    <p className="mt-1 text-sm text-red-600">
                      {form.formState.errors.service.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.formLabels.message')}
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder={t('contact.formPlaceholders.message')}
                    {...form.register('message')}
                    className={`${form.formState.errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {form.formState.errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {form.formState.errors.message.message as string}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('contact.submitButton')}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-amber-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t('contact.infoTitle')}
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t('contact.phoneLabel')}
                      </h4>
                      <p className="text-gray-600 mt-1">
                        +91 98765 43210<br />
                        +91 12345 67890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t('contact.emailLabel')}
                      </h4>
                      <p className="text-gray-600 mt-1">
                        contact@astrologer.com<br />
                        support@astrologer.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {t('contact.addressLabel')}
                      </h4>
                      <p className="text-gray-600 mt-1">
                        {t('contact.address')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-amber-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t('contact.hoursTitle')}
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('days.monday')} - {t('days.friday')}</span>
                    <span className="font-medium text-gray-900">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('days.saturday')}</span>
                    <span className="font-medium text-gray-900">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('days.sunday')}</span>
                    <span className="font-medium text-gray-900">{t('contact.closed')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          {t('contact.locationTitle')}
        </h3>
        <div className="bg-white p-4 rounded-xl shadow-lg border border-amber-100">
          <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.123456789012!2d76.12345678901234!3d23.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiTiA3NsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maa Baglamukhi Temple Location"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-700 font-medium">
              {t('contact.address')}
            </p>
            <a
              href="https://goo.gl/maps/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-amber-600 hover:text-amber-700 font-medium"
            >
              {t('contact.viewOnMap')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}