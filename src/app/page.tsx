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
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      title: "E33G Digital Nomad",
      description: "5-year digital nomad visa for remote workers. Live and work in Bali long-term.",
      link: "https://indonesianvisas.com/services/E33G",
      icon: <Globe className="w-16 h-16" />,
    },
    {
      title: "E28A Investment KITAS",
      description: "Investment-based residence permit. Long-term stay for investors.",
      link: "https://indonesianvisas.com/services/E28A",
      icon: <CreditCard className="w-16 h-16" />,
    },
    {
      title: "Custom Visa Solution",
      description: "Tailored visa solutions for unique cases. We handle special requirements.",
      link: "https://indonesianvisas.com/custom-visa",
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
      title: "98% Success Rate",
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
    { name: "WhatsApp", url: "https://wa.me/61423854701", icon: <MessageCircle className="w-6 h-6" />, color: "bg-green-500" },
  ];



  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bali Visas Agency",
    "url": "https://balivisas.agency",
    "logo": "https://balivisas.agency/logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61 423 854 701",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["en", "id"]
    },
    "sameAs": [
      "https://instagram.com/balihelp.id",
      "https://facebook.com/BaliHelp",
      "https://www.linkedin.com/in/bayu-damopolii-887ab883/",
      "https://youtube.com/@balihelp"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Toast */}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-lg' : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="https://voabali.com" className="text-3xl md:text-4xl font-black tracking-tight text-slate-800 hover:text-slate-700 transition-colors">
            Bali Visas
          </a>
          <a
            href="https://wa.me/61423854701"
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
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-900/20 to-purple-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight text-slate-800">
              Bali Visas
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed">
              Bali Visas - Gateway to Indonesian Visas
            </p>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-slate-600">
              Fast, reliable, and professional visa services for your Bali adventure. We serve 97 countries with expert support and dedicated customer service available 24/7.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">16+</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Years Experience</div>
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">10,000+</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Visas Processed</div>
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">99%</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Success Rate</div>
              </div>
            </div>

            <a
              href="https://indonesianvisas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-xl hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
            >
              <Globe className="w-6 h-6" />
              <span>Select Your Country & Apply Now</span>
            </a>
          </div>

          {/* Process Steps */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg max-w-6xl mx-auto border border-slate-100">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-slate-800">
              Simple 4-Step Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { step: 1, title: "Select Country", desc: "Choose your nationality from 97 supported countries." },
                { step: 2, title: "Visa & Personal Details", desc: "Select visa type and provide personal information." },
                { step: 3, title: "Upload Documents", desc: "Upload passport and selfie (optional, can skip)." },
                { step: 4, title: "Payment & Submit", desc: "Complete payment and submit your application." },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-purple-900 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-900 to-purple-700 text-white flex items-center justify-center font-black text-xl md:text-2xl mb-4 shadow-lg">
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

      {/* VOA Bali Section */}
      <section className="py-16 md:py-20 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-800">
                VOA Bali - The Official Visa support for <span className="text-purple-900">voabali.com</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  <strong>Bali Visas Agency</strong> is proud to operate the premium services for <strong>voabali.com</strong>, serving as the trusted gateway for international travelers entering Bali.
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
                    <span>Dedicated <strong>Bali Visas Agency</strong> support team</span>
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
                <p className="text-slate-200 mb-6">Trusted by 10,000+ Travelers</p>
                <div className="text-4xl font-black text-amber-400">voabali.com</div>
                <div className="text-sm text-slate-300 mt-2">Powered by Bali Visas Agency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Why Choose Bali Visas?</h2>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Bali Visas Agency</h3>
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
                href="https://wa.me/61423854701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-semibold text-slate-800 hover:text-amber-500 transition-colors"
              >
                +61 423 854 701
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
                Jl. Tibung Sari No.11C, Bali, Indonesia
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
      <footer className="py-10 px-4 bg-gradient-to-br from-slate-800 to-slate-700 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Bali Visas</h3>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-2 leading-relaxed">
              Professional Indonesian visa services with 16+ years experience. Fast, reliable, and trusted by thousands worldwide.
            </p>
            <a href="/site-map" className="text-slate-400 hover:text-white transition-colors text-xs md:text-sm font-medium underline underline-offset-4 mb-4 inline-block">
              (sitemap)
            </a>
          </div>
          <div className="border-t border-slate-600 pt-6 pb-4 text-center">
            <div className="text-slate-300 text-sm md:text-base mb-4 font-semibold leading-relaxed">
              <p>© 2026 Bali Visas Agency™</p>
              <p>Operated by PT Indonesian Visas Agency (Indonesia).</p>
              <p>All Rights Reserved.</p>
            </div>
            <div className="mb-4">
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs md:text-sm">
                <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">bali.enterprises</a>
                <span className="text-slate-500">•</span>
                <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">indonesianvisas.com</a>
                <span className="text-slate-500">•</span>
                <a href="https://balihelp.id" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">balihelp.id</a>
                <span className="text-slate-500">•</span>
                <a href="https://visas.agency" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">visas.agency</a>
                <span className="text-slate-500">•</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
              <a href="https://indonesianvisas.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Privacy & Policy</a>
              <span className="text-slate-600">•</span>
              <a href="https://indonesianvisas.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Term & Conditions</a>
              <span className="text-slate-600">•</span>
              <a href="https://indonesianvisas.com/refund" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Refund Policy</a>
              <span className="text-slate-600">•</span>
              <a href="https://indonesianvisas.com/affiliate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Affiliate Program</a>
            </div>
          </div>
        </div>
      </footer>


      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/61423854701"
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
    </div >
  );
}
