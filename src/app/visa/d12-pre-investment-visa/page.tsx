import React from 'react';
import { Metadata } from 'next';
import { Star, Clock, ShieldCheck, Globe, Navigation, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: "D12 Pre-Investment Visa Bali — 1-2 Year Business Setup Guide",
  description: "Official guide to the D12 Pre-Investment Visa. Perfect for entrepreneurs planning to start a company in Bali.",
};

export default function D12VisaPage() {
  const sections = [
    { title: "D12 Purpose", content: "The D12 is a specialized visa for foreign nationals looking to start a business or invest in Indonesia. It allows for on-ground feasibility studies." },
    { title: "Validity & Stay", content: "Typically granted for 1-2 years. It allows you to stay up to 60 days per entry or extend it for longer research phases." },
    { title: "Bridge to KITAS", content: "This is the perfect 'bridge' visa while you wait for your PT PMA company registration to complete and transition to an E28A Investor KITAS." },
    { title: "Business Setup Rights", content: "Unlike tourist visas, the D12 legally permits you to engage in company formation activities, meeting with lawyers, and site inspections." },
    { title: "Bank Account Access", content: "Holding a D12 visa makes it significantly easier to open a local personal bank account in Bali for pre-investment funds." },
    { title: "Requirements", content: "Passport (18m+), proof of intent to invest, and a sponsorship letter from a recognized legal entity." },
    { title: "Smart ID Integration", content: "Your pre-investment status is flagged in the Smart ID system, providing a professional profile for government interactions." },
    { title: "Full Compliance", content: "Bali Visa Agency specializes in D12 to KITAS transitions, ensuring your investment path is 100% legal from day one." }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <header className="py-20 bg-amber-600 text-white text-center">
        <h1 className="text-4xl font-black mb-4">D12 Pre-Investment Visa</h1>
        <p className="max-w-xl mx-auto opacity-80">Start your Bali business journey with the correct legal foundation.</p>
      </header>
      <div className="max-w-4xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((s, i) => (
          <div key={i} className="p-10 bg-amber-50 rounded-[40px] border border-amber-100 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-4 text-amber-900">{s.title}</h3>
            <p className="text-amber-800 text-sm leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
