"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-orange-600">
            {t('header.logo')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('header.nav.home')}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('header.nav.services')}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('header.nav.blog')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('header.nav.about')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              {t('header.nav.contact')}
            </Link>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'hi' 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                हिं
              </button>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              {t('header.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t('header.nav.home')}
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t('header.nav.services')}
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t('header.nav.blog')}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t('header.nav.about')}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t('header.nav.contact')}
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 rounded text-sm transition-colors ${
                      language === 'en' 
                        ? 'bg-orange-600 text-white' 
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('hi')}
                    className={`px-2 py-1 rounded text-sm transition-colors ${
                      language === 'hi' 
                        ? 'bg-orange-600 text-white' 
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    हिं
                  </button>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  {t('header.cta')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}