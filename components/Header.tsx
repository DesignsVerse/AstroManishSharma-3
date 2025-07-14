"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Search, BookText, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { debounce } from 'lodash';
import { blogEn } from '@/data/blog/blog-en';
import { blogHi } from '@/data/blog/blog-hi';
import { servicesEn } from '@/data/services/services-en';
import { servicesHi } from '@/data/services/services-hi';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const scrollPosition = useScrollPosition();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Select blog and services data based on language
  const blogData = language === 'hi' ? blogHi : blogEn;
  const servicesData = language === 'hi' ? servicesHi : servicesEn;

  // Merge blog posts and services into a single array for search
  const combinedData = [
    ...blogData.posts.map((item) => ({
      type: 'blog',
      title: item.title,
      slug: item.id,
      excerpt: item.excerpt,
      category: item.category,
    })),
    ...servicesData.items.map((item) => ({
      type: 'service',
      title: item.title,
      slug: item.id,
      excerpt: item.description,
      category: '', // services do not have category
    })),
  ];

  const [searchResults, setSearchResults] = useState<typeof combinedData>([]);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      setSearchResults(
        combinedData.filter((item) =>
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        )
      );
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, combinedData]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    if (!showSearch && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const debouncedScrollHandler = debounce(() => {
    setScrolled(scrollPosition > 10);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, 100);

  useEffect(() => {
    debouncedScrollHandler();
    return () => debouncedScrollHandler.cancel();
  }, [scrollPosition]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search logic here
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  const navItems = ['home', 'services', 'blog', 'about', 'contact'];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: ["easeOut"] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const searchResultVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md py-2 border-b border-gray-100' : 'bg-white/90 py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
            aria-label="Homepage"
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="mr-2"
              priority
            />
            <span className="text-xl sm:text-2xl font-bold text-orange-600 hidden sm:block">
              {t('header.logo')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item === 'home' ? '' : item}`}
                className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium relative group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
              >
                {t(`header.nav.${item}`)}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-orange-600 w-0 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar - Desktop and Search Button - Desktop */}
            {/*
            <AnimatePresence>
              {showSearch && (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 256, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSearch}
                  className="relative"
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder={t('header.search')}
                    className="border border-gray-300 rounded-full py-1.5 px-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                  />
                  {searchFocused && searchResults.length > 0 && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={searchResultVariants}
                      transition={{ staggerChildren: 0.05 }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto w-[1000px] max-w-full"
                    >
                      <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Search Results ({searchResults.length})
                        </h3>
                      </div>
                      {searchResults.map((item) => (
                        <motion.div
                          key={item.slug}
                          variants={searchResultVariants}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <Link
                            href={`/${item.type === 'blog' ? 'blog' : 'services'}/${item.slug}`}
                            className="block px-4 py-3 hover:bg-orange-50 transition-colors group"
                            onClick={() => {
                              setShowSearch(false);
                              setSearchQuery('');
                            }}
                          >
                            <div className="flex items-start">
                              <div className={`p-2 rounded-lg mr-3 ${
                                item.type === 'blog' 
                                  ? 'bg-blue-100 text-blue-600' 
                                  : 'bg-purple-100 text-purple-600'
                              }`}>
                                {item.type === 'blog' ? (
                                  <BookText className="w-4 h-4" />
                                ) : (
                                  <CalendarDays className="w-4 h-4" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h4 className="font-medium text-gray-900 group-hover:text-orange-600">
                                    {item.title}
                                  </h4>
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    item.type === 'blog' 
                                      ? 'bg-blue-50 text-blue-600' 
                                      : 'bg-purple-50 text-purple-600'
                                  }`}>
                                    {item.type === 'blog' ? 'Blog' : 'Service'}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{item.excerpt}</p>
                                <div className="mt-2 flex items-center">
                                  <span className="text-xs text-gray-400">{item.category}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                      {searchResults.length === 0 && searchQuery && (
                        <div className="px-4 py-3 text-center text-gray-500">
                          No results found for "{searchQuery}"
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
              aria-label={showSearch ? 'Close search' : 'Open search'}
            >
              <Search className="w-5 h-5" />
            </button>
            */}

            <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
              <Globe className="w-4 h-4 text-gray-500 ml-2" aria-hidden="true" />
              {['en', 'hi'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as 'en' | 'hi')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    language === lang
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                  aria-label={`Switch to ${lang === 'en' ? 'English' : 'Hindi'}`}
                >
                  {lang === 'en' ? 'EN' : 'हिं'}
                </button>
              ))}
            </div>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white shadow-sm hover:shadow-md transition-all focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              asChild
            >
              <Link href="/signup">{t('header.cta')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Search Button - Mobile */}
            {/*
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
              aria-label={showSearch ? 'Close search' : 'Open search'}
            >
              <Search className="w-5 h-5" />
            </button>
            */}

            <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
              {['en', 'hi'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as 'en' | 'hi')}
                  className={`px-2 py-1 rounded-full text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    language === lang ? 'bg-white text-orange-600' : 'text-gray-600'
                  }`}
                  aria-label={`Switch to ${lang === 'en' ? 'English' : 'Hindi'}`}
                >
                  {lang === 'en' ? 'EN' : 'हिं'}
                </button>
              ))}
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {/*
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3"
            >
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={t('header.search')}
                  className="border border-gray-300 rounded-full py-2 px-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                />
                {searchFocused && searchResults.length > 0 && (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={searchResultVariants}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto w-full max-w-[1000px]"
                  >
                    <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Search Results ({searchResults.length})
                      </h3>
                    </div>
                    {searchResults.map((item) => (
                      <motion.div
                        key={item.slug}
                        variants={searchResultVariants}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <Link
                          href={`/${item.type === 'blog' ? 'blog' : 'services'}/${item.slug}`}
                          className="block px-4 py-3 hover:bg-orange-50 transition-colors group"
                          onClick={() => {
                            setShowSearch(false);
                            setSearchQuery('');
                          }}
                        >
                          <div className="flex items-start">
                            <div className={`p-2 rounded-lg mr-3 ${
                              item.type === 'blog' 
                                ? 'bg-blue-100 text-blue-600' 
                                : 'bg-purple-100 text-purple-600'
                            }`}>
                              {item.type === 'blog' ? (
                                <BookText className="w-4 h-4" />
                              ) : (
                                <CalendarDays className="w-4 h-4" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h4 className="font-medium text-gray-900 group-hover:text-orange-600">
                                  {item.title}
                                </h4>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  item.type === 'blog' 
                                    ? 'bg-blue-50 text-blue-600' 
                                    : 'bg-purple-50 text-purple-600'
                                  }`}>
                                  {item.type === 'blog' ? 'Blog' : 'Service'}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{item.excerpt}</p>
                              <div className="mt-2 flex items-center">
                                <span className="text-xs text-gray-400">{item.category}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                    {searchResults.length === 0 && searchQuery && (
                      <div className="px-4 py-3 text-center text-gray-500">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </motion.div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        */}

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-3 pb-4"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <nav className="flex flex-col space-y-3 border-t border-gray-100 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${item === 'home' ? '' : item}`}
                    className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`header.nav.${item}`)}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white w-full shadow-sm hover:shadow-md transition-all focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                  asChild
                >
                  <Link href="/signup">{t('header.cta')}</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}