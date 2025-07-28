"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  // Get all footer content from translation context
  const footer = t('footer');

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
              {footer.description}
            </p>
            <div className="flex gap-4">
              <Button asChild variant="ghost" size="icon" className="hover:bg-orange-600 hover:text-white" title="Facebook">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-orange-600 hover:text-white" title="Instagram">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-orange-600 hover:text-white" title="Twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-orange-600 hover:text-white" title="Youtube">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.quickLinks.title}</h4>
            <ul className="space-y-2">
              {footer.quickLinks.links.map((link: string, index: number) => {
                let href = '/';
                if (index !== 0) {
                  href = `/${link.toLowerCase().replace(/\s+/g, '-')}`;
                }
                // If the link is in English, try to use t('header.nav.key'), else just show the link as is (for Hindi)
                const isEnglish = /^[A-Za-z0-9 _-]+$/.test(link);
                let label = link;
                if (isEnglish) {
                  const key = link.toLowerCase().replace(/\s+/g, '');
                  label = t(`header.nav.${key}`) || link;
                }
                return (
                  <li key={index}>
                    <Link 
                      href={href}
                      className="text-gray-400 hover:text-orange-600 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.services.title}</h4>
            <ul className="space-y-2">
              {(t('services.items') as any[]).slice(0, 15).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={`/services/${service.id}`}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {service.title}
                  
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                <Link href="/services">{t('viewMore')}</Link>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.contact.title}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">{footer.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">{footer.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white">{footer.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="text-center text-gray-400">
          <p>{footer.copyright.replace('2024', currentYear)}</p>
        </div>
      </div>
    </footer>
  );
}