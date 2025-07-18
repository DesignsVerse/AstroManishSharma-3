"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setScrolled(scrollPosition > 10);
  }, [scrollPosition]);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [scrollPosition]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm py-2 border-b border-gray-100' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors flex items-center"
          >
            <span className="bg-orange-100/80 px-3 py-1 rounded-lg">{t('header.logo')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {["home", "services", "blog", "about", "contact", "gallery"].map((item) => (
              <Link 
                key={item}
                href={`/${item === "home" ? "" : item}`}
                className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium relative group"
              >
                {t(`header.nav.${item}`)}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-orange-600 w-0 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
              <Globe className="w-4 h-4 text-gray-500 ml-2" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-white text-orange-600 shadow-sm' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  language === 'hi' 
                    ? 'bg-white text-orange-600 shadow-sm' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                हिं
              </button>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-sm hover:shadow-md transition-all">
              {t('header.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full text-xs ${
                  language === 'en' ? 'bg-white text-orange-600' : 'text-gray-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded-full text-xs ${
                  language === 'hi' ? 'bg-white text-orange-600' : 'text-gray-600'
                }`}
              >
                हिं
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-3 border-t border-gray-100 pt-4">
              {["home", "services", "blog", "about", "contact", "gallery"].map((item) => (
                <Link 
                  key={item}
                  href={`/${item === "home" ? "" : item}`}
                  className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`header.nav.${item}`)}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white w-full shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.cta')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Add this hook to your hooks folder (create a new file useScrollPosition.ts)
/*
import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};
*/