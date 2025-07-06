"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold">{t('header.logo')}</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-orange-600 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-orange-600 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-orange-600 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-orange-600 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Blog', 'About', 'Contact'].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={index === 0 ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {t(`header.nav.${link.toLowerCase()}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              {[
                'Birth Chart',
                'Compatibility',
                'Career Guidance',
                'Health Astrology',
                'Gemstone Consultation'
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services"
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">{t('footer.contact.phone')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">{t('footer.contact.email')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white">{t('footer.contact.address')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}