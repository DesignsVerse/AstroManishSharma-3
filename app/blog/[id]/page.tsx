"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, User, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { blogDetails } from '@/data/blogDetails';

interface BlogDetailContentProps {
  params: { id: string };
}

function BlogDetailContent({ params }: BlogDetailContentProps) {
  const { language } = useLanguage();
  const blogId = params.id;

  const blog = blogDetails[language][blogId];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button asChild variant="ghost" className="text-orange-600 hover:text-orange-700">
                  <Link href="/blog" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Badge className="mb-4 bg-orange-600 text-white">
                  {blog.category}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {blog.title}
                </h1>
                <p className="text-xl text-orange-600 font-semibold mb-8">
                  {blog.subtitle}
                </p>
                <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Button variant="outline" size="sm" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Article
                  </Button>
                  <Button variant="outline" size="sm" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Save for Later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="py-8 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-orange-50 text-orange-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want Personalized Guidance?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Get a personal consultation with our expert astrologers and discover insights tailored specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/blog">Read More Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface BlogDetailPageProps {
  params: { id: string };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return (
    <LanguageProvider>
      <BlogDetailContent params={params} />
    </LanguageProvider>
  );
}