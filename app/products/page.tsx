"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star, ShieldCheck, Truck, IndianRupee, Gem } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { content } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppCallButtons from "@/components/ui/WhatsAppCallButtons";

// Product type
interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string | null;
  rating: number;
  reviews: number;
  description: string;
  longDescription: string;
  benefits: string[];
  materials: string;
  ritual: string;
  deliveryInfo: string;
  details: string;
}

export default function ProductsPage() {
  const { language } = useLanguage();
  const products = (content as any)[language].products as Product[];

  // Language specific content
  const pageContent = {
    en: {
      heroTitle: "Sacred Maa Baglamukhi Products",
      heroSubtitle: "Blessed by our priests with powerful mantras for spiritual growth and protection",
      shopNow: "Shop Now",
      collectionTitle: "Our Divine Collection",
      collectionSubtitle: "Each product is carefully crafted and blessed to bring you spiritual benefits and positive energy",
      whatsapp: "WhatsApp",
      callNow: "Call Now",
      benefitsTitle: "Why Choose Our Products",
      guidanceTitle: "Need Guidance for the Right Product?",
      guidanceSubtitle: "Our spiritual experts are available to help you choose the perfect item for your needs",
      chatWhatsapp: "Chat on WhatsApp",
      callConsultation: "Call for Consultation",
      benefits: [
        {
          icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
          title: "Authentic Products",
          description: "Genuine and sanctified items with proper rituals"
        },
        {
          icon: <Truck className="w-8 h-8 text-orange-600" />,
          title: "Fast Delivery",
          description: "Dispatched within 24 hours with free shipping"
        },
        {
          icon: <Gem className="w-8 h-8 text-orange-600" />,
          title: "Premium Quality",
          description: "Handcrafted with finest materials and blessings"
        }
      ]
    },
    hi: {
      heroTitle: "पवित्र माँ बगलामुखी उत्पाद",
      heroSubtitle: "हमारे पुजारियों द्वारा शक्तिशाली मंत्रों से अभिमंत्रित आध्यात्मिक विकास और सुरक्षा के लिए",
      shopNow: "अभी खरीदें",
      collectionTitle: "हमारा दिव्य संग्रह",
      collectionSubtitle: "प्रत्येक उत्पाद सावधानीपूर्वक तैयार किया गया है और आपके लिए आध्यात्मिक लाभ और सकारात्मक ऊर्जा लाने के लिए अभिमंत्रित किया गया है",
      whatsapp: "व्हाट्सएप",
      callNow: "अभी कॉल करें",
      benefitsTitle: "हमारे उत्पाद क्यों चुनें",
      guidanceTitle: "सही उत्पाद के लिए मार्गदर्शन चाहिए?",
      guidanceSubtitle: "हमारे आध्यात्मिक विशेषज्ञ आपकी आवश्यकताओं के लिए सही वस्तु चुनने में मदद करने के लिए उपलब्ध हैं",
      chatWhatsapp: "व्हाट्सएप पर चैट करें",
      callConsultation: "परामर्श के लिए कॉल करें",
      benefits: [
        {
          icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
          title: "प्रामाणिक उत्पाद",
          description: "उचित अनुष्ठानों के साथ वास्तविक और पवित्र वस्तुएं"
        },
        {
          icon: <Truck className="w-8 h-8 text-orange-600" />,
          title: "तेज डिलीवरी",
          description: "24 घंटे के भीतर मुफ्त शिपिंग के साथ भेजा जाता है"
        },
        {
          icon: <Gem className="w-8 h-8 text-orange-600" />,
          title: "प्रीमियम गुणवत्ता",
          description: "उत्कृष्ट सामग्री और आशीर्वाद के साथ हस्तनिर्मित"
        }
      ]
    }
  };

  const currentContent = pageContent[language as keyof typeof pageContent];

  return (
    <div className="bg-orange-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {currentContent.heroTitle}
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            {currentContent.heroSubtitle}
          </p>
          <Button className="bg-white text-orange-700 hover:bg-orange-100 px-8 py-6 text-lg font-semibold">
            {currentContent.shopNow}
          </Button>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              {currentContent.collectionTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {currentContent.collectionSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: Product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden shadow-lg border-orange-200 hover:shadow-xl transition-shadow">
                  <div className="relative">
                    {/* Product Image */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <Badge className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      <Link href={`/products/${product.slug}`} className="hover:text-orange-600">
                        {product.name}
                      </Link>
                    </h2>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex text-amber-500 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} {language === 'hi' ? 'समीक्षाएं' : 'reviews'})
                      </span>
                    </div>
                    
                    <p className="text-orange-700 font-bold text-lg mb-4 flex items-center">
                      <IndianRupee className="w-4 h-4 mr-1" />
                      {product.price.toLocaleString(language === 'hi' ? 'en-IN' : 'en-US')}
                    </p>
                    
                    <WhatsAppCallButtons
                      whatsappNumber="917733994827"
                      callNumber="+917733994827"
                      whatsappText={currentContent.whatsapp}
                      callText={currentContent.callNow}
                      message={`मैं ${product.name} में रुचि रखता हूँ`}
                      className="mt-2"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">
            {currentContent.benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-orange-50"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
<div className="bg-orange-800 text-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">{currentContent.guidanceTitle}</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      {currentContent.guidanceSubtitle}
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/917733994827?text=नमस्ते%2C%20मुझे%20सही%20उत्पाद%20के%20लिए%20मार्गदर्शन%20चाहिए"
        target="_blank"
      >
        <Button
          className="bg-white text-orange-800 hover:bg-orange-100 px-8 py-6 text-lg font-semibold"
        >
          <MessageCircle className="mr-2 h-5 w-5" /> व्हाट्सएप पर चैट करें
        </Button>
      </Link>

      {/* Call Button */}
      <Link href="tel:+917733994827">
        <Button
          className="bg-transparent border-2 border-white hover:bg-orange-700 px-8 py-6 text-lg font-semibold"
        >
          <Phone className="mr-2 h-5 w-5" /> परामर्श के लिए कॉल करें
        </Button>
      </Link>
    </div>
  </div>
</div>

    </div>
  );
}