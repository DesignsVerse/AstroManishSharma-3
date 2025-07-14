"use client";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, User, Share2, Bookmark, MessageSquare, Eye } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';

// Helper function to generate image URL based on index
const getImageUrl = (index: number) => {
  // Use modulo to cycle through available images
  // This will work for unlimited blog posts
  const imageNumber = (index % 20) + 1; // 1-20 range, cycles back to 1 after 20
  return `/images/blog/${imageNumber}.png`;
};

function BlogPostContent() {
  const { t, language } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  const [isLoading, setIsLoading] = useState(true);
  const [views, setViews] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setViews(Math.floor(Math.random() * 1000) + 500);
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setIsBookmarked(bookmarks.includes(slug));
    }, 800);

    return () => clearTimeout(timer);
  }, [slug]);

  const posts = t('blog.posts') as any[];
  const post = posts.find((p: any) => p.id === slug);
  const postIndex = posts.findIndex((p: any) => p.id === slug);
  const relatedPosts = posts.filter(p => p.id !== slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => copyToClipboard());
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((id: string) => id !== slug);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      setIsBookmarked(false);
      toast.success('Removed from bookmarks');
    } else {
      bookmarks.push(slug);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      setIsBookmarked(true);
      toast.success('Added to bookmarks');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen">
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{language === 'hi' ? 'ब्लॉग पोस्ट नहीं मिली' : 'Blog Post Not Found'}</h1>
              <p className="text-gray-600 mb-8">{language === 'hi' ? 'आप जो ब्लॉग पोस्ट ढूंढ रहे हैं, वह मौजूद नहीं है।' : "The blog post you're looking for doesn't exist."}</p>
              <Button asChild>
                <Link href="/blog">{language === 'hi' ? 'ब्लॉग पर वापस जाएँ' : 'Back to Blog'}</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {language === 'hi' ? 'ब्लॉग पर वापस जाएँ' : 'Back to Blog'}
              </Link>
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-orange-600 text-white">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{views} views</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content (Left Side) */}
              <div className="lg:w-2/3">
                <Card className="overflow-hidden shadow-sm">
                  {isLoading ? (
                    <Skeleton className="w-full h-96" />
                  ) : (
                    <div className="relative h-96">
                      <img
                        src={getImageUrl(postIndex)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex gap-3 mb-6">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleShare}
                        className="flex items-center gap-2"
                      >
                        <Share2 className="w-4 h-4" />
                        {language === 'hi' ? 'साझा करें' : 'Share'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={toggleBookmark}
                        className="flex items-center gap-2"
                      >
                        <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
                        {isBookmarked ? (language === 'hi' ? 'बुकमार्क किया गया' : 'Bookmarked') : (language === 'hi' ? 'बुकमार्क करें' : 'Bookmark')}
                      </Button>
                    </div>
                    
                    {isLoading ? (
                      <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                          <Skeleton key={i} className="w-full h-6" />
                        ))}
                      </div>
                    ) : (
                      <div className="prose max-w-none">
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        <div className="text-gray-700 leading-relaxed space-y-6">
                          {post.content.map((section: any, index: number) => (
                            <div key={index} className="space-y-4">
                              {section.heading && (
                                <h3 className="text-xl font-semibold text-gray-900">
                                  {section.heading}
                                </h3>
                              )}
                              {Array.isArray(section.description) ? (
                                <ul className="list-disc pl-5 space-y-2">
                                  {section.description.map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p>{section.description}</p>
                              )}
                            </div>
                          ))}
                          
                          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                            <h3 className="text-xl font-semibold text-orange-800 mb-3">{language === 'hi' ? 'मुख्य बातें' : 'Key Takeaways'}</h3>
                            <ul className="list-disc pl-5 space-y-2 text-orange-700">
                              <li>{language === 'hi' ? 'ग्रहों की स्थिति का महत्व समझें' : 'Understand the significance of planetary positions'}</li>
                              <li>{language === 'hi' ? 'ज्योतिषीय चार्ट को पढ़ना सीखें' : 'Learn how to interpret astrological charts'}</li>
                              <li>{language === 'hi' ? 'आम ज्योतिषीय समस्याओं के उपाय जानें' : 'Discover remedies for common astrological challenges'}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Comments Section */}
                
              </div>

              {/* Sidebar (Right Side) */}
              <div className="lg:w-1/3 space-y-6">
                {/* Related Posts */}
                <Card>
                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-semibold">{language === 'hi' ? 'संबंधित लेख' : 'Related Articles'}</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((post, index) => (
                      <Link key={index} href={`/blog/${post.id}`} className="group block">
                        <div className="flex gap-3">
                          <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                            <img
                              src={getImageUrl(index)}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {post.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-orange-600 to-amber-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{language === 'hi' ? 'अपनी व्यक्तिगत रीडिंग प्राप्त करें' : 'Get Your Personal Reading'}</h3>
                    <p className="mb-4 text-orange-100">
                      {language === 'hi' ? 'व्यक्तिगत ज्योतिषीय रीडिंग के साथ जानें सितारे आपके लिए क्या कहते हैं।' : 'Discover what the stars have in store for you with a personalized astrology reading.'}
                    </p>
                    <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-medium">
                      {language === 'hi' ? 'अभी बुक करें' : 'Book Now'}
                    </Button>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-semibold">{language === 'hi' ? 'लोकप्रिय टैग्स' : 'Popular Tags'}</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['Horoscope', 'Vedic', 'Zodiac', 'Planets', 'Remedies', 'Kundli', 'Palmistry', 'Numerology'].map((tag, i) => (
                        <Link 
                          key={i} 
                          href="#" 
                          className="text-sm px-3 py-1 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-700 rounded-full transition-colors"
                        >
                          {language === 'hi'
                            ? tag === 'Horoscope' ? 'राशिफल'
                              : tag === 'Vedic' ? 'वैदिक'
                              : tag === 'Zodiac' ? 'राशि'
                              : tag === 'Planets' ? 'ग्रह'
                              : tag === 'Remedies' ? 'उपाय'
                              : tag === 'Kundli' ? 'कुंडली'
                              : tag === 'Palmistry' ? 'हस्तरेखा'
                              : tag === 'Numerology' ? 'अंक ज्योतिष'
                              : tag
                            : tag}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'hi' ? 'ज्योतिष अपडेट्स के लिए जुड़े रहें' : 'Stay Updated with Astrology Insights'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'hi' ? 'हमारे न्यूज़लेटर के लिए सब्सक्राइब करें और नवीनतम ज्योतिष लेख व भविष्यवाणियाँ सीधे अपने इनबॉक्स में पाएं।' : 'Subscribe to our newsletter and receive the latest astrology articles and predictions directly in your inbox.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  placeholder={language === 'hi' ? 'अपना ईमेल पता' : 'Your email address'}
                  className="flex-1 bg-white"
                />
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 px-6"
                >
                  {language === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function BlogPostPage() {
  return (
    <LanguageProvider>
      <BlogPostContent />
    </LanguageProvider>
  );
}