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

function BlogContent() {
  const { t } = useLanguage();

  const posts = t('blog.posts') as any[];

  // Extended blog posts for variety
  const allPosts = [
    ...posts,
    {
      id: "2024-horoscope-predictions",
      title: "2024 Horoscope Predictions",
      excerpt: "Discover what the year 2024 holds for each zodiac sign with detailed predictions.",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Predictions",
      image: "/api/placeholder/400/250"
    },
    {
      id: "gemstone-healing-properties",
      title: "Gemstone Healing Properties",
      excerpt: "Learn about the healing properties of different gemstones and their astrological significance.",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Gemstones",
      image: "/api/placeholder/400/250"
    },
    {
      id: "career-astrology-guide",
      title: "Career Astrology Guide",
      excerpt: "How to use astrology to make better career decisions and find your professional path.",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Career",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('blog.subtitle')}
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 py-3 border-orange-200 focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-2xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src="https://images.pexels.com/photos/6077329/pexels-photo-6077329.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Featured article"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4 bg-orange-600 text-white">Featured</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {posts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {posts[0].readTime}
                      </div>
                    </div>
                    <Button 
                      asChild 
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      <Link href="/blog/understanding-moon-sign" className="flex items-center gap-2">
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Recent Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '6077329' : 
                        index === 1 ? '6077368' : 
                        index === 2 ? '6077334' :
                        index === 3 ? '6077335' :
                        index === 4 ? '6077336' : '6077337'
                      }/pexels-photo-${
                        index === 0 ? '6077329' : 
                        index === 1 ? '6077368' : 
                        index === 2 ? '6077334' :
                        index === 3 ? '6077335' :
                        index === 4 ? '6077336' : '6077337'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Astrology Insights
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest astrology articles and predictions directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                className="flex-1 bg-white border-0 py-3"
              />
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 font-semibold"
              >
                Subscribe
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
    <LanguageProvider>
      <BlogContent />
    </LanguageProvider>
  );
}