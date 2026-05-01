import React from 'react';
import { Metadata } from 'next';
import { CreditCard, Clock, ShieldCheck, Star, Briefcase, Globe } from 'lucide-react';
import SmartIDCard from '@/components/SmartIDCard';

export const metadata: Metadata = {
  title: "E28A Investment KITAS Bali — 2-Year Residence Permit Guide",
  description: "Official guide to the E28A Investor KITAS. Learn how to secure your 2-year residency through investment in Bali.",
};

export default function E28AVisaPage() {
  const sections = [
    { title: "E28A Overview", content: "The E28A is the premier residency permit for investors in Indonesian PT PMA companies. It offers a 2-year stay with multiple entry benefits." },
    { title: "Residency Rights", content: "Holders have the right to live in Bali, open bank accounts, buy vehicles, and manage their investment company legally." },
    { title: "Investment Minimums", content: "You must be listed as a Director or Commissioner with a minimum share value of IDR 10 Billion (authorized capital) per investor in 2026." },
    { title: "Fast-Track Approval", content: "The E28A can be processed in as little as 10-14 days once the company registration is verified in the OSS system." },
    { title: "Smart ID Privilege", content: "E28A holders receive the 'Investor Grade' Smart ID, which includes simplified domestic check-ins and priority government support." },
    { title: "Family Sponsorship", content: "Investors can sponsor their spouse and children for 'Dependent KITAS' permits based on their E28A status." },
    { title: "Tax Residency", content: "Holding a KITAS usually qualifies you as a tax resident. Bali Visa Agency provides tax consultation to ensure full compliance." },
    { title: "Lifetime Support", content: "We manage the entire lifecycle of your KITAS, from the initial E-Visa to yearly reporting and final EPO (Exit Permit Only)." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <header className="py-20 bg-purple-900 text-white text-center">
        <h1 className="text-4xl font-black mb-4">E28A Investment KITAS</h1>
        <p className="max-w-xl mx-auto opacity-80">Secure your future in Bali with professional investment residency.</p>
      </header>
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="mb-20">
          <SmartIDCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((s, i) => (
            <div key={i} className="p-8 bg-white shadow-sm rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
