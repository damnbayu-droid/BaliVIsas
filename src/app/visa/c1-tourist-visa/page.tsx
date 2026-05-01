import React from 'react';
import { Metadata } from 'next';
import { Globe, Clock, ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "C1 Visit Visa Bali — 60-180 Day Tourist Guide",
  description: "Official guide for the C1 Visit Visa (Tourism). Perfect for long-term travelers wanting to stay up to 6 months in Bali.",
};

export default function C1VisaPage() {
  const sections = [
    { title: "What is the C1 Visa?", content: "The C1 (B211A) is a single-entry visit visa for tourism, family visits, or social purposes. It's the most flexible long-term option for non-workers." },
    { title: "Duration & Extensions", content: "Initial stay is 60 days. It can be extended twice, with each extension adding 60 days, for a total of 180 days." },
    { title: "Requirements", content: "Passport (6m+), bank statement ($2,000+), and a sponsorship letter from a registered travel agency like ours." },
    { title: "Processing Time", content: "Standard processing is 5 business days. Express 48-hour service is available for last-minute travelers." },
    { title: "On-Shore Application", content: "If you are already in Bali on a different visa (like VOA), you can apply for a C1 'On-Shore' to stay longer without leaving." },
    { title: "Biometric Visit", content: "A one-time visit to the immigration office is required for fingerprints and photo during the first extension." },
    { title: "Smart ID Benefits", content: "C1 holders are registered in the Smart ID system for easy identification during their 6-month stay." },
    { title: "No Working Rule", content: "C1 is strictly for tourism. Any form of local or remote employment is prohibited under this specific code." }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <header className="py-20 bg-slate-900 text-white text-center">
        <h1 className="text-4xl font-black mb-4">C1 Visit Visa — Bali Tourism</h1>
        <p className="max-w-xl mx-auto opacity-80">Stay up to 180 days in Bali with the official C1 Tourism Permit.</p>
      </header>
      <div className="max-w-4xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((s, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-2xl hover:border-purple-300 transition-colors">
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
