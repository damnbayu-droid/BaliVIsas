import React from 'react';
import { Metadata } from 'next';
import { Briefcase, Clock, ShieldCheck, Globe, Navigation, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: "D2 Multiple Entry Business Visa Bali — 12-Month Official Guide",
  description: "Comprehensive guide for the D2 Business Visa. Unlimited business entries to Bali for 1 year. Professional sponsorship required.",
};

export default function D2VisaPage() {
  const sections = [
    { title: "D2 Strategic Overview", content: "The D2 visa is the gold standard for international business professionals. It allows for seamless entry for meetings, conferences, and market research." },
    { title: "12-Month Security", content: "Valid for 1 full year from the date of first entry. No need to re-apply for every trip." },
    { title: "60-Day Per Entry", content: "Each stay can last up to 60 days. Ideal for intense project cycles and quarterly reviews." },
    { title: "Corporate Sponsorship", content: "Must be sponsored by a registered PT or PT PMA company. We provide official corporate sponsorship for qualified professionals." },
    { title: "Strictly Non-Productive", content: "You cannot be 'employed' in Indonesia. You are representing an overseas entity or your own investment interest." },
    { title: "E-Visa Convenience", content: "The D2 is issued as a digital PDF. Simply show it on your device or print it for entry." },
    { title: "Airport Smart ID", content: "Fast-track access through Smart Gates at Bali and Jakarta airports with your linked Smart ID profile." },
    { title: "Expert Management", content: "Bali Visa Agency provides 24/7 compliance monitoring for our D2 clients to ensure they never overstay." }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <header className="py-20 bg-slate-800 text-white text-center">
        <h1 className="text-4xl font-black mb-4">D2 Multiple Entry Business Visa</h1>
        <p className="max-w-xl mx-auto opacity-80">Empowering global professionals with unlimited access to Indonesia.</p>
      </header>
      <div className="max-w-4xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((s, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
