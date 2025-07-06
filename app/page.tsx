"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import DailyHoroscope from '@/components/DailyHoroscope';
import Services from '@/components/Services';
import LiveConsultation from '@/components/LiveConsultation';
import Blog from '@/components/Blog';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <FeaturedServices />
          <DailyHoroscope />
          <Services />
          <LiveConsultation />
          <Blog />
          <About />
          <WhyChooseUs />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}