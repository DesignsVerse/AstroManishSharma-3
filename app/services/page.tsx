

import ServicesPage from '@/components/services/services';
import React from 'react';

export const metadata = {
  title: 'Astrology Services by Pandit Manish Sharma - Maa Baglamukhi Puja & More',
  description: 'Explore astrology services by Pandit Manish Sharma including Maa Baglamukhi Puja, Vedic readings, and personalized consultations at Maa Baglamukhi Mandir.',
  keywords: 'Pandit Manish Sharma, Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Mandir, Maa Baglamukhi Puja, Maa Baglamukhi Pandit, Maa Baglamukhi Pujan, Best Maa Baglamukhi Pandit, Best Maa Baglamukhi Puja',
  openGraph: {
    title: 'Astrology Services - Pandit Manish Sharma & Maa Baglamukhi Mandir',
    description: 'Discover a range of astrology services including Maa Baglamukhi Puja and Vedic readings by Pandit Manish Sharma.',
    url: 'http://maabaglamukhipujan.com/service',
    siteName: 'Maa Baglamukhi Mandir',
    images: [
      {
        url: 'http://maabaglamukhipujan.com/images/services.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrology Services - Pandit Manish Sharma',
    description: 'Get expert astrology services including Maa Baglamukhi Puja by Pandit Manish Sharma at Maa Baglamukhi Mandir.',
    images: ['http://maabaglamukhipujan.com/images/services.jpg'],
  },
  alternates: {
    canonical: 'http://maabaglamukhipujan.com/service',
    languages: {
      'en': 'http://maabaglamukhipujan.com/en/service',
      'hi': 'http://maabaglamukhipujan.com/hi/service',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Service = () => {
  return (
    <div>
      <ServicesPage />
    </div>
  );
};

export default Service;