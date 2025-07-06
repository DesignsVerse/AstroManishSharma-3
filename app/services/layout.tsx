import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astrology Services - Professional Vedic Astrology Consultation',
  description: 'Discover our comprehensive astrology services including birth chart analysis, relationship compatibility, career guidance, and more. Expert Vedic astrology consultation.',
  keywords: 'astrology services, birth chart analysis, relationship compatibility, career guidance, vedic astrology, professional astrologer',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 