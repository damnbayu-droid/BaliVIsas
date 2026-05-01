import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Clock, CheckCircle2, Globe, User, FileText, ArrowRight, MessageCircle, Star, Briefcase } from 'lucide-react';
import SmartIDCard from '@/components/SmartIDCard';

export const metadata: Metadata = {
  title: "Bali Digital Nomad Visa Guide 2026 — E33G Remote Worker KITAS",
  description: "The complete guide to the Bali Digital Nomad Visa (E33G). Learn about requirements, tax benefits, and how to stay 5 years in Bali legally.",
  keywords: ["Bali Nomad Visa", "Digital Nomad Bali", "E33G Visa Indonesia", "Remote Work Bali", "KITAS Nomad"],
};

export default function DigitalNomadPage() {
  const sections = [
    { title: "1. The E33G Revolution", icon: <Globe className="w-12 h-12 text-orange-600" />, content: "The E33G Remote Worker KITAS is the official bridge for digital nomads. It replaces temporary visit visas with a stable, multi-year residency permit." },
    { title: "2. 5-Year Validity", icon: <Star className="w-12 h-12 text-orange-600" />, content: "Uniquely, the nomad visa can be granted for up to 5 years, providing long-term security for your life in Bali." },
    { title: "3. Tax Implications", icon: <ShieldCheck className="w-12 h-12 text-orange-600" />, content: "Nomads on the E33G visa are generally exempt from local income tax on funds earned outside Indonesia, making it a tax-efficient choice." },
    { title: "4. Proof of Income", icon: <FileText className="w-12 h-12 text-orange-600" />, content: "Applicants must show a minimum annual income of USD 60,000 from sources outside Indonesia to qualify for the E33G." },
    { title: "5. Sponsorship Requirements", icon: <Briefcase className="w-12 h-12 text-orange-600" />, content: "A registered Indonesian sponsor like Bali Visa Agency is required to guarantee your stay and handle the immigration portal." },
    { title: "6. No Local Employment", icon: <CheckCircle2 className="w-12 h-12 text-orange-600" />, content: "The E33G strictly prohibits working for Indonesian companies. It is for remote work only." },
    { title: "7. Family Inclusion", icon: <User className="w-12 h-12 text-orange-600" />, content: "Nomads can bring dependents (spouse and children) under a 'Family Union' KITAS linked to their primary E33G permit." },
    { title: "8. Smart ID Access", icon: <ShieldCheck className="w-12 h-12 text-orange-600" />, content: "Your E33G KITAS is integrated into the Smart ID system, giving you expat-level benefits like local bank accounts and driver's licenses." },
    { title: "9. Processing Time", icon: <Clock className="w-12 h-12 text-orange-600" />, content: "The full process takes approximately 10-14 business days from document submission to E-Visa issuance." },
    { title: "10. Application Checklist", icon: <FileText className="w-12 h-12 text-orange-600" />, content: "Prepare your passport (18m+), employment contract, bank statements, and a clean criminal record." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-black text-slate-800">Bali Visa</a>
          <a href="https://wa.me/6285727041992" className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold">Consult Now</a>
        </div>
      </nav>
      <header className="py-24 px-4 text-center bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Bali Digital Nomad Visa Guide</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">Live your dream life in Bali with the official E33G Remote Worker KITAS.</p>
      </header>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((s, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-white shadow-xl shadow-orange-900/5 hover:-translate-y-1 transition-all">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="py-20 px-4">
        <SmartIDCard />
      </div>
    </div>
  );
}
