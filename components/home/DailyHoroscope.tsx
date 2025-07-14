"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, Heart, Briefcase, Coins } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DailyHoroscope() {
  const { t } = useLanguage();
  const [selectedSign, setSelectedSign] = useState('aries');

  const zodiacSigns = [
    { id: 'aries', name: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19' },
    { id: 'taurus', name: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20' },
    { id: 'gemini', name: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20' },
    { id: 'cancer', name: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22' },
    { id: 'leo', name: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22' },
    { id: 'virgo', name: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22' },
    { id: 'libra', name: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22' },
    { id: 'scorpio', name: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21' },
    { id: 'sagittarius', name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21' },
    { id: 'capricorn', name: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19' },
    { id: 'aquarius', name: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18' },
    { id: 'pisces', name: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20' }
  ];

  const horoscopes = {
    aries: {
      overall: "Today brings exciting opportunities for new beginnings. Your natural leadership qualities will shine.",
      love: "Romance is in the air. Single Aries may meet someone special through work connections.",
      career: "A promotion or new project opportunity may present itself. Trust your instincts.",
      finance: "Good day for investments, but avoid impulsive purchases. Stick to your budget.",
      rating: 4
    },
    taurus: {
      overall: "Stability and comfort are your themes today. Focus on building solid foundations.",
      love: "Existing relationships deepen. Show appreciation for your partner's efforts.",
      career: "Steady progress in ongoing projects. Your patience will be rewarded.",
      finance: "Conservative approach to money matters will serve you well today.",
      rating: 4
    },
    gemini: {
      overall: "Communication is key today. Your words have more impact than usual.",
      love: "Express your feelings clearly. Misunderstandings can be easily resolved.",
      career: "Networking and collaboration bring unexpected benefits.",
      finance: "Multiple income sources may present themselves. Stay organized.",
      rating: 5
    },
    cancer: {
      overall: "Trust your intuition today. Your emotional intelligence guides you well.",
      love: "Family and home life take priority. Create nurturing environments.",
      career: "Your caring nature helps resolve workplace conflicts.",
      finance: "Focus on long-term security rather than quick gains.",
      rating: 3
    },
    leo: {
      overall: "Your confidence attracts positive attention. Shine bright today.",
      love: "Romantic gestures are well-received. Plan something special.",
      career: "Leadership opportunities arise. Step into the spotlight.",
      finance: "Generous spending on loved ones brings joy but watch the budget.",
      rating: 5
    },
    virgo: {
      overall: "Attention to detail pays off. Your methodical approach succeeds.",
      love: "Small gestures of care mean more than grand romantic displays.",
      career: "Your analytical skills solve complex problems efficiently.",
      finance: "Careful budgeting and planning lead to financial stability.",
      rating: 4
    },
    libra: {
      overall: "Balance and harmony are achievable today. Seek win-win solutions.",
      love: "Compromise and understanding strengthen your relationships.",
      career: "Diplomatic skills help navigate office politics successfully.",
      finance: "Partnership in financial matters proves beneficial.",
      rating: 4
    },
    scorpio: {
      overall: "Deep transformation is possible. Embrace change with courage.",
      love: "Intense emotional connections deepen existing bonds.",
      career: "Research and investigation lead to important discoveries.",
      finance: "Hidden financial opportunities may surface. Stay alert.",
      rating: 3
    },
    sagittarius: {
      overall: "Adventure calls! Expand your horizons through new experiences.",
      love: "Long-distance relationships or foreign connections are favored.",
      career: "Teaching, publishing, or travel-related work brings success.",
      finance: "International investments or foreign currency may be profitable.",
      rating: 5
    },
    capricorn: {
      overall: "Hard work and discipline lead to recognition and rewards.",
      love: "Traditional approaches to romance work best today.",
      career: "Authority figures notice your dedication and reliability.",
      finance: "Long-term investments and retirement planning are favored.",
      rating: 4
    },
    aquarius: {
      overall: "Innovation and originality set you apart from the crowd.",
      love: "Unconventional approaches to relationships bring fresh energy.",
      career: "Technology and group projects lead to breakthrough moments.",
      finance: "Cryptocurrency or tech investments may show promise.",
      rating: 4
    },
    pisces: {
      overall: "Creativity and spirituality guide your path today.",
      love: "Emotional depth and empathy strengthen romantic connections.",
      career: "Artistic or healing professions bring special satisfaction.",
      finance: "Trust your intuition about financial decisions.",
      rating: 3
    }
  };

  const currentHoroscope = horoscopes[selectedSign as keyof typeof horoscopes];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Daily Horoscope
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what the stars have in store for you today
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Updated daily by our expert astrologers
          </p>
        </div>

        {/* Zodiac Sign Selector */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-12">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.id}
              onClick={() => setSelectedSign(sign.id)}
              className={`p-3 rounded-lg text-center transition-all duration-300 ${
                selectedSign === sign.id
                  ? 'bg-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              <div className="text-2xl mb-1">{sign.symbol}</div>
              <div className="text-xs font-medium">{sign.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Sign Horoscope */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-orange-100">
            <CardHeader className="text-center bg-gradient-to-r from-orange-50 to-amber-50">
              <div className="text-6xl mb-4">
                {zodiacSigns.find(sign => sign.id === selectedSign)?.symbol}
              </div>
              <CardTitle className="text-3xl text-gray-900">
                {zodiacSigns.find(sign => sign.id === selectedSign)?.name}
              </CardTitle>
              <p className="text-gray-600">
                {zodiacSigns.find(sign => sign.id === selectedSign)?.dates}
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-sm text-gray-600">Today's Rating:</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < currentHoroscope.rating ? 'fill-current' : ''}`} 
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    Overall
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {currentHoroscope.overall}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    Love & Relationships
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentHoroscope.love}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Career
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {currentHoroscope.career}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Coins className="w-5 h-5 text-green-600" />
                    Finance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentHoroscope.finance}
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  Want a personalized reading for deeper insights?
                </p>
                <Button 
                  asChild 
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Link href="/contact">Get Personal Reading</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}