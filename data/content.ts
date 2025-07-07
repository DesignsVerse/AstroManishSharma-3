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
      title: "Shri Baglamukhi Siddhapeeth, Nalkheda",
      subtitle: "Experience the Divine Power of Maa Baglamukhi",
      description: "Seek blessings at one of only three sacred Baglamukhi Siddhapeeths in the world. Discover spiritual peace and overcome obstacles through the divine grace of the Goddess who controls all negative energies.",
      cta: "Book Puja Now",
      secondary: "View Temple Timings",
      features: [
        "One of three sacred Baglamukhi Siddhapeeths",
        "Ancient temple with powerful spiritual energy",
        "Special rituals for victory over enemies",
        "Navratri celebrations with unique traditions"
      ]
    },
    services: services.en,
    blog: blog.en,
    about: {
      title: "About Maa Baglamukhi Temple, Nalkheda",
      subtitle: "A Sacred Siddhapeeth",
      description: "The Bagalamukhi Temple in Nalkheda is a revered shrine located on the banks of the Lakhundar River in Madhya Pradesh, dedicated to Goddess Bagalamukhi, one of the ten Mahavidyas in Hinduism.",
      stats: [
        { number: "3", label: "Major Temples in India" },
        { number: "200+", label: "Years of History" },
        { number: "Siddhapeeth", label: "Divine Status" },
        { number: "Year-Round", label: "Devotees Visit" }
      ],
      story: "The Bagalamukhi Temple, Nalkheda is located on the banks of the Lakhundar River, a tributary of the Narmada River. It is one of only three important ancient Bagalamukhi temples in the world considered as Siddhapeeth.\n\nMaa Bagalamukhi holds the eighth place among the ten Mahavidyas and is associated with the color yellow. The temple was restored in 1815 and becomes particularly popular during Navaratri.\n\nThe temple complex features Bilvapatra, Champa, White Ankara, Amla, Neem and Peepal trees growing together, surrounded by lush green gardens. Despite being located in a cremation area, it attracts devotees throughout the year.\n\nNotable visitors have included Prime Minister Narendra Modi's brother, BJP MP Jagdambika Pal, MP Digvijaya Singh, and P. C. Sharma. The other two major Bagalamukhi temples are in Datia (Madhya Pradesh) and Kangra (Himachal Pradesh)."
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
      description: "If you have any problem regarding any Pooja or Product then you can contact us by filling this form or you can directly call us from button given below.",
      form: {
        name: "Full Name",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Select Service",
        message: "Your Message",
        submit: "Send",
        birthDate: "Date of Birth",
        birthTime: "Time of Birth",
        birthPlace: "Place of Birth"
      },
      info: {
        title: "Maa Baglamukhi Mataji, Nalkheda, MadhyaPradesh",
        phone: "+91 77339 94827",
        email: "panditmanishs935@gmail.com",
        address: "Maa Baglamukhi Mataji, Nalkheda, MadhyaPradesh",
        hours: "Working Hours",
        hoursValue: "Mon - Sat: 9:00 AM - 8:00 PM",
        callNow: "Call Now!!"
      }
    },
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
      title: "श्री बगलामुखी सिद्धपीठ, नलखेड़ा",
      subtitle: "माँ बगलामुखी की दिव्य शक्ति का अनुभव करें",
      description: "दुनिया के केवल तीन पवित्र बगलामुखी सिद्धपीठों में से एक में आशीर्वाद प्राप्त करें। नकारात्मक ऊर्जाओं को नियंत्रित करने वाली देवी की दिव्य कृपा से आध्यात्मिक शांति प्राप्त करें और बाधाओं को दूर करें।",
      cta: "पूजा बुक करें",
      secondary: "मंदिर समय देखें",
      features: [
        "तीन पवित्र बगलामुखी सिद्धपीठों में से एक",
        "शक्तिशाली आध्यात्मिक ऊर्जा वाला प्राचीन मंदिर",
        "शत्रुओं पर विजय के लिए विशेष अनुष्ठान",
        "अनोखी परंपराओं के साथ नवरात्रि उत्सव"
      ]
    },
    services: services.hi,
    blog: blog.hi,
    about: {
      title: "माँ बगलामुखी मंदिर, नलखेड़ा के बारे में",
      subtitle: "एक पवित्र सिद्धपीठ",
      description: "नलखेड़ा स्थित बगलामुखी मंदिर मध्य प्रदेश में लाखुंदर नदी के तट पर स्थित एक पूजनीय स्थल है, जो हिंदू धर्म की दस महाविद्याओं में से एक देवी बगलामुखी को समर्पित है।",
      stats: [
        { number: "3", label: "भारत में प्रमुख मंदिर" },
        { number: "200+", label: "वर्षों का इतिहास" },
        { number: "सिद्धपीठ", label: "दिव्य स्थिति" },
        { number: "साल भर", label: "भक्तों का आगमन" }
      ],
      story: "माँ बगलामुखी मंदिर, नलखेड़ा नर्मदा नदी की सहायक लाखुंदर नदी के तट पर स्थित है। यह दुनिया में केवल तीन प्राचीन बगलामुखी मंदिरों में से एक है जिसे सिद्धपीठ माना जाता है।\n\nमाँ बगलामुखी दस महाविद्याओं में आठवें स्थान पर हैं और पीले रंग से जुड़ी हुई हैं। इस मंदिर का 1815 में जीर्णोद्धार किया गया था और नवरात्रि के समय यह विशेष रूप से लोकप्रिय होता है।\n\nमंदिर परिसर में बिल्वपत्र, चंपा, सफेद अंकोला, आंवला, नीम और पीपल के पेड़ एक साथ स्थित हैं, जो हरे-भरे बगीचों से घिरे हुए हैं। श्मशान क्षेत्र में स्थित होने के बावजूद यह साल भर भक्तों को आकर्षित करता है।\n\nप्रमुख आगंतुकों में प्रधानमंत्री नरेंद्र मोदी के भाई, भाजपा सांसद जगदंबिका पाल, सांसद दिग्विजय सिंह और पी.सी. शर्मा शामिल हैं। अन्य दो प्रमुख बगलामुखी मंदिर दतिया (मध्य प्रदेश) और कांगड़ा (हिमाचल प्रदेश) में स्थित हैं।"
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
      subtitle: "पूजा या उत्पाद के लिए संपर्क करें",
      description: "यदि आपको किसी पूजा या उत्पाद के संबंध में कोई समस्या है तो आप इस फॉर्म को भरकर हमसे संपर्क कर सकते हैं या नीचे दिए गए बटन से सीधे कॉल कर सकते हैं।",
      form: {
        name: "पूरा नाम",
        firstName: "पहला नाम",
        lastName: "अंतिम नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        service: "सेवा चुनें",
        message: "आपका संदेश",
        submit: "भेजें",
        birthDate: "जन्म तिथि",
        birthTime: "जन्म समय",
        birthPlace: "जन्म स्थान"
      },
      info: {
        title: "माँ बगलामुखी माताजी, नलखेड़ा, मध्य प्रदेश",
        phone: "+91 77339 94827",
        email: "panditmanishs935@gmail.com",
        address: "माँ बगलामुखी माताजी, नलखेड़ा, मध्य प्रदेश",
        hours: "कार्य समय",
        hoursValue: "सोम - शनि: सुबह 9:00 - शाम 8:00",
        callNow: "अभी कॉल करें!!"
      }
    }
  }
};