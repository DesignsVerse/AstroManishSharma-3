

import ContactPage from '@/components/contact/contact';
import React from 'react';

export const metadata = {
  title: 'Contact Pandit Manish Sharma - Maa Baglamukhi Mandir Astrology Services',
  description: 'Get in touch with Pandit Manish Sharma for expert astrology consultations and Maa Baglamukhi Puja services at Maa Baglamukhi Mandir.',
  keywords: 'Pandit Manish Sharma, Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Pandit Manish Sharma, Maa Baglamukhi Mandir, Maa Baglamukhi Puja, Maa Baglamukhi Pandit, Maa Baglamukhi Pujan, Best Maa Baglamukhi Pandit, Best Maa Baglamukhi Puja',
  openGraph: {
    title: 'Contact Us - Pandit Manish Sharma & Maa Baglamukhi Mandir',
    description: 'Reach out to Pandit Manish Sharma for professional Vedic astrology and Maa Baglamukhi Puja services.',
    url: 'http://maabaglamukhipujan.com/contact',
    siteName: 'Maa Baglamukhi Mandir',
    images: [
      {
        url: 'http://maabaglamukhipujan.com/images/contact.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Pandit Manish Sharma - Maa Baglamukhi Puja',
    description: 'Contact Pandit Manish Sharma for astrology consultations and Maa Baglamukhi Puja at Maa Baglamukhi Mandir.',
    images: ['http://maabaglamukhipujan.com/images/contact.jpg'],
  },
  alternates: {
    canonical: 'http://maabaglamukhipujan.com/contact',
    languages: {
      'en': 'http://maabaglamukhipujan.com/en/contact',
      'hi': 'http://maabaglamukhipujan.com/hi/contact',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Contact = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Contact;