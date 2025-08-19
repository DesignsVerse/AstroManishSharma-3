"use client";

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import { getGalleryItems, GalleryItem } from '@/data/gallery/gallery';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegShareSquare, FaDownload, FaRegWindowClose, FaExpand, FaCompress, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FiHeart, FiBookmark, FiShare2 } from 'react-icons/fi';
import { Search, Sparkles } from 'lucide-react';
import Masonry from 'react-masonry-css';
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
    { id: 'puja', label: language === 'en' ? 'puja' : 'पूजा' },
    { id: 'videos', label: language === 'en' ? 'video' : 'वीडियो' },
  ];

  const filteredItems = galleryItems.filter(item => 
    (activeFilter === 'all' || 
     activeFilter === 'featured' && item.featured || 
     item.category === activeFilter) &&
    (searchTerm === '' || 
     item.category.toLowerCase().includes(searchTerm.toLowerCase()) 
     )
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

  const handleShare = () => alert(language === 'en' ? "Share feature coming soon!" : "साझा करने की सुविधा जल्द ही आ रही है!");
  const handleDownload = () => alert(language === 'en' ? "Download feature coming soon!" : "डाउनलोड सुविधा जल्द ही आ रही है!");
  const handleLike = () => alert(language === 'en' ? "Like feature coming soon!" : "लाइक्ड सुविधा जल्द ही आ रही है!");

  // Improved scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((el, index) => {
        const speed = 0.1 + (index * 0.02);
        if (el instanceof HTMLElement) {
          el.style.transform = `translateY(${scrollY * speed}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-10 min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800 relative overflow-hidden font-sans antialiased" ref={scrollContainerRef}>
      {/* Cosmic Background with updated colors */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 to-amber-100/90" />
      </div>

      {/* Animated Elements with updated colors */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-800/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 1.5}rem`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            data-parallax
          >
            {['ॐ', '♔', '✧', '♥', '⚝', '⋆', 'ꕥ', '𖤐', '𖧷', '𓆸', '✺', '𓋇', '☾', '☼', '𓃱'][i]}
          </motion.div>
        ))}
      </div>

      <main className="relative z-10">
        {/* Hero Section with Search Bar */}
        <section className="pt-20 bg- sm:pt-28 pb-12 sm:pb-16 relative">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div
              initial="hidden"
              animate="show"
              className="max-w-5xl mx-auto text-center"
            >
              <motion.div
                className="inline-flex items-center bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-amber-800/20 shadow-sm mb-4 sm:mb-6"
              >
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-amber-800 mr-2 sm:mr-3" />
                <span className="text-amber-800 font-semibold text-base sm:text-lg">
                  {language === 'en' ? 'Divine Gallery' : 'दिव्य गैलरी'}
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl pt-4 sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-serif bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-amber-800"
              >
                {language === 'en' ? 'Sacred Moments' : 'पवित्र क्षण'}
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-gray-800/80 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
              >
                {language === 'en' 
                  ? "Capturing the divine blessings and spiritual transformations" 
                  : "दिव्य आशीर्वाद और आध्यात्मिक परिवर्तनों को कैप्चर करना"}
              </motion.p>

              {/* Added Search Input for layout update */}
              <motion.div
                className="max-w-md mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={language === 'en' ? 'Search gallery...' : 'गैलरी खोजें...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/90 border border-amber-800/20 focus:border-amber-600 focus:ring-amber-600"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Filters - Horizontal Scroll on Mobile */}
        <section className="pb-5 pt-5 sm:pb-16 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div 
              initial="hidden"
              animate="show"
              className="flex overflow-x-auto pb-2 scrollbar-hide whitespace-nowrap"
            >
              <div className="inline-flex space-x-2 sm:space-x-3">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 min-w-max ${
                      activeFilter === filter.id 
                        ? 'bg-gradient-to-r from-amber-800 to-amber-600 text-white shadow-md' 
                        : 'bg-white/90 backdrop-blur-sm border border-amber-800/20 text-gray-800 hover:bg-amber-800/10'
                    }`}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Masonry Gallery with updated column layout */}
        <section className="pb-20 sm:pb-24 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            {filteredItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-lg text-gray-800/80">
                  {language === 'en' ? 'No items found matching your criteria' : 'आपकी खोज से मेल खाने वाली कोई वस्तु नहीं मिली'}
                </p>
              </motion.div>
            ) : (
              <Masonry
                breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
                className="flex -ml-6 sm:-ml-8"
                columnClassName="pl-6 sm:pl-8"
              >
                {filteredItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className="mb-6 sm:mb-8"
                  >
                    <Card 
                      className={`
                        bg-white/90 backdrop-blur-sm border border-amber-800/20 rounded-2xl overflow-hidden
                        shadow-md hover:shadow-lg transition-all duration-300
                        ${item.featured ? 'ring-2 ring-amber-600/60' : ''}
                      `}
                    >
                      <div 
                        className="relative group cursor-pointer overflow-hidden"
                        onClick={() => handleItemClick(item)}
                      >
                        {item.type === 'video' ? (
                          <video 
                            src={item.image}
                            className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <motion.img
                            src={item.image}
                            className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                            whileHover={{ scale: 1.02 }}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6">
                          <motion.div
                            className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <span className={`inline-block px-3 py-1 rounded-xl text-xs sm:text-sm font-semibold ${badgeColors[item.category]} mb-2 sm:mb-3`}>
                              {filters.find(f => f.id === item.category)?.label}
                            </span>
                          </motion.div>
                        </div>
                        
                        {item.type === 'video' && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-800/80 p-3 rounded-full">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </Masonry>
            )}
          </div>
        </section>

        {/* Stats Section */}
      
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
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2 sm:space-x-3 z-50">
              </div>
              <div className="flex items-center justify-between absolute inset-y-0 left-0 right-0 px-3 sm:px-4 pointer-events-none">
                <Button
                  variant="ghost"
                  className="p-1.5 sm:p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition pointer-events-auto"
                  onClick={handlePrevItem}
                  aria-label="Previous"
                >
                  <FaArrowLeft className="w-5 sm:w-6 h-5 sm:h-6 text-gray-800" />
                </Button>
                <Button
                  variant="ghost"
                  className="p-1.5 sm:p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition pointer-events-auto"
                  onClick={handleNextItem}
                  aria-label="Next"
                >
                  <FaArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-gray-800" />
                </Button>
              </div>
              <div className="h-full flex items-center justify-center p-4 sm:p-6">
                {selectedItem.type === 'video' ? (
                  <video 
                    src={selectedItem.image}
                    className={`max-w-full max-h-full object-contain ${fullscreen ? 'h-[80vh] sm:h-[90vh]' : 'h-auto'}`}
                    controls
                    autoPlay
                    muted={!fullscreen}
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedItem.image}
                    className={`max-w-full max-h-full object-contain ${fullscreen ? 'h-[80vh] sm:h-[90vh]' : 'h-auto'}`}
                  />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                <span className={`inline-block px-3 py-1 rounded-xl text-xs sm:text-sm font-semibold ${badgeColors[selectedItem.category]} mb-2 sm:mb-3`}>
                  {filters.find(f => f.id === selectedItem.category)?.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
