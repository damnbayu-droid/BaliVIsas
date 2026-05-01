import React from 'react';
import { Metadata } from 'next';
import { Globe, Clock, ShieldCheck, RefreshCw, User, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: "D1 Multiple Entry Tourist Visa Bali — 1-2 Year Guide",
  description: "Official guide for the D1 Multiple Entry Visa. Stay up to 60 days per visit with unlimited entries for 12-24 months.",
};

export default function D1VisaPage() {
  const sections = [
    { title: "D1 Overview", content: "The D1 visa is designed for frequent tourists. It allows you to enter and leave Indonesia as many times as you like during its validity." },
    { title: "Validity Period", content: "Typically granted for 1 year or 2 years, depending on your application and documentation." },
    { title: "Stay Duration", content: "You can stay for a maximum of 60 days per entry. You must exit and re-enter if you wish to stay longer." },
    { title: "Requirements", content: "Passport (18m+ for 1y visa), proof of funds ($2,000+), and a history of previous Indonesian visas is helpful." },
    { title: "No Extension Needed", content: "Unlike VOA or C1, there is no extension process. Simply exit the country before your 60 days are up." },
    { title: "Business Meetings", content: "D1 also permits basic business meetings, making it a versatile option for digital entrepreneurs." },
    { title: "Smart ID Tracking", content: "Integrated with the Smart ID system for seamless airport 'Smart Gate' entry across all Indonesian international hubs." },
    { title: "Professional Support", content: "Bali Visa Agency handles the complex 'Multiple Entry' filing to ensure 100% approval rates." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <header className="py-20 bg-blue-900 text-white text-center">
        <h1 className="text-4xl font-black mb-4">D1 Multiple Entry Visa</h1>
        <p className="max-w-xl mx-auto opacity-80">The ultimate freedom for frequent Bali travelers and explorers.</p>
      </header>
      <div className="max-w-4xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((s, i) => (
          <div key={i} className="p-8 bg-white shadow-sm rounded-2xl border-b-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
