'use client';

import { useState, useEffect } from 'react';
import {
  Globe,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
  Send,
  FileText,
  CreditCard,
  MapPin,
  Mail,
  Star,
  Navigation,
  Briefcase,
  User,
  Clock,
  HeadphonesIcon as Headphones,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  X,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const SmartIDCard = dynamic(() => import('@/components/SmartIDCard'), {
  ssr: false,
  loading: () => <div className="aspect-[1.58/1] w-full bg-slate-100 animate-pulse rounded-3xl" />
});

const countries = [
  { name: "South Africa", code: "ZA", flag: "🇿🇦" },
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "France", code: "FR", flag: "🇫🇷" },
  { name: "Japan", code: "JP", flag: "🇯🇵" },
  { name: "South Korea", code: "KR", flag: "🇰🇷" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "China", code: "CN", flag: "🇨🇳" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Brazil", code: "BR", flag: "🇧🇷" },
  { name: "Netherlands", code: "NL", flag: "🇳🇱" },
  { name: "Italy", code: "IT", flag: "🇮🇹" },
  { name: "Spain", code: "ES", flag: "🇪🇸" },
  { name: "Sweden", code: "SE", flag: "🇸🇪" },
  { name: "Norway", code: "NO", flag: "🇳🇴" },
  { name: "Denmark", code: "DK", flag: "🇩🇰" },
  { name: "Finland", code: "FI", flag: "🇫🇮" },
  { name: "Switzerland", code: "CH", flag: "🇨🇭" },
  { name: "Belgium", code: "BE", flag: "🇧🇪" },
  { name: "Austria", code: "AT", flag: "🇦🇹" },
  { name: "Portugal", code: "PT", flag: "🇵🇹" },
  { name: "Greece", code: "GR", flag: "🇬🇷" },
  { name: "Poland", code: "PL", flag: "🇵🇱" },
  { name: "Czech Republic", code: "CZ", flag: "🇨🇿" },
  { name: "Hungary", code: "HU", flag: "🇭🇺" },
  { name: "Romania", code: "RO", flag: "🇷🇴" },
  { name: "Russia", code: "RU", flag: "🇷🇺" },
  { name: "Ukraine", code: "UA", flag: "🇺🇦" },
  { name: "Turkey", code: "TR", flag: "🇹🇷" },
  { name: "Israel", code: "IL", flag: "🇮🇱" },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦" },
  { name: "UAE", code: "AE", flag: "🇦🇪" },
  { name: "Qatar", code: "QA", flag: "🇶🇦" },
  { name: "Kuwait", code: "KW", flag: "🇰🇼" },
  { name: "Bahrain", code: "BH", flag: "🇧🇭" },
  { name: "Oman", code: "OM", flag: "🇴🇲" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿" },
  { name: "Philippines", code: "PH", flag: "🇵🇭" },
  { name: "Thailand", code: "TH", flag: "🇹🇭" },
  { name: "Vietnam", code: "VN", flag: "🇻🇳" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾" },
  { name: "Indonesia", code: "ID", flag: "🇮🇩" },
  { name: "Hong Kong", code: "HK", flag: "🇭🇰" },
  { name: "Taiwan", code: "TW", flag: "🇹🇼" },
  { name: "Mexico", code: "MX", flag: "🇲🇽" },
  { name: "Argentina", code: "AR", flag: "🇦🇷" },
  { name: "Chile", code: "CL", flag: "🇨🇱" },
  { name: "Colombia", code: "CO", flag: "🇨🇴" },
  { name: "Peru", code: "PE", flag: "🇵🇪" },
  { name: "Egypt", code: "EG", flag: "🇪🇬" },
  { name: "Morocco", code: "MA", flag: "🇲🇦" },
  { name: "Kenya", code: "KE", flag: "🇰🇪" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬" },
];

const visaServices = [
  {
    title: "B1 VOA / Extension",
    description: "30-day visa on arrival with extension options. Perfect for short visits and tourism.",
    link: "https://indonesianvisas.com/services/B1",
    icon: <Navigation className="w-16 h-16" />,
  },
  {
    title: "C1 Visit Visa",
    description: "Single entry visit visa for tourism purposes. Valid for 60 days with flexible dates.",
    link: "https://indonesianvisas.com/services/C1",
    icon: <Globe className="w-16 h-16" />,
  },
  {
    title: "C2 Business Visa",
    description: "Business visa for meetings and conferences. Includes multiple entry options.",
    link: "https://indonesianvisas.com/services/C2",
    icon: <Briefcase className="w-16 h-16" />,
  },
  {
    title: "D1 Tourist Visa",
    description: "60-day tourist visa (B211A) with extensions up to 180 days total stay.",
    link: "https://indonesianvisas.com/services/D1",
    icon: <User className="w-16 h-16" />,
  },
  {
    title: "D2 Business Visa",
    description: "Multiple entry business visa for professionals. Valid up to 12 months.",
    link: "https://indonesianvisas.com/services/D2",
    icon: <FileText className="w-16 h-16" />,
  },
  {
    title: "D12 Pre Investment",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/D12",
    icon: <Star className="w-16 h-16" />,
  },
  {
    title: "E33G Remote Worker KITAS",
    description: "1-year digital nomad visa for remote workers. Live and work in Bali long-term.",
    link: "https://indonesianvisas.com/services/E33G",
    icon: <Globe className="w-16 h-16" />,
  },
  {
    title: "E28A Investment KITAS",
    description: "Investment-based 2-years residence permit. Long-term stay for investors.",
    link: "https://indonesianvisas.com/services/E28A",
    icon: <CreditCard className="w-16 h-16" />,
  },
  {
    title: "Custom Visa Solution",
    description: "Tailored visa solutions for unique cases. We handle special requirements.",
    link: "/bali-visa-2026-2027-guide",
    icon: <FileText className="w-16 h-16" />,
  },
];

const benefits = [
  {
    title: "Fast Processing",
    description: "Express service available with same-day processing options for urgent applications",
    icon: <Clock className="w-20 h-20" />,
  },
  {
    title: "99% Success Rate",
    description: "Proven track record with 15,000+ visas processed successfully worldwide",
    icon: <CheckCircle2 className="w-20 h-20" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock WhatsApp support for your peace of mind anytime, anywhere",
    icon: <Headphones className="w-20 h-20" />,
  },
  {
    title: "97 Countries",
    description: "We serve applicants from 97 countries worldwide with local expertise",
    icon: <Globe className="w-20 h-20" />,
  },
];

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/balihelp.id", icon: <Instagram className="w-6 h-6" />, gradient: "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" },
  { name: "Facebook", url: "https://facebook.com/BaliHelp", icon: <Facebook className="w-6 h-6" />, color: "bg-blue-600" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bayu-damopolii-887ab883/", icon: <Linkedin className="w-6 h-6" />, color: "bg-blue-700" },
  { name: "YouTube", url: "https://youtube.com/@balihelp", icon: <Youtube className="w-6 h-6" />, color: "bg-red-600" },
  { name: "WhatsApp", url: "https://wa.me/6285727041992", icon: <MessageCircle className="w-6 h-6" />, color: "bg-green-500" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://balivisa.agency/#organization",
  "name": "Bali Visa Agency — Official Division of PT Indonesian Visas Agency",
  "alternateName": [
    "Bali Visa", "Bali Visas", "Bali Visa Agency", "Bali Visas Agency", "Visa Bali", "Bali Visa 2026", "Bali Visa 2027", "Bali Visa 2026-2027"
  ],
  "url": "https://balivisa.agency",
  "logo": "https://balivisa.agency/logo.webp",
  "image": "https://balivisa.agency/og-image.png",
  "description": "Official Bali Division of PT Indonesian Visas Agency. Direct-to-source legal sponsor for Bali VOA, Tourist Visas, KITAS, and Digital Nomad permits. 100% Legal & Verified.",
  "telephone": "+62-857-2704-1992",
  "email": "contact@indonesianvisas.agency",
  "priceRange": "$$",
  "legalName": "PT Indonesian Visas Agency",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Tibungsari No.11C, Padangsambian Kaja",
    "addressLocality": "Denpasar Barat, Denpasar",
    "addressRegion": "Bali",
    "postalCode": "80117",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.6657,
    "longitude": 115.1764
  },
  "hasMap": "https://maps.app.goo.gl/p6t9JSd5CGCDf7jZA",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-857-2704-1992",
    "contactType": "customer service",
    "areaServed": "ID",
    "availableLanguage": ["English", "Indonesian"]
  },
  "parentOrganization": {
    "@type": "Corporation",
    "@id": "https://indonesianvisas.com/#organization",
    "name": "PT Indonesian Visas Agency",
    "taxID": "0100000008117681",
    "url": "https://indonesianvisas.com"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5"
  },
  "sameAs": [
    "https://indonesianvisas.com",
    "https://balihelp.id",
    "https://bali.enterprises",
    "https://bali.technology",
    "https://indodesign.website",
    "https://maps.app.goo.gl/p6t9JSd5CGCDf7jZA",
    "https://www.instagram.com/balihelp.id",
    "https://x.com/IndonesianVisas"
  ],
  "founder": {
    "@type": "Person",
    "name": "Bayu Damopolii-Manoppo",
    "jobTitle": "Founder & Strategic Director",
    "url": "https://www.linkedin.com/in/balihelp/"
  },
  "knowsAbout": [
    "Bali Visa", "Bali Visas", "Bali Visa Agency", "Bali Visas Agency", "Visa Bali", "Bali Visa 2026", "Bali Visa 2027", "Indonesian Visas", "Immigration Bali", "E-VOA Extension"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bali Visa Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "B1 VOA Bali / Extension",
          "description": "30-day visa on arrival with extension options for Bali travelers."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bali Digital Nomad Visa (E33G)",
          "description": "1-5 year digital nomad visa for remote workers in Bali."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bali Investor KITAS (E28A)",
          "description": "Investment-based residence permit for long-term stay in Bali."
        }
      }
    ]
  }
};

const productLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bali Visa on Arrival (VOA) Extension",
    "description": "30-day extension for Indonesian Visa on Arrival (VOA) B1.",
    "brand": { "@id": "https://balivisa.agency/#organization" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "500000",
      "url": "https://balivisa.agency/bali-visa-on-arrival-extension"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bali Digital Nomad Visa (E33G)",
    "description": "5-year remote worker KITAS for digital nomads in Bali.",
    "brand": { "@id": "https://balivisa.agency/#organization" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "15000000",
      "url": "https://balivisa.agency/bali-digital-nomad-visa-guide"
    }
  }
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get a visa for Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get a Bali visa through BaliVisa.Agency, the official Bali division of PT Indonesian Visas Agency. Options include Visa on Arrival (30-60 days), C1 Tourist Visa (60-180 days), and E33G Digital Nomad KITAS (1 year)."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a Bali visa cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bali visa costs vary by type: Visa on Arrival (VOA) is IDR 500,000 for 30 days, C1 Tourist Visa starts from IDR 3,500,000, and E33G Digital Nomad KITAS starts from IDR 15,000,000 for 1 year."
      }
    },
    {
      "@type": "Question",
      "name": "Can I extend my Bali visa online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Bali visa extensions for VOA and tourist visas can be processed online through Bali Visa Agency, the official division of PT Indonesian Visas Agency."
      }
    }
  ]
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bali Visa Agency",
  "url": "https://balivisa.agency",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://balivisa.agency/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://balivisa.agency"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Bali Visa Services",
      "item": "https://balivisa.agency#services"
    }
  ]
};

const servicesLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bali Visa on Arrival (VOA) Extension",
    "provider": { "@id": "https://balivisa.agency/#organization" },
    "areaServed": { "@type": "City", "name": "Bali" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "VOA Extension",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "30-Day VOA Extension" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bali Digital Nomad Visa",
    "provider": { "@id": "https://balivisa.agency/#organization" },
    "description": "Remote worker visa for digital nomads living in Bali."
  }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showLegality, setShowLegality] = useState(false);
  const [showBadgeHint, setShowBadgeHint] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<{ title: string, content: string } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadgeHint(true);
      // Auto-hide after 4 seconds
      setTimeout(() => setShowBadgeHint(false), 4000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      {/* Toast */}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="https://voabali.com" className={`text-3xl md:text-4xl font-black tracking-tight transition-colors ${scrolled ? 'text-slate-800 hover:text-slate-700' : 'text-slate-800'}`}>
            Bali Visa
          </a>
          <a
            href="https://wa.me/6285727041992"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Bali-Help.webp"
            alt="Bali Visa Hero"
            fill
            priority
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-900/5" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="relative inline-block mb-6">
              <button
                onClick={() => {
                  setShowLegality(true);
                  setShowBadgeHint(false);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-slate-900 text-xs font-black hover:scale-105 transition-all shadow-lg shadow-amber-400/20 group cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-slate-900 group-hover:scale-110 transition-transform" />
                REGISTERED COMPANY
              </button>

              <AnimatePresence>
                {showBadgeHint && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 w-48 p-3 bg-slate-800 text-white text-[10px] rounded-2xl shadow-xl font-bold leading-tight"
                  >
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" />
                    Click for Check Legality
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight text-slate-800">
              Bali <span className="text-purple-900 block md:inline">Visa</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
              Bali Division of PT Indonesian Visas Agency - The official Bali visa agency for 2026/2027. Fast, reliable sponsor, and professional visa services for your Bali adventure.
            </p>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-slate-600">
              Get your Bali visa processed easily with trusted sponsorship, expert guidance, and responsive customer support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-8 mb-10 md:mb-12">
              <div
                onClick={() => setSelectedInfo({
                  title: "01 Leading Industry",
                  content: "We have over 16 years of specialized experience in Indonesian Visa Services. We are a fully legal and registered Sponsor Company with the Ministry of Law & Human Rights."
                })}
                className="group relative p-3 md:p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-purple-900 transition-all cursor-pointer hover:shadow-lg active:scale-95 flex flex-col justify-center"
              >
                <div className="text-lg md:text-4xl font-black mb-1 md:mb-2 text-purple-900">01</div>
                <div className="text-[8px] md:text-sm font-bold text-slate-600 uppercase tracking-tighter leading-tight">Leading Industry</div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShieldCheck className="w-3 h-3 text-purple-900" />
                </div>
              </div>
              <div
                onClick={() => setSelectedInfo({
                  title: "10K+ Visas Processed",
                  content: "We have successfully processed over 10,000 visa applications for travelers from 97+ countries. Our direct-to-source system ensures speed and 100% legal compliance."
                })}
                className="group relative p-3 md:p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-purple-900 transition-all cursor-pointer hover:shadow-lg active:scale-95 flex flex-col justify-center"
              >
                <div className="text-lg md:text-4xl font-black mb-1 md:mb-2 text-purple-900">10K+</div>
                <div className="text-[8px] md:text-sm font-bold text-slate-600 uppercase tracking-tighter leading-tight">Visas</div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShieldCheck className="w-3 h-3 text-purple-900" />
                </div>
              </div>
              <div
                onClick={() => setSelectedInfo({
                  title: "99% Success Rate",
                  content: "Our rigorous verification process and expert review team result in a 99% success rate. We ensure your application meets all immigration criteria before submission."
                })}
                className="group relative p-3 md:p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-purple-900 transition-all cursor-pointer hover:shadow-lg active:scale-95 flex flex-col justify-center"
              >
                <div className="text-lg md:text-4xl font-black mb-1 md:mb-2 text-purple-900">99%</div>
                <div className="text-[8px] md:text-sm font-bold text-slate-600 uppercase tracking-tighter leading-tight">Success</div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShieldCheck className="w-3 h-3 text-purple-900" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://indonesianvisas.com"
                className="w-full sm:w-auto bg-slate-800 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-xl hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Globe className="w-6 h-6" />
                <span>Select Your Country</span>
              </a>
              <a
                href="https://indonesianvisas.com/gci"
                className="w-full sm:w-auto bg-purple-900 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-xl hover:bg-purple-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center gap-2 border-2 border-purple-800"
              >
                <Star className="w-6 h-6" />
                <span>GCI - Global Cityzen of Indonesia</span>
              </a>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg max-w-6xl mx-auto border border-slate-100">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-slate-800">
              Simple 4-Step Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { step: 1, title: "Select Country", desc: "Choose your nationality from 97 supported countries.", info: "Identify your nationality to see specific requirements and visa options available for your country. We handle 97+ nationalities directly." },
                { step: 2, title: "Visa & Details", desc: "Select visa type and provide personal information.", info: "Choose the best visa type (VOA, KITAS, Nomad) for your stay duration. Provide basic personal details for the immigration portal." },
                { step: 3, title: "Upload Documents", desc: "Upload passport and selfie (optional, can skip).", info: "Securely upload your passport and documents. Our system uses end-to-end encryption to protect your identity and travel documents." },
                { step: 4, title: "Payment", desc: "Complete payment and submit your application.", info: "Secure by Encrypted Doku Payment & Paypal. Your financial data is protected by industry-standard encryption and processed via official gateways." },
              ].map((item) => (
                <div
                  key={item.step}
                  onClick={() => setSelectedInfo({ title: item.title, content: item.info })}
                  className="group relative flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-purple-900 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-900 to-purple-700 text-white flex items-center justify-center font-black text-xl md:text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 text-slate-800">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Send className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Apply for a Visa</h3>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                Get your Bali visa quickly and hassle-free. Professional support from start to finish. Start your application today and receive approval within 24-48 hours.
              </p>
              <a
                href="https://indonesianvisas.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <RefreshCw className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Extend Your Visa</h3>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                Need more time in Bali? Extend your visa without leaving Indonesia. Simple process with guaranteed approval. Stay up to 180 days.
              </p>
              <a
                href="https://indonesianvisas.com/Extend"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-800 border-2 border-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:border-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Extend Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Our Visa Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right visa type for your needs - from tourist to business and investment visas. Expert guidance for every visa category.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {visaServices.map((service, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-slate-800 mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-sm md:text-base text-slate-600 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-purple-900 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://indonesianvisas.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Visa Types <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Smart System Sponsor ID Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-slate-50 border-y border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Bali-Help.webp"
            alt="Bali Help Smart ID Background"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-800 leading-tight">
                SMART SYSTEM <span className="text-purple-900">Sponsor ID</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Experience the future of Indonesian immigration with our patent-pending Smart ID ecosystem. Secure, digital, and instantly verifiable for all travelers.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { title: "Smart ID", url: "https://indonesianvisas.com/ktp-id-card-smart-id" },
                  { title: "IDiv Card", url: "https://indonesianvisas.com/id-indonesian-visas" },
                  { title: "Guide ID", url: "https://indonesianvisas.com/id-guide" }
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-purple-900 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <span className="font-bold text-slate-800 group-hover:text-purple-900 transition-colors">{link.title}</span>
                    <ArrowRight className="w-4 h-4 ml-auto text-slate-400 group-hover:text-purple-900" />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://indonesianvisas.com/smart-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:text-slate-800 transition-all shadow-lg inline-flex items-center gap-2"
                >
                  Explore Smart ID
                </a>
                <a
                  href="https://indonesianvisas.com/why-travelers-need-a-sponsor-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-800 border-2 border-slate-800 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all inline-flex items-center gap-2"
                >
                  Why Sponsor ID?
                </a>
              </div>
            </div>

            <div className="relative group perspective-1000">
              <SmartIDCard />
            </div>
          </div>
        </div>
      </section>

      {/* VOA Bali Section */}
      <section className="py-16 md:py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-800">
                VOA Bali - The Official Visa support for <span className="text-purple-900">voabali.com</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  <strong>Bali Visa Agency</strong> is proud to operate the premium services for <strong>voabali.com</strong>, serving as the trusted gateway for international travelers entering Bali.
                </p>
                <p>
                  As the premier provider for <strong>Visa On Arrival (B1/B213)</strong> and visa extensions, we ensure your entry into Indonesia is smooth and compliant with the latest immigration regulations.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Official partner support for <strong>voabali.com</strong> inquiries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Fast-track <strong>Visa On Arrival</strong> processing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Dedicated <strong>Bali Visa Agency</strong> support team</span>
                  </li>
                </ul>
                <div className="pt-6">
                  <a
                    href="https://indonesianvisas.com/services/B1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-800 transition-colors inline-flex items-center gap-2"
                  >
                    Get VOA Bali Now <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-purple-900 to-slate-900 p-8 rounded-2xl text-center text-white">
                <Globe className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                <h3 className="text-2xl font-bold mb-2">Official VOA Support</h3>
                <p className="text-slate-200 mb-6">Trusted by 10K+ Travelers</p>
                <div className="text-4xl font-black text-amber-400">voabali.com</div>
                <div className="text-sm text-slate-300 mt-2">Powered by Bali Visa Agency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Formation Section */}
      <section className="py-16 md:py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-900/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-bold mb-6">
                <Briefcase className="w-4 h-4" /> Business Solutions
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                PT PMA <span className="text-amber-400">Registration</span> & Company Formation
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
                <p>
                  Establish your presence in the Indonesian market with a <strong>PT PMA (Foreign-Owned Company)</strong>. Our end-to-end framework covers everything from KBLI selection to bank account opening.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "100% Foreign Ownership",
                    "Investor KITAS Support",
                    "NIB & OSS Registration",
                    "Tax ID (NPWP) Setup",
                    "Bank Account Opening",
                    "Virtual Office Options"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-sm md:text-base text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://indonesianvisas.com/company-formation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-all inline-flex items-center gap-2 shadow-lg shadow-amber-400/20"
                >
                  See Prices <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://balihelp.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  Check Detail
                </a>
                <a
                  href="https://bali.enterprises/starting-business-bali-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center text-slate-400 hover:text-white transition-colors text-sm font-bold underline underline-offset-8"
                >
                  PT PMA Guide
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { plan: "Basic Planning", price: "Rp 25.000.000", desc: "Core business setup including NIB & AHU." },
                { plan: "Strategic Planning", price: "Rp 45.000.000", desc: "Adds Virtual Office & Bank Account support." },
                { plan: "End-to-End Setup", price: "Rp 84.800.000", desc: "Adds KITAS Investor & Foreign ID Setup." }
              ].map((tier, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{tier.plan}</h3>
                      <p className="text-sm text-slate-400 max-w-[200px]">{tier.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-amber-400">{tier.price}</div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500">Starting From</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Why Choose Bali Visa?</h2>
            <p className="text-lg md:text-xl text-slate-600">Your trusted partner for seamless Indonesian visa processing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-slate-800 mb-4">{benefit.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{benefit.title}</h3>
                <p className="text-sm md:text-base text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & About */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 md:w-24 h-20 md:h-24 mx-auto mb-4 md:mb-6 text-slate-800">
                <Globe className="w-full h-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Frequently Asked Questions</h3>
              <p className="text-base md:text-lg mb-6 text-slate-600">
                Find answers to common visa questions and requirements. Learn about processing times, required documents, and more.
              </p>
              <a
                href="/faq"
                className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                View FAQ <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 md:w-24 h-20 md:h-24 mx-auto mb-4 md:mb-6 text-slate-800">
                <User className="w-full h-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Bali Visa Agency</h3>
              <p className="text-base md:text-lg mb-6 text-slate-600">
                Learn more about our company, experienced team, and our mission to provide excellent visa services.
              </p>
              <a
                href="/about"
                className="bg-white text-slate-800 border-2 border-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:border-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Get In Touch</h2>
            <p className="text-lg md:text-xl text-slate-600">We're here to help with your visa needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <MessageCircle className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 text-slate-800" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">WhatsApp</h3>
              <a
                href="https://wa.me/6285727041992"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-semibold text-slate-800 hover:text-amber-500 transition-colors"
              >
                +62 85727041992
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Mail className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 text-slate-800" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">Email</h3>
              <div className="space-y-1">
                <a
                  href="mailto:info@indonesianvisas.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-slate-800 hover:text-amber-500 transition-colors"
                >
                  info@indonesianvisas.agency
                </a>
                <a
                  href="mailto:support@visas.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-slate-800 hover:text-amber-500 transition-colors"
                >
                  support@visas.agency
                </a>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <MapPin className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 text-slate-800" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">Office</h3>
              <a
                href="https://maps.app.goo.gl/HmscSzEXWqojJqf98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-slate-800 hover:text-amber-500 transition-colors"
              >
                Jl. Tibung Sari No.11C, Padangsambian Kaja,<br />
                Denpasar Barat, Bali 80117, Indonesia
              </a>
            </div>
          </div>
          <div className="text-center mb-8">
            <a
              href="https://maps.app.goo.gl/HmscSzEXWqojJqf98"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Star className="w-5 h-5 md:w-6 md:h-6" />
              Review Us on Google
            </a>
          </div>

          {/* Social Media */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-slate-800">Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-lg ${social.color || social.gradient}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto">
          {/* Top of Footer: Copyright & License */}
          <div className="text-center mb-16 space-y-2">
            <p className="text-white font-bold text-lg">© 2026 Bali Visa Agency. All Rights Reserved.</p>
            <p className="text-sm opacity-60">Licensed Travel & Visa Agency (KBLI: 79111)</p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <h3 className="text-white text-3xl font-black tracking-tighter">Bali Visa</h3>
              <p className="text-sm leading-relaxed opacity-80">
                Official Bali Division of PT Indonesian Visas Agency. Providing professional, direct-to-source visa services with 16+ years of expertise in Indonesian immigration.
              </p>
              <div className="pt-0.5 space-y-2 text-xs opacity-60">
                <p>NIB: 0402260034806</p>
                <p>AHU: AHU-00065.AH.02.01.TAHUN 2020</p>
                <p>NPWP: 10.000.000.0-811.7681</p>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Visa Services</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="https://indonesianvisas.com/services/B1" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">B1 VOA / Extension</a></li>
                <li><a href="https://indonesianvisas.com/services/C1" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">C1 Tourist Visa</a></li>
                <li><a href="https://indonesianvisas.com/services/E33G" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Digital Nomad Visa</a></li>
                <li><a href="https://indonesianvisas.com/services/E28A" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Investment KITAS</a></li>
                <li><a href="https://indonesianvisas.com/services" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-semibold hover:underline">All Visa Types</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="/faq" className="hover:text-amber-400 transition-colors">Frequently Asked Questions</a></li>
                <li><a href="/site-map" className="hover:text-amber-400 transition-colors">Sitemap</a></li>
                <li><a href="https://indonesianvisas.com/affiliate" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Affiliate Program</a></li>
                <li><a href="https://indonesianvisas.com/smart-id" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Smart ID</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-900 transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm font-semibold text-white mb-2">Bali Office</p>
              <p className="text-xs opacity-70 leading-relaxed mb-4">
                Jl. Tibung Sari No.11C, Padangsambian Kaja, Denpasar Barat, Bali 80117
              </p>
              <a
                href="/site-map"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-amber-400 rounded-xl text-xs font-black hover:bg-amber-400 hover:text-slate-900 transition-all border border-slate-700 shadow-lg"
              >
                <MapPin className="w-3 h-3" />
                SITEMAP
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Left Side: Ecosystem Domains */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold hover:text-white">bali.enterprises</a>
                <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold hover:text-white">indonesianvisas.com</a>
                <a href="https://balihelp.id" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold hover:text-white">balihelp.id</a>
                <a href="https://bali.technology" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold hover:text-white">bali.technology</a>
                <a href="https://indodesign.website" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold hover:text-white">indodesign.website</a>
              </div>

              {/* Right Side: Policy Links */}
              <div className="flex flex-wrap gap-6 text-xs font-medium">
                <a href="https://indonesianvisas.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="https://indonesianvisas.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms & Conditions</a>
                <a href="https://indonesianvisas.com/refund" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>


      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6285727041992"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Need help? Chat with us!
        </span>
      </a>
      {/* Legality Modal */}
      <AnimatePresence>
        {showLegality && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLegality(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[32px] p-6 md:p-8 max-w-lg w-full shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar"
            >
              <div className="absolute top-0 right-0 p-6">
                <button
                  onClick={() => setShowLegality(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center shadow-inner">
                  <ShieldCheck className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">Check Legality</h3>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Official Verification</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* AHU Search */}
                <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Company Name</p>
                    <button
                      onClick={() => navigator.clipboard.writeText("Indonesian Visas Agency")}
                      className="text-[10px] font-black bg-white px-3 py-1 rounded-full border border-slate-200 hover:border-amber-400 transition-all shadow-sm active:scale-95"
                    >
                      COPY
                    </button>
                  </div>
                  <div className="font-black text-slate-800 text-lg">Indonesian Visas Agency</div>
                  <a
                    href="https://www.ahu.go.id/pencarian/profil-pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-between p-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-amber-400 hover:text-slate-800 transition-all group"
                  >
                    <span>Cek Profil PT (AHU)</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* NIB Search */}
                <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Registration No (NIB)</p>
                    <button
                      onClick={() => navigator.clipboard.writeText("0402260034806")}
                      className="text-[10px] font-black bg-white px-3 py-1 rounded-full border border-slate-200 hover:border-amber-400 transition-all shadow-sm active:scale-95"
                    >
                      COPY
                    </button>
                  </div>
                  <div className="font-black text-slate-800 text-lg">0402260034806</div>
                  <a
                    href="https://www.badanperizinan.co.id/nib.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-between p-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-amber-400 hover:text-slate-800 transition-all group"
                  >
                    <span>Cek NIB (Government)</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Company House */}
                <a
                  href="https://companieshouse.id/indonesian-visas-agency?ref=search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-white border-2 border-slate-800 text-slate-800 rounded-3xl font-bold hover:bg-slate-50 transition-all group"
                >
                  <span>Public Record Company House</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Company Profile */}
                <a
                  href="https://indonesianvisas.com/company-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-white border-2 border-slate-800 text-slate-800 rounded-3xl font-bold hover:bg-slate-50 transition-all group"
                >
                  <span>Check Company Profile</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <Globe className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-900/80 font-medium leading-relaxed">
                  Click <strong>COPY</strong> then open the portal. Search for our credentials to verify our 100% legal compliance with the Indonesian Ministry of Law & Human Rights.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Information Modal */}
      <AnimatePresence>
        {selectedInfo && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInfo(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100"
            >
              <div className="absolute top-0 right-0 p-4">
                <button
                  onClick={() => setSelectedInfo(null)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-900/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-purple-900" />
                </div>
                <h3 className="text-xl font-black text-slate-800 leading-tight">
                  {selectedInfo.title}
                </h3>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {selectedInfo.content}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedInfo(null)}
                  className="bg-slate-800 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-amber-400 hover:text-slate-800 transition-all"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div >
  );
}
