"use client";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image'; // Added Image component from next/image

// Helper function to generate image URL based on index
const getImageUrl = (index: number) => {
  const imageNumber = (index % 20) + 1;
  return `/images/blog/${imageNumber}.png`;
};

function BlogContent() {
  const { t, language } = useLanguage();
  const posts = t('blog.posts') as any[];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-orange-500 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-orange-100 mb-6 md:mb-8">
                {t('blog.subtitle')}
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <Input 
                  placeholder={language === 'hi' ? 'लेख खोजें...' : 'Search articles...'} 
                  className="pl-10 py-2 md:py-3 text-sm md:text-base border-white/30 focus:border-white focus:ring-white bg-white/10 backdrop-blur-sm text-white placeholder:text-orange-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              {language === 'hi' ? 'हाल के लेख' : 'Recent Articles'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={getImageUrl(index)}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-orange-600 text-white text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-1 md:pb-2 px-3 md:px-6">
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 md:px-6 pb-3 md:pb-6 mt-auto">
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-between text-orange-600 hover:text-orange-700 hover:bg-orange-50 text-xs md:text-sm"
                    >
                      <Link href={`/blog/${post.id}`}>
                        {language === 'hi' ? 'और पढ़ें' : 'Read More'}
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              {language === 'hi' ? 'ज्योतिष अपडेट्स के लिए जुड़े रहें' : 'Stay Updated with Astrology Insights'}
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-orange-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              {language === 'hi' ? 'हमारे न्यूज़लेटर के लिए सब्सक्राइब करें और नवीनतम ज्योतिष लेख व भविष्यवाणियाँ सीधे अपने इनबॉक्स में पाएं।' : 'Subscribe to our newsletter and receive the latest astrology articles and predictions directly in your inbox.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder={language === 'hi' ? 'अपना ईमेल पता' : 'Your email address'}
                className="flex-1 bg-white border-0 py-2 md:py-3 text-sm md:text-base"
              />
              <Button 
                size="sm" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-4 md:px-8 py-2 md:py-3 font-semibold text-sm md:text-base"
              >
                {language === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function BlogPage() {
  return (
    <BlogContent />
  );
}