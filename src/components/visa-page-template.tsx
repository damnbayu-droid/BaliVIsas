import React from 'react';
import { CheckCircle2, ArrowRight, MessageCircle, Globe, Navigation, Briefcase, User, FileText, Star, CreditCard, Clock, Headphones } from 'lucide-react';

interface Section {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface VisaPageTemplateProps {
  location: string;
  title: string;
  description: string;
  sections: Section[];
  ctaLink?: string;
}

const visaServices = [
  { title: "B1 VOA / Extension", description: "30-day visa on arrival with extension options. Perfect for short visits.", icon: <Navigation className="w-8 h-8" /> },
  { title: "C1 Visit Visa", description: "Single entry visit visa for tourism purposes. Valid for 60 days.", icon: <Globe className="w-8 h-8" /> },
  { title: "C2 Business Visa", description: "Business visa for meetings and conferences. Multiple entry options.", icon: <Briefcase className="w-8 h-8" /> },
  { title: "D1 Tourist Visa", description: "60-day tourist visa with extensions up to 180 days total stay.", icon: <User className="w-8 h-8" /> },
  { title: "D2 Business Visa", description: "Multiple entry business visa for professionals. Valid up to 12 months.", icon: <FileText className="w-8 h-8" /> },
  { title: "D12 Pre Investment", description: "Pre-investment visa for business setup. Ideal for entrepreneurs.", icon: <Star className="w-8 h-8" /> },
  { title: "E33G Digital Nomad", description: "5-year digital nomad visa for remote workers. Live and work in Bali.", icon: <Globe className="w-8 h-8" /> },
  { title: "E28A Investment KITAS", description: "Investment-based residence permit. Long-term stay for investors.", icon: <CreditCard className="w-8 h-8" /> },
];

export default function VisaPageTemplate({ location, title, description, sections, ctaLink = "https://indonesianvisas.com" }: VisaPageTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6">{title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{description}</p>
          <div className="mt-8">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-slate-800 transition-all inline-flex items-center gap-2"
            >
              Apply at Indonesian Visas <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Dynamic Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                {section.icon || <CheckCircle2 className="w-8 h-8 text-purple-900" />}
                <h3 className="text-2xl font-bold text-slate-800">{section.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Popular Visas Section (for regional pages) */}
        {location && (
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 mb-20">
            <h2 className="text-3xl font-black text-center mb-10 text-slate-800">Popular Visas for {location}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visaServices.map((service, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-300 transition-colors">
                  <div className="text-purple-900 mb-4">{service.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-slate-800">{service.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{service.description}</p>
                  <a href={ctaLink} className="text-purple-900 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Footer */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black mb-6">Need expert assistance?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team in Bali is available 24/7 to help you with your visa requirements and immigration procedures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/61423854701"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Support
            </a>
            <a
              href={ctaLink}
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold transition-colors"
            >
              Start Application
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
