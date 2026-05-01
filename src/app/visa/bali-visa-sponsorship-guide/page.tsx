import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, User, Globe, Briefcase, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Bali Visa Sponsorship Guide — How to Choose a Legal Sponsor",
  description: "Educational guide on visa sponsorship in Bali. Why you need a sponsor and how to verify their legal credentials.",
};

export default function SponsorshipGuidePage() {
  const sections = [
    { title: "What is a Sponsor?", content: "In Indonesia, almost all visas (except VOA) require a local 'Guarantor' or Sponsor. This entity is legally responsible for your behavior and compliance." },
    { title: "Individual vs. Corporate", content: "While individuals can sponsor some visas, a Corporate Sponsor (PT company) like Bali Visa Agency offers 10x more security and faster processing." },
    { title: "Legal Verification", content: "A legal sponsor must have a valid NIB (Business ID) and AHU (Ministry of Law) registration. Never use a 'freelance' agent without a registered company." },
    { title: "The Liability Factor", content: "Your sponsor is financially liable for your deportation if you break the law. This is why reputable agencies have strict vetting processes." },
    { title: "Sponsorship for KITAS", content: "For KITAS permits, your sponsor must be the company you are investing in or working for. We handle the complex sponsorship transitions." },
    { title: "Smart ID Linking", content: "All sponsorship data is linked to your Smart ID, allowing immigration to verify your guarantor instantly via QR code." },
    { title: "Direct-to-Source", content: "Bali Visa Agency is a direct sponsor, not an intermediary. This means lower costs and zero communication delays." },
    { title: "Change of Sponsor", content: "If your current sponsor is not meeting their obligations, we can help you legally transfer your sponsorship to our agency." }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <header className="py-20 bg-slate-900 text-white text-center">
        <h1 className="text-4xl font-black mb-4">Bali Visa Sponsorship Guide</h1>
        <p className="max-w-xl mx-auto opacity-80">Understanding the legal backbone of your stay in Indonesia.</p>
      </header>
      <div className="max-w-4xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((s, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
