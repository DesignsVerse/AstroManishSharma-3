"use client";

// import { Product } from "@/data/products"; // Assuming you have a Product type defined
// Define Product type here since it's not exported from products-en or products-hi
export interface Product {
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
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IndianRupee, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import WhatsAppCallButtons from "@/components/ui/WhatsAppCallButtons";
import { useRouter } from "next/navigation";

interface FooterProductsProps {
  products: Product[];
}

export default function FooterProducts({ products }: FooterProductsProps) {
  const { language } = useLanguage();
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    const updateVisibleProducts = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setVisibleProducts(products.slice(0, 4)); // mobile: 4 cards
      } else {
        setVisibleProducts(products.slice(0, 3)); // desktop: 3 cards
      }
    };

    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);
    return () => window.removeEventListener('resize', updateVisibleProducts);
  }, [products]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const showAllProducts = () => {
    router.push("/products");
  };

  return (
    <div className="bg-[#FFFBEE] py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'hi' ? 'हमारे उत्पाद' : 'Our Products'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'hi' ? 'हमारे लोकप्रिय ज्योतिष उत्पादों की खोज करें' : 'Explore our most popular astrology products'}
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {visibleProducts.map((product) => (
              <div key={product.id} className="snap-start">
                <Card className="h-full border-orange-200">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-32 object-cover" // h-40 -> h-32 for smaller card
                    />
                    {product.badge && (
                      <Badge className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    
                    <div className="flex items-center mb-1">
                      <div className="flex text-amber-500 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                    
                    <p className="text-orange-700 font-bold text-sm flex items-center">
                      <IndianRupee className="w-3 h-3 mr-1" />
                      {product.price.toLocaleString(language === 'hi' ? 'en-IN' : 'en-US')}
                    </p>
                    
                    <WhatsAppCallButtons
                      whatsappNumber="917733994827"
                      callNumber="+917733994827"
                      whatsappText={language === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}
                      callText={language === 'hi' ? 'कॉल करें' : 'Call Now'}
                      message={`I'm interested in ${product.name}`}
                      className="mt-2 text-xs"
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
            
        </div>
        
        {visibleProducts.length < products.length && (
          <div className="text-center mt-6">
            <Button 
              onClick={showAllProducts}
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              {language === 'hi' ? 'और देखें' : 'View More'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}