import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Clock, CheckCircle2, Globe, Navigation, User, FileText, ArrowRight, MessageCircle, RefreshCw, Send, Headphones } from 'lucide-react';
import SmartIDCard from '@/components/SmartIDCard';

export const metadata: Metadata = {
  title: "Bali Visa on Arrival (VOA) & Extension — Complete Guide 2026",
  description: "Official guide for B1 Visa on Arrival (VOA) in Bali. Learn how to apply, costs, and the 100% digital extension process. Bali Division of PT Indonesian Visas Agency.",
  keywords: ["Bali VOA", "Visa on Arrival Bali", "Extend VOA Bali", "B1 Visa Indonesia", "Bali Visa Extension Cost"],
};

export default function VOAExtensionPage() {
  const sections = [
    { title: "1. What is Bali VOA (B1)?", icon: <Navigation className="w-12 h-12 text-blue-600" />, content: "The B1 Visa on Arrival is a 30-day permit issued for tourism, business meetings, or transit. In 2026, it is the most efficient way to enter Bali for short stays." },
    { title: "2. Eligibility for VOA", icon: <Globe className="w-12 h-12 text-blue-600" />, content: "Citizens from 97+ countries are eligible for VOA. Ensure your passport has at least 6 months validity and two blank pages." },
    { title: "3. E-VOA vs. Manual VOA", icon: <Send className="w-12 h-12 text-blue-600" />, content: "We strongly recommend the E-VOA (Electronic) to bypass airport payment queues. It is linked directly to your passport and Smart ID." },
    { title: "4. Extension Policy 2026", icon: <RefreshCw className="w-12 h-12 text-blue-600" />, content: "The B1 VOA can be extended once for an additional 30 days. The process is now 100% digital via the Bali Visa Agency portal." },
    { title: "5. Cost Breakdown", icon: <FileText className="w-12 h-12 text-blue-600" />, content: "Initial VOA: IDR 500,000. Extension: IDR 500,000 (Gov fee) + Agency Service Fee for digital handling and sponsorship." },
    { title: "6. Overstay Penalties", icon: <ShieldCheck className="w-12 h-12 text-blue-600" />, content: "Overstaying is a serious offense. Fines are IDR 1,000,000 per day. Always extend at least 7 days before your visa expires." },
    { title: "7. Digital Biometrics", icon: <User className="w-12 h-12 text-blue-600" />, content: "For E-VOA extensions, physical biometrics (fingerprints) are no longer required in 2027, making it a truly 'hands-off' process." },
    { title: "8. Smart ID for VOA", icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />, content: "Even VOA holders receive a temporary Smart ID profile for easier check-ins at hotels and domestic travel within Indonesia." },
    { title: "9. Document Requirements", icon: <FileText className="w-12 h-12 text-blue-600" />, content: "You need a passport scan, return flight, and proof of vaccination (if applicable by 2027 health protocols)." },
    { title: "10. Processing Time", icon: <Clock className="w-12 h-12 text-blue-600" />, content: "E-VOA is instant to 24 hours. Extensions take 3-5 business days to be fully updated in the immigration system." }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-black text-slate-800">Bali Visa</a>
          <a href="https://wa.me/6285727041992" className="bg-slate-800 text-white px-6 py-2 rounded-full font-bold">Support</a>
        </div>
      </nav>
      <header className="py-20 px-4 text-center bg-slate-50">
        <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6">Bali Visa on Arrival & Extension</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Master the B1 VOA process with our professional guidance.</p>
      </header>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((s, i) => (
            <div key={i} className="p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-black mb-8">Ready to Extend?</h2>
        <a href="https://indonesianvisas.com/extend" className="bg-amber-400 text-slate-900 px-10 py-4 rounded-full font-black text-lg">Extend Online Now</a>
      </section>
    </div>
  );
}
