import { services } from './services/services';
import { blog } from './blog/blog';

export const content = {
  en: {
    header: {
      logo: "AstroMystic",
      nav: {
        home: "Home",
        services: "Services",
        blog: "Blog",
        about: "About",
        contact: "Contact"
      },
      cta: "Get Reading"
    },
    hero: {
      title: "Unlock Your Destiny",
      subtitle: "Professional Astrology Guidance",
      description: "Discover your path through ancient wisdom and modern insights. Get personalized readings from experienced astrologers who understand your journey.",
      cta: "Book Consultation",
      secondary: "Learn More"
    },
    services: services.en,
    blog: blog.en,
    about: {
      title: "About AstroMystic",
      subtitle: "Your Trusted Astrology Partner",
      description: "With over 15 years of experience in Vedic and Western astrology, we provide authentic guidance to help you navigate life's challenges and opportunities.",
      stats: [
        { number: "15+", label: "Years Experience" },
        { number: "5000+", label: "Happy Clients" },
        { number: "10000+", label: "Readings Done" },
        { number: "98%", label: "Accuracy Rate" }
      ],
      story: "Founded by Master Astrologer Rajesh Sharma, AstroMystic has been guiding individuals and families through life's complexities using ancient wisdom and modern techniques. Our mission is to provide accurate, compassionate, and practical astrological guidance that empowers you to make informed decisions and live your best life."
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real Stories, Real Results",
      items: [
        {
          name: "Priya Sharma",
          location: "Mumbai, India",
          rating: 5,
          text: "The birth chart analysis was incredibly accurate! It helped me understand my career path and make better decisions.",
          service: "Birth Chart Analysis"
        },
        {
          name: "Rahul Kumar",
          location: "Delhi, India",
          rating: 5,
          text: "Amazing relationship compatibility reading. It saved my marriage and brought us closer together.",
          service: "Relationship Compatibility"
        },
        {
          name: "Anjali Patel",
          location: "Bangalore, India",
          rating: 5,
          text: "The career guidance was spot-on. I got promoted within 3 months of following the advice!",
          service: "Career Guidance"
        }
      ]
    },
    footer: {
      description: "Your trusted partner in astrological guidance and spiritual growth.",
      quickLinks: {
        title: "Quick Links",
        links: ["Home", "Services", "Blog", "About", "Contact"]
      },
      services: {
        title: "Services",
        links: ["Birth Chart", "Compatibility", "Career Guidance", "Health Astrology", "Gemstone Consultation"]
      },
      contact: {
        title: "Contact Info",
        phone: "+91 98765 43210",
        email: "info@astromystic.com",
        address: "123 Astro Street, Mumbai, India"
      },
      social: {
        title: "Follow Us"
      },
      copyright: "© 2024 AstroMystic. All rights reserved."
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in Touch for Consultation",
      description: "Ready to discover your destiny? Reach out to us for professional astrology consultation.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Select Service",
        message: "Your Message",
        submit: "Send Message",
        birthDate: "Date of Birth",
        birthTime: "Time of Birth",
        birthPlace: "Place of Birth"
      },
      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        address: "Address",
        hours: "Working Hours",
        hoursValue: "Mon - Sat: 9:00 AM - 8:00 PM"
      }
    }
  },
  hi: {
    header: {
      logo: "एस्ट्रोमिस्टिक",
      nav: {
        home: "मुख्य पृष्ठ",
        services: "सेवाएं",
        blog: "ब्लॉग",
        about: "हमारे बारे में",
        contact: "संपर्क"
      },
      cta: "रीडिंग लें"
    },
    hero: {
      title: "अपना भाग्य जानें",
      subtitle: "पेशेवर ज्योतिष मार्गदर्शन",
      description: "प्राचीन ज्ञान और आधुनिक अंतर्दृष्टि के माध्यम से अपना रास्ता खोजें। अनुभवी ज्योतिषियों से व्यक्तिगत रीडिंग प्राप्त करें।",
      cta: "परामर्श बुक करें",
      secondary: "और जानें"
    },
    services: services.hi,
    blog: blog.hi,
    about: {
      title: "एस्ट्रोमिस्टिक के बारे में",
      subtitle: "आपका भरोसेमंद ज्योतिष साथी",
      description: "वैदिक और पश्चिमी ज्योतिष में 15 से अधिक वर्षों के अनुभव के साथ, हम आपको जीवन की चुनौतियों और अवसरों से निपटने में मदद करने के लिए प्रामाणिक मार्गदर्शन प्रदान करते हैं।",
      stats: [
        { number: "15+", label: "वर्षों का अनुभव" },
        { number: "5000+", label: "खुश ग्राहक" },
        { number: "10000+", label: "रीडिंग्स की गई" },
        { number: "98%", label: "सटीकता दर" }
      ],
      story: "मास्टर ज्योतिषी राजेश शर्मा द्वारा स्थापित, एस्ट्रोमिस्टिक प्राचीन ज्ञान और आधुनिक तकनीकों का उपयोग करके व्यक्तियों और परिवारों को जीवन की जटिलताओं के माध्यम से मार्गदर्शन कर रहा है। हमारा मिशन सटीक, करुणामय और व्यावहारिक ज्योतिषीय मार्गदर्शन प्रदान करना है जो आपको सूचित निर्णय लेने और अपना सर्वोत्तम जीवन जीने के लिए सशक्त बनाता है।"
    },
    testimonials: {
      title: "हमारे ग्राहक क्या कहते हैं",
      subtitle: "सच्ची कहानियां, सच्चे परिणाम",
      items: [
        {
          name: "प्रिया शर्मा",
          location: "मुंबई, भारत",
          rating: 5,
          text: "जन्म कुंडली विश्लेषण अविश्वसनीय रूप से सटीक था! इसने मुझे अपने करियर पथ को समझने और बेहतर निर्णय लेने में मदद की।",
          service: "जन्म कुंडली विश्लेषण"
        },
        {
          name: "राहुल कुमार",
          location: "दिल्ली, भारत",
          rating: 5,
          text: "अद्भुत रिश्ते की अनुकूलता रीडिंग। इसने मेरी शादी को बचाया और हमें एक-दूसरे के करीब लाया।",
          service: "रिश्ते की अनुकूलता"
        },
        {
          name: "अंजली पटेल",
          location: "बैंगलोर, भारत",
          rating: 5,
          text: "करियर मार्गदर्शन बिल्कुल सही था। सलाह का पालन करने के 3 महीने के भीतर मुझे प्रमोशन मिल गया!",
          service: "करियर मार्गदर्शन"
        }
      ]
    },
    footer: {
      description: "ज्योतिषीय मार्गदर्शन और आध्यात्मिक विकास में आपका भरोसेमंद साथी।",
      quickLinks: {
        title: "त्वरित लिंक",
        links: ["मुख्य पृष्ठ", "सेवाएं", "ब्लॉग", "हमारे बारे में", "संपर्क"]
      },
      services: {
        title: "सेवाएं",
        links: ["जन्म कुंडली", "अनुकूलता", "करियर मार्गदर्शन", "स्वास्थ्य ज्योतिष", "रत्न परामर्श"]
      },
      contact: {
        title: "संपर्क जानकारी",
        phone: "+91 98765 43210",
        email: "info@astromystic.com",
        address: "123 एस्ट्रो स्ट्रीट, मुंबई, भारत"
      },
      social: {
        title: "हमें फॉलो करें"
      },
      copyright: "© 2024 एस्ट्रोमिस्टिक। सभी अधिकार सुरक्षित।"
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "परामर्श के लिए संपर्क करें",
      description: "अपना भाग्य जानने के लिए तैयार हैं? पेशेवर ज्योतिष परामर्श के लिए हमसे संपर्क करें।",
      form: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        service: "सेवा चुनें",
        message: "आपका संदेश",
        submit: "संदेश भेजें",
        birthDate: "जन्म तिथि",
        birthTime: "जन्म समय",
        birthPlace: "जन्म स्थान"
      },
      info: {
        title: "संपर्क जानकारी",
        phone: "फोन",
        email: "ईमेल",
        address: "पता",
        hours: "कार्य समय",
        hoursValue: "सोम - शनि: सुबह 9:00 - शाम 8:00"
      }
    }
  }
};