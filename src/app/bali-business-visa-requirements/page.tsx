import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Clock, CheckCircle2, Globe, Briefcase, FileText, ArrowRight, MessageCircle, MapPin, Navigation, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: "Bali Business Visa Requirements 2026 — C2 & D2 Official Guide",
  description: "Complete requirements for Bali Business Visas. Learn about C2 single entry and D2 multiple entry business permits for Indonesia.",
  keywords: ["Bali Business Visa", "C2 Visa Bali", "D2 Visa Indonesia", "Business Visit Bali", "Business Sponsorship Bali"],
};

export default function BusinessVisaPage() {
  const sections = [
    { title: "1. Business Visa Categories", icon: <Briefcase className="w-12 h-12 text-teal-600" />, content: "Bali offers two main business visas: C2 (Single Entry, 60 days) and D2 (Multiple Entry, 1-2 years). Both are designed for non-productive work like meetings and conferences." },
    { title: "2. C2 Single Entry (60 Days)", icon: <Navigation className="w-12 h-12 text-teal-600" />, content: "Ideal for a single business trip. It can be extended up to 180 days total stay while inside Indonesia." },
    { title: "3. D2 Multiple Entry (12 Months)", icon: <RefreshCw className="w-12 h-12 text-teal-600" />, content: "Perfect for frequent business travelers. Stay up to 60 days per entry with unlimited entries for 1 year." },
    { title: "4. Sponsorship Requirement", icon: <ShieldCheck className="w-12 h-12 text-teal-600" />, content: "A local Indonesian company must sponsor your business visa. Bali Visa Agency provides professional corporate sponsorship services." },
    { title: "5. Permitted Activities", icon: <CheckCircle2 className="w-12 h-12 text-teal-600" />, content: "Attending meetings, signing contracts, market research, and site visits. Productive labor or sales are strictly prohibited." },
    { title: "6. Document Checklist", icon: <FileText className="w-12 h-12 text-teal-600" />, content: "You need a copy of your passport, bank statement (USD 2,000+), and a sponsorship letter from your Indonesian partner." },
    { title: "7. E-Visa Processing", icon: <FileText className="w-12 h-12 text-teal-600" />, content: "Business visas are now processed 100% online as E-Visas. No need to visit an embassy abroad." },
    { title: "8. Processing Time", icon: <Clock className="w-12 h-12 text-teal-600" />, content: "Standard: 5 business days. Express: 24-48 hours. We handle all portal submissions." },
    { title: "9. Arrival Protocol", icon: <MapPin className="w-12 h-12 text-teal-600" />, content: "Present your E-Visa PDF at the immigration counter. No additional fees are payable at the airport." },
    { title: "10. Extension Support", icon: <Clock className="w-12 h-12 text-teal-600" />, content: "C2 extensions require document pick-up and biometric processing. Our team handles the entire logistics chain." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-black text-slate-800">Bali Visa</a>
          <a href="https://wa.me/6285727041992" className="bg-teal-600 text-white px-6 py-2 rounded-full font-bold">Business Desk</a>
        </div>
      </nav>
      <header className="py-24 px-4 text-center bg-teal-900 text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Bali Business Visa Requirements</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">Professional immigration solutions for corporate travelers and entrepreneurs.</p>
      </header>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((s, i) => (
            <div key={i} className="p-10 rounded-2xl bg-white border-l-8 border-teal-500 shadow-sm">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
