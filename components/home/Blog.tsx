"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Helper function to generate image URL based on index
const getImageUrl = (index: number, slideIndex: number = 0, postTitle?: string) => {
  // Use sequential numbering based on actual post index
  const actualPostIndex = index + (slideIndex * 3);
  
  // Check if we have images 1-10 (adjust range as needed)
  const availableImages = 10; // Number of available images
  const imageNumber = (actualPostIndex % availableImages) + 1;
  
  // If image number exceeds available images, return null
  if (imageNumber > availableImages) {
    console.log(`Post ${actualPostIndex}: No image available`);
    return null;
  }
  
  console.log(`Post ${actualPostIndex}: Image ${imageNumber}`);
  return `/images/blog/${imageNumber}.png`;
};

export default function Blog() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const posts = t('blog.posts') as any[];
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate how many sets of 3 cards we can show
  const totalSets = Math.ceil(posts.length / 3);

  // Handle navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSets);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSets) % totalSets);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll, totalSets]);

  // Get current set of 3 posts for desktop
  const getCurrentPosts = () => {
    const startIndex = currentIndex * 3;
    return posts.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next posts"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Mobile - Single Card Carousel */}
          <div className="lg:hidden overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {posts.map((post, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      {getImageUrl(index, currentIndex, post.title) ? (
                        <Image
                          src={getImageUrl(index, currentIndex, post.title)!}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">No Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button 
                        asChild 
                        variant="ghost" 
                        className="w-full justify-between text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      >
                        <Link href={`/blog/${post.id}`}>
                          {language === 'hi' ? 'और पढ़ें' : 'Read More'}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop - 3 Column Grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8">
              {getCurrentPosts().map((post, index) => (
                <motion.div
                  key={post.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      {getImageUrl(index, currentIndex, post.title) ? (
                        <Image
                          src={getImageUrl(index, currentIndex, post.title)!}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">No Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button 
                        asChild 
                        variant="ghost" 
                        className="w-full justify-between text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      >
                        <Link href={`/blog/${post.id}`}>
                          {language === 'hi' ? 'और पढ़ें' : 'Read More'}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Link href="/blog">{language === 'hi' ? 'सभी लेख देखें' : 'View All Articles'}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}