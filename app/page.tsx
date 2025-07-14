

import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Blog from '@/components/home/Blog';
import About from '@/components/home/About';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import ContactComponent from '@/components/home/contact';
import AboutAstrologer from '@/components/home/AboutAstrologer';

export const metadata = {
  title: 'Maa Baglamukhi Puja & Vedic Astrology Services By Pandit Manish Sharma -',
  description: 'Discover expert astrology services and Maa Baglamukhi Puja by Pandit Manish Sharma at Maa Baglamukhi Mandir. Get personalized Vedic readings and spiritual guidance.',
  keywords: 'Pandit Manish Sharma, Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Mandir, Maa Baglamukhi Puja, Maa Baglamukhi Pandit, Maa Baglamukhi Pujan, Best Maa Baglamukhi Pandit, Best Maa Baglamukhi Puja',
  openGraph: {
    title: 'Welcome to Pandit Manish Sharma - Maa Baglamukhi Mandir',
    description: 'Explore Vedic astrology, Maa Baglamukhi Puja, and spiritual guidance with Pandit Manish Sharma. Visit us today!',
    url: 'http://maabaglamukhipujan.com',
    siteName: 'Maa Baglamukhi Mandir',
    images: [
      {
        url: 'http://maabaglamukhipujan.com/images/home.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pandit Manish Sharma - Maa Baglamukhi Puja',
    description: 'Get expert Vedic astrology and Maa Baglamukhi Puja services by Pandit Manish Sharma at Maa Baglamukhi Mandir.',
    images: ['http://maabaglamukhipujan.com/images/home.jpg'],
  },
  alternates: {
    canonical: 'http://maabaglamukhipujan.com',
    languages: {
      'en': 'http://maabaglamukhipujan.com/en',
      'hi': 'http://maabaglamukhipujan.com/hi',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        {/* <FeaturedServices /> */}
        {/* <DailyHoroscope /> */}
        
        {/* <LiveConsultation /> */}
        <AboutAstrologer />
        <Blog />
        <WhyChooseUs />
        <ContactComponent />
      </main>
    </div>
  );
}