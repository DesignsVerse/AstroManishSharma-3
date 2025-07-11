import {servicesEn} from './services/services-en';
import { servicesHi } from './services/services-hi';
import blogEn from './blog/blog-en';
import blogHi from './blog/blog-hi';
import { testimonials as testimonialsEn } from './testimonials/en';
import { testimonials as testimonialsHi } from './testimonials/hi';

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
      secondary: "Call Now: +917733994827",
      features: [
        "One of three sacred Baglamukhi Siddhapeeths",
        "Ancient temple with powerful spiritual energy",
        "Special rituals for victory over enemies",
        "Navratri celebrations with unique traditions"
      ]
    },
    services: servicesEn,
    blog: blogEn,
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
    testimonials: testimonialsEn,
    footer: {
      description: "AstroMystic is your trusted partner for authentic astrological guidance, spiritual growth, and personalized consultations. Join thousands who have found clarity and peace.",
      quickLinks: {
        title: "Quick Links",
        links: ["Home", "Services", "Blog", "About", "Contact"]
      },
      services: {
        title: "Our Services",
        links: [
          "Lakshmi Prapti Pooja",
          "Court Case Vijay Prapti Pooja",
          "Navgrah Shanti Pooja",
          "Aakarshan Shakti Vriddhi Pooja",
          "Shatru Vinash Pooja",
          "Rajniti Vijay Pooja",
          "Griha Kalesh Nivaran Pooja",
          "Vaicharik Badha Nivaran Pooja",
          "Santan Prapti Pooja",
          "Videsh Yatra Safalta Pooja"
        ]
      },
      contact: {
        title: "Contact Info",
        phone: "+91 77339 94827",
        email: "panditmanishs935@gmail.com",
        address: "Maa Baglamukhi Mataji, Nalkheda, MadhyaPradesh"
      },
      social: {
        title: "Follow Us",
        facebook: "https://facebook.com/astromystic",
        instagram: "https://instagram.com/astromystic",
        twitter: "https://twitter.com/astromystic",
        youtube: "https://youtube.com/@astromystic"
      },
      copyright: `© ${new Date().getFullYear()} AstroMystic. All rights reserved.`
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in Touch for Consultation",
      description: "If you have any problem regarding any Pooja or Product then you can contact us by filling this form or you can directly call us from button given below.",
      formTitle: "Send Us a Message",
      infoTitle: "Contact Information",
      hoursTitle: "Consultation Hours",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      closed: "Closed",
      submitButton: "Send Message",
      successMessage: "Your message has been sent successfully! We'll contact you soon.",
      formLabels: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Service Required",
        message: "Your Message",
        birthDate: "Date of Birth",
        birthTime: "Time of Birth",
        birthPlace: "Place of Birth"
      },
      formPlaceholders: {
        name: "Enter your full name",
        email: "Enter your email",
        phone: "Enter your phone number",
        service: "Select a service",
        message: "Write your message here...",
        birthDate: "DD/MM/YYYY",
        birthTime: "HH:MM",
        birthPlace: "City, Country"
      },
      formErrors: {
        name: "Name must be at least 2 characters",
        email: "Please enter a valid email",
        phone: "Phone number must be at least 10 digits",
        service: "Please select a service",
        message: "Message must be at least 10 characters"
      },
      info: {
        title: "Maa Baglamukhi Mataji, Nalkheda, MadhyaPradesh",
        phone: "+91 77339 94827",
        email: "panditmanishs935@gmail.com",
        address: "Maa Baglamukhi Mataji, Nalkheda, MadhyaPradesh",
        hours: "Working Hours",
        hoursValue: "9:00 AM - 8:00 PM",
        callNow: "Call Now!! +917733994827"
      }
    },
    days: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday"
    },
    whyChooseUs: {
      title: "Why Choose AstroMystic?",
      subtitle: "Discover what makes us the most trusted name in astrology consultation",
      reasons: [
        {
          icon: "Award",
          title: "15+ Years Experience",
          description: "Trusted expertise in Vedic and Western astrology with thousands of successful consultations."
        },
        {
          icon: "Shield",
          title: "98% Accuracy Rate",
          description: "Our predictions are backed by authentic astrological methods and proven track record."
        },
        {
          icon: "Users",
          title: "5000+ Happy Clients",
          description: "Join our community of satisfied clients who have transformed their lives through astrology."
        },
        {
          icon: "Clock",
          title: "24/7 Support",
          description: "Get guidance whenever you need it with our round-the-clock consultation services."
        },
        {
          icon: "Star",
          title: "Personalized Approach",
          description: "Every reading is tailored specifically to your unique birth chart and life circumstances."
        },
        {
          icon: "Heart",
          title: "Compassionate Guidance",
          description: "We provide caring, empathetic support to help you navigate life's challenges with confidence."
        }
      ]
    },
    aboutAstrologer: {
      title: "About Our Astrologer",
      subtitle: "Meet Manish Sharma Astrologer",
      description: `I am Pandit Manish Sharma. I have learned Vedic Havan and Tantra-Mantra Puja from Sarva Siddha Peeth Maa Bagalamukhi Mandir Nalkheda since childhood from the ashram located in the courtyard of Mata Rani and studied them deeply and from the very beginning had faith and unwavering faith in Mata Rani. Along with being born in the court of Mata Rani, I have started my work rituals and havan worship rituals with her blessings. Being born in a Brahmin clan, I have also inherited this work. I am doing havan puja and rituals to fulfill the wishes of all the guests. With the blessings of Mata Rani, the wishes of all the guests are also being fulfilled. There is a famous saying that *Whoever comes to Bagla Dwara, no one goes empty handed*. We are blessed by Mata Rani Maa Baglamukhi. May Jai Maa Bagalamukhi be always on everyone!`,
      image: "/images/astrologer.jpg"
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
      title: "श्री बगलामुखी सिद्धपीठ, नलखेड़ा",
      subtitle: "माँ बगलामुखी की दिव्य शक्ति का अनुभव करें",
      description: "दुनिया के केवल तीन पवित्र बगलामुखी सिद्धपीठों में से एक में आशीर्वाद प्राप्त करें। नकारात्मक ऊर्जाओं को नियंत्रित करने वाली देवी की दिव्य कृपा से आध्यात्मिक शांति प्राप्त करें और बाधाओं को दूर करें।",
      cta: "पूजा बुक करें",
      secondary: "अभी कॉल करें",
      features: [
        "तीन पवित्र बगलामुखी सिद्धपीठों में से एक",
        "शक्तिशाली आध्यात्मिक ऊर्जा वाला प्राचीन मंदिर",
        "शत्रुओं पर विजय के लिए विशेष अनुष्ठान",
        "अनोखी परंपराओं के साथ नवरात्रि उत्सव"
      ]
    },
    services: servicesHi,
    blog: blogHi,
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
    testimonials: testimonialsHi,
    footer: {
      description: "एस्ट्रोमिस्टिक आपके लिए प्रामाणिक ज्योतिषीय मार्गदर्शन, आध्यात्मिक विकास और व्यक्तिगत परामर्श का भरोसेमंद साथी है। हजारों लोगों ने यहाँ से स्पष्टता और शांति पाई है।",
      quickLinks: {
        title: "त्वरित लिंक",
        links: ["मुख्य पृष्ठ", "सेवाएं", "ब्लॉग", "हमारे बारे में", "संपर्क"]
      },
      services: {
        title: "हमारी सेवाएं",
        links: [
          "लक्ष्मी प्राप्ति पूजा",
          "कोर्ट केस विजय प्राप्ति पूजा",
          "नवग्रह शांति पूजा",
          "आकर्षण शक्ति वृद्धि पूजा",
          "शत्रु विनाश पूजा",
          "राजनीति विजय पूजा",
          "गृह क्लेश निवारण पूजा",
          "वैचारिक बाधा निवारण पूजा",
          "संतान प्राप्ति पूजा",
          "विदेश यात्रा सफलता पूजा"
        ]
      },
      contact: {
        title: "संपर्क जानकारी",
        phone: "+91 77339 94827",
        email: "panditmanishs935@gmail.com",
        address: "माँ बगलामुखी माताजी, नलखेड़ा, मध्य प्रदेश"
      },
      social: {
        title: "हमें फॉलो करें",
        facebook: "https://facebook.com/astromystic",
        instagram: "https://instagram.com/astromystic",
        twitter: "https://twitter.com/astromystic",
        youtube: "https://youtube.com/@astromystic"
      },
      copyright: `© ${new Date().getFullYear()} एस्ट्रोमिस्टिक। सभी अधिकार सुरक्षित।`
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "पूजा या उत्पाद के लिए संपर्क करें",
      description: "यदि आपको किसी पूजा या उत्पाद के संबंध में कोई समस्या है तो आप इस फॉर्म को भरकर हमसे संपर्क कर सकते हैं या नीचे दिए गए बटन से सीधे कॉल कर सकते हैं।",
      formTitle: "हमें संदेश भेजें",
      infoTitle: "संपर्क जानकारी",
      hoursTitle: "परामर्श समय",
      phoneLabel: "फोन",
      emailLabel: "ईमेल",
      addressLabel: "पता",
      closed: "बंद",
      submitButton: "संदेश भेजें",
      successMessage: "आपका संदेश सफलतापूर्वक भेजा गया है! हम जल्द ही आपसे संपर्क करेंगे।",
      formLabels: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        service: "आवश्यक सेवा",
        message: "आपका संदेश",
        birthDate: "जन्म तिथि",
        birthTime: "जन्म समय",
        birthPlace: "जन्म स्थान"
      },
      formPlaceholders: {
        name: "अपना पूरा नाम दर्ज करें",
        email: "अपना ईमेल दर्ज करें",
        phone: "अपना फोन नंबर दर्ज करें",
        service: "एक सेवा चुनें",
        message: "अपना संदेश यहाँ लिखें...",
        birthDate: "दिन/महीना/साल",
        birthTime: "घंटा:मिनट",
        birthPlace: "शहर, देश"
      },
      formErrors: {
        name: "नाम कम से कम 2 अक्षरों का होना चाहिए",
        email: "कृपया एक वैध ईमेल दर्ज करें",
        phone: "फोन नंबर कम से कम 10 अंकों का होना चाहिए",
        service: "कृपया एक सेवा चुनें",
        message: "संदेश कम से कम 10 अक्षरों का होना चाहिए"
      },
      info: {
        title: "माँ बगलामुखी माताजी, नलखेड़ा, मध्य प्रदेश",
        phone: "+91 77339 94827",
        email: "panditmanishs935@gmail.com",
        address: "माँ बगलामुखी माताजी, नलखेड़ा, मध्य प्रदेश",
        hours: "कार्य समय",
        hoursValue: "सुबह 9:00 - शाम 8:00",
        callNow: "अभी कॉल करें!!"
      }
    },
    days: {
      monday: "सोमवार",
      tuesday: "मंगलवार",
      wednesday: "बुधवार",
      thursday: "गुरुवार",
      friday: "शुक्रवार",
      saturday: "शनिवार",
      sunday: "रविवार"
    },
    whyChooseUs: {
      title: "एस्ट्रोमिस्टिक क्यों चुनें?",
      subtitle: "जानें कि ज्योतिष परामर्श में हम सबसे विश्वसनीय नाम क्यों हैं",
      reasons: [
        {
          icon: "Award",
          title: "15+ वर्षों का अनुभव",
          description: "वैदिक और पश्चिमी ज्योतिष में विश्वसनीय विशेषज्ञता, हजारों सफल परामर्शों के साथ।"
        },
        {
          icon: "Shield",
          title: "98% सटीकता दर",
          description: "हमारी भविष्यवाणियाँ प्रामाणिक ज्योतिषीय विधियों और सिद्ध ट्रैक रिकॉर्ड पर आधारित हैं।"
        },
        {
          icon: "Users",
          title: "5000+ खुश ग्राहक",
          description: "हमारे संतुष्ट ग्राहकों के समुदाय में शामिल हों, जिन्होंने ज्योतिष के माध्यम से अपना जीवन बदला है।"
        },
        {
          icon: "Clock",
          title: "24/7 सहायता",
          description: "हमारी चौबीसों घंटे परामर्श सेवाओं के साथ जब भी आपको मार्गदर्शन चाहिए, तुरंत पाएं।"
        },
        {
          icon: "Star",
          title: "व्यक्तिगत दृष्टिकोण",
          description: "हर रीडिंग विशेष रूप से आपकी अनूठी जन्म कुंडली और जीवन परिस्थितियों के अनुसार तैयार की जाती है।"
        },
        {
          icon: "Heart",
          title: "सहानुभूतिपूर्ण मार्गदर्शन",
          description: "हम सहानुभूति और देखभाल के साथ आपकी जीवन चुनौतियों को आत्मविश्वास से पार करने में मदद करते हैं।"
        }
      ]
    },
    aboutAstrologer: {
      title: "हमारे ज्योतिषाचार्य के बारे में",
      subtitle: "मनीष शर्मा ज्योतिषाचार्य से मिलें",
      description: `मैं पंडित मनीष शर्मा सर्व सिद्ध पीठ मां बगलामुखी मंदिर नलखेड़ा से मैं बचपन से ही माता रानी के प्रांगण में स्थित आश्रम से वैदिक हवन एवं तंत्र-मंत्र पूजा सीखी है एवं उनका गहन अध्ययन किया और शुरुआत से ही माता रानी के प्रति आस्था एवं अटूट विश्वास होने के साथ ही मैंने अपने कार्य कर्मकांड एवं हवन पूजन अनुष्ठान को माता रानी के दरबार में उन्हीं के आशीर्वाद से प्रारंभ किया है ब्राह्मण कुल में जन्म लेने के नाते यह कार्य मुझे विरासत में भी मिला है मैं पिछले 10 वर्षों से यजमान की मनोकामना को पूर्ण करने हेतु हवन पूजन एवं अनुष्ठान का कार्य कर रहा हूं माता रानी के आशीर्वाद से सभी यजमानो की मनोकामना भी पूर्ण हो रही है  एक कहावत प्रसिद्ध है की *बगला द्वारे जो भी आता खाली हाथ कोई नहीं जाता माता रानी मां बगलामुखी का आशीर्वाद हम सब पर हमेशा बना रहे जय मां बगलामुखी`,
      image: "/images/astrologer.jpg"
    }
    
  }
};