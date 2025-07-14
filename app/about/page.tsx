

import AboutPage from '@/components/about/about';
import React from 'react';

export const metadata = {
  title: 'About Pandit Manish Sharma - Maa Baglamukhi Mandir & Astrology Expert',
  description: 'Learn about Pandit Manish Sharma, a renowned Vedic astrologer and expert in Maa Baglamukhi Puja at Maa Baglamukhi Mandir.',
  keywords: 'Pandit Manish Sharma, Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Mandir, Maa Baglamukhi Puja, Maa Baglamukhi Pandit, Maa Baglamukhi Pujan, Best Maa Baglamukhi Pandit, Best Maa Baglamukhi Puja',
  openGraph: {
    title: 'About Us - Pandit Manish Sharma & Maa Baglamukhi Mandir',
    description: 'Discover the journey of Pandit Manish Sharma, an expert in Vedic astrology and Maa Baglamukhi Puja.',
    url: 'http://maabaglamukhipujan.com/about',
    siteName: 'Maa Baglamukhi Mandir',
    images: [
      {
        url: 'http://maabaglamukhipujan.com/images/about.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pandit Manish Sharma - Maa Baglamukhi Puja',
    description: 'Know more about Pandit Manish Sharma, expert in Vedic astrology and Maa Baglamukhi Puja at Maa Baglamukhi Mandir.',
    images: ['http://maabaglamukhipujan.com/images/about.jpg'],
  },
  alternates: {
    canonical: 'http://maabaglamukhipujan.com/about',
    languages: {
      'en': 'http://maabaglamukhipujan.com/en/about',
      'hi': 'http://maabaglamukhipujan.com/hi/about',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const About = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default About;