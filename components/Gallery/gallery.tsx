"use client";

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import { getGalleryItems, GalleryItem } from '@/data/gallery/gallery';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Sparkles, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Gallery() {
  const { language } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Get gallery items based on current language
  const galleryItems = getGalleryItems(language);

  const filters = [
    { id: 'all', label: language === 'en' ? 'All' : 'सभी' },
    { id: 'yajman', label: language === 'en' ? 'With Devotees' : 'भक्तों के साथ' },
    { id: 'panditji', label: language === 'en' ? 'Panditji' : 'पंडितजी' },
    { id: 'puja', label: language === 'en' ? 'Puja' : 'पूजा' },
    { id: 'videos', label: language === 'en' ? 'Video' : 'वीडियो' },
  ];

  const filteredItems = galleryItems.filter(item => 
    (activeFilter === 'all' || item.category === activeFilter) &&
    (searchTerm === '' || item.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const badgeColors: { [key in GalleryItem['category']]: string } = {
    all: "bg-amber-600 text-white",
    panditji: "bg-amber-600 text-amber-100",
    yajman: "bg-amber-600 text-amber-100",
    puja: "bg-amber-600 text-white",
    videos: "bg-amber-600 text-amber-200",
    testimonials: "bg-amber-600 text-white"
  };

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setFullscreen(false);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setFullscreen(false);
  };

  const handleNextItem = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrevItem = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <div className="pt-10 min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800 relative overflow-hidden font-sans antialiased" ref={scrollContainerRef}>
      {/* Background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 to-amber-100/90" />
      </div>

      <main className="relative z-10">
        {/* Hero Section with Search */}
        <section className="pt-20 sm:pt-28 pb-12 sm:pb-16 relative">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 text-center">
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-xl border border-amber-800/20 shadow-sm mb-6">
              <Sparkles className="w-6 h-6 text-amber-800 mr-3" />
              <span className="text-amber-800 font-semibold text-lg">
                {language === 'en' ? 'Divine Gallery' : 'दिव्य गैलरी'}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-amber-800">
              {language === 'en' ? 'Sacred Moments' : 'पवित्र क्षण'}
            </h1>

            <p className="text-lg text-gray-800/80 max-w-2xl mx-auto leading-relaxed mb-10">
              {language === 'en'
                ? "Capturing the divine blessings and spiritual transformations"
                : "दिव्य आशीर्वाद और आध्यात्मिक परिवर्तनों को कैप्चर करना"}
            </p>

            {/* Search Input */}
            <div className="max-w-md mx-auto mb-8 relative">
              <Input
                type="text"
                placeholder={language === 'en' ? 'Search gallery...' : 'गैलरी खोजें...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/90 border border-amber-800/20 focus:border-amber-600 focus:ring-amber-600"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
            </div>
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="pb-5 pt-5 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex overflow-x-auto pb-2 scrollbar-hide whitespace-nowrap">
              <div className="inline-flex space-x-3">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 min-w-max ${
                      activeFilter === filter.id 
                        ? 'bg-gradient-to-r from-amber-800 to-amber-600 text-white shadow-md' 
                        : 'bg-white/90 border border-amber-800/20 text-gray-800 hover:bg-amber-800/10'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid - All images aligned & full visible */}
<section className="pb-20 sm:pb-24 bg-white">
  <div className="container mx-auto px-3 sm:px-4 lg:px-6">
    {filteredItems.length === 0 ? (
      <div className="text-center py-12">
        <p className="text-lg text-gray-800/80">
          {language === 'en' ? 'No items found matching your criteria' : 'आपकी खोज से मेल खाने वाली कोई वस्तु नहीं मिली'}
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <Card 
              className={`
                bg-white/90 backdrop-blur-sm border border-amber-800/20 
                rounded-2xl overflow-hidden shadow-md hover:shadow-lg 
                transition-all duration-300 h-72 w-full flex items-center justify-center
                ${item.featured ? 'ring-2 ring-amber-600/60' : ''}
              `}
            >
              {item.type === 'video' ? (
                <>
                  <video 
                    src={item.image}
                    className="max-w-full max-h-full object-contain"
                    muted
                    loop
                    playsInline
                  />
                  {/* Play Icon Centered */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                  bg-amber-800/80 p-3 rounded-full">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </>
              ) : (
                <img
                  src={item.image}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </Card>
          </div>
        ))}
      </div>
    )}
  </div>
</section>

      </main>

      {/* Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center px-3 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className={`relative bg-white/90 backdrop-blur-sm rounded-2xl w-full max-w-5xl overflow-hidden border border-amber-800/20 ${fullscreen ? 'h-screen max-h-screen' : 'max-h-[80vh] sm:max-h-[90vh]'}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between absolute inset-y-0 left-0 right-0 px-4 pointer-events-none">
                <Button
                  variant="ghost"
                  className="p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition pointer-events-auto"
                  onClick={handlePrevItem}
                  aria-label="Previous"
                >
                  <FaArrowLeft className="w-6 h-6 text-gray-800" />
                </Button>
                <Button
                  variant="ghost"
                  className="p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition pointer-events-auto"
                  onClick={handleNextItem}
                  aria-label="Next"
                >
                  <FaArrowRight className="w-6 h-6 text-gray-800" />
                </Button>
              </div>

              <div className="h-full flex items-center justify-center p-6">
                {selectedItem.type === 'video' ? (
                  <video 
                    src={selectedItem.image}
                    className={`max-w-full max-h-full object-contain ${fullscreen ? 'h-[90vh]' : 'h-auto'}`}
                    controls
                    autoPlay
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedItem.image}
                    className={`max-w-full max-h-full object-contain ${fullscreen ? 'h-[90vh]' : 'h-auto'}`}
                  />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <span className={`inline-block px-3 py-1 rounded-xl text-xs font-semibold ${badgeColors[selectedItem.category]} mb-3`}>
                  {filters.find(f => f.id === selectedItem.category)?.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
