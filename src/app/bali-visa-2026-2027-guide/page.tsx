import React from 'react';
import { Metadata } from 'next';
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Globe, 
  Navigation, 
  Briefcase, 
  User, 
  FileText, 
  Star, 
  CreditCard, 
  ArrowRight,
  MessageCircle,
  X,
  MapPin,
  Mail,
  RefreshCw,
  Send,
  Headphones
} from 'lucide-react';
import SmartIDCard from '@/components/SmartIDCard';

export const metadata: Metadata = {
  title: "Bali Visa 2026-2027 — The Ultimate Guide to Bali Immigration",
  description: "Official 2026-2027 guide for Bali Visas. Complete requirements for E-VOA, Tourist Visas, KITAS, and Digital Nomad permits. Stay legal with the Bali Division of PT Indonesian Visas Agency.",
  keywords: ["Bali Visa 2026", "Bali Visa 2027", "Bali Visa Guide", "Bali Immigration Rules", "Bali Visa Price", "Bali Visa Agency"],
  openGraph: {
    title: "Bali Visa 2026-2027 — The Ultimate Guide",
    description: "Stay ahead of the changes. The complete educational guide for Bali Visas in 2026 and 2027.",
    images: ["/og-image.png"],
  }
};

export default function BaliVisaGuide2026() {
  const sections = [
    {
      title: "1. The 2026-2027 Bali Visa Landscape",
      icon: <Globe className="w-12 h-12 text-purple-900" />,
      content: "As we move into 2026 and 2027, Bali's immigration system has transitioned to a 100% digital 'Smart Gateway' ecosystem. The legacy paper-based systems have been replaced by the E-Visa and Smart ID systems. This guide provides a comprehensive overview of the current legal requirements to ensure your stay in Bali is 100% compliant and hassle-free."
    },
    {
      title: "2. E-VOA (B1) — The Golden Standard",
      icon: <Navigation className="w-12 h-12 text-purple-900" />,
      content: "The Electronic Visa on Arrival (E-VOA) remains the most popular entry method. In 2026, the B1 E-VOA allows for a 30-day stay, extendable once for another 30 days. It is now fully automated via the official portals, but having a professional agency like Bali Visa Agency ensures that your metadata and sponsorship are correctly filed to prevent entry delays."
    },
    {
      title: "3. Digital Nomad Visa (E33G)",
      icon: <User className="w-12 h-12 text-purple-900" />,
      content: "The Digital Nomad landscape has been revolutionized with the E33G Remote Worker KITAS. Valid for up to 5 years, this permit is specifically designed for professionals working for companies outside Indonesia. It requires proof of income and a clean legal record, offering the ultimate long-term freedom for the digital nomad community in Canggu, Ubud, and Uluwatu."
    },
    {
      title: "4. KITAS Investor (E28A) Updates",
      icon: <Star className="w-12 h-12 text-purple-900" />,
      content: "Investment in Bali is at an all-time high. The E28A Investor KITAS now features a faster track for those setting up PT PMA companies. Minimum capital requirements have been strictly enforced in 2026 to ensure only serious investors gain access to the 2-year residency benefits, which include multiple entries and the right to work in their own company."
    },
    {
      title: "5. Document Requirements Checklist",
      icon: <FileText className="w-12 h-12 text-purple-900" />,
      content: "To apply for any Bali Visa in 2027, you must have: \n• Passport valid for at least 6 months (18 months for KITAS)\n• Digital passport-size photo with white background\n• Proof of sufficient funds (USD 2,000 minimum)\n• Return or onward flight ticket\n• Proof of health insurance (recommended for all long-term stays)."
    },
    {
      title: "6. Processing Times & Express Lanes",
      icon: <Clock className="w-12 h-12 text-purple-900" />,
      content: "Standard processing for E-Visas is now 3-5 business days. However, Bali Visa Agency offers an 'Express Lane' for urgent arrivals, reducing the wait time to 24 hours. For KITAS applications, the process has been streamlined to 14 business days, significantly faster than the 2-month waits experienced in previous years."
    },
    {
      title: "7. The Smart ID Integration",
      icon: <CreditCard className="w-12 h-12 text-purple-900" />,
      content: "Upon arrival, all long-term visa holders are now issued a Smart ID. This digital identity card (which you can see below) is your primary legal document in Bali. It contains your biometric data and visa status, instantly scannable by police or immigration officers, ensuring you never need to carry your physical passport."
    },
    {
      title: "8. Sponsorship & Legal Authority",
      icon: <ShieldCheck className="w-12 h-12 text-purple-900" />,
      content: "Choosing a legal sponsor is critical. PT Indonesian Visas Agency (NIB: 0402260034806) is one of the few agencies with direct-to-source clearance. Using an 'agent of an agent' is a common pitfall in Bali that can lead to visa cancellations. Always verify the AHU and NIB of your chosen sponsor."
    },
    {
      title: "9. Common Pitfalls to Avoid",
      icon: <X className="w-12 h-12 text-purple-900" />,
      content: "• Overstaying: Fines are now heavily enforced at IDR 1,000,000 per day.\n• Working on Tourist Visas: Strictly prohibited and leads to immediate deportation.\n• Incorrect Visa Type: Applying for B1 when you need C1 can cause issues with extensions.\n• Fake Sponsorship: Ensure your sponsor is a registered PT company."
    },
    {
      title: "10. Extension Procedures",
      icon: <RefreshCw className="w-12 h-12 text-purple-900" />,
      content: "E-VOA extensions are now fully digital. You no longer need to visit the immigration office for biometrics for your first extension. However, for 60-day visit visas (C1), a visit to the immigration office in Jimbaran, Renon, or Singaraja is required once per cycle."
    },
    {
      title: "11. The Airport Experience",
      icon: <MapPin className="w-12 h-12 text-purple-900" />,
      content: "Ngurah Rai International Airport (DPS) now features 'Smart Gates' for E-Visa holders. By having your QR code ready from Bali Visa Agency, you can bypass the traditional queues and enter Bali in less than 5 minutes. Our airport VIP meet-and-greet service further streamlines this for families and business travelers."
    },
    {
      title: "12. Educational Conclusion",
      icon: <Headphones className="w-12 h-12 text-purple-900" />,
      content: "The goal of Bali's 2026-2027 immigration policy is 'Quality Tourism'. By being well-informed and using a professional agency, you contribute to a safer and more organized Bali. We invite you to explore our specialized services for a seamless experience."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-black tracking-tight text-slate-800">
            Bali Visa
          </a>
          <a
            href="https://wa.me/6285727041992"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-400 hover:text-slate-800 transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Live Support
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-16 px-4 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-900 text-xs font-black mb-6">
            <Globe className="w-4 h-4" /> 2026-2027 OFFICIAL GUIDE
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-800 leading-tight">
            Bali Visa <span className="text-purple-900">Ultimate Guide</span> 2026-2027
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            The most comprehensive, educational resource for navigating Bali's modern immigration landscape. Stay legal, stay informed, and enjoy your Bali adventure with zero stress.
          </p>
        </div>
      </section>

      {/* Smart ID Section */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-4">Your Digital Identity in Bali</h2>
            <p className="text-slate-600">Interact with the Smart ID system that powers Bali's 2027 immigration gateway.</p>
          </div>
          <SmartIDCard />
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-800">{section.title}</h3>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-20 h-20 mx-auto mb-8 text-amber-400" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Join 15,000+ travelers who have trusted Bali Visa Agency for their legal entry into Indonesia. Our experts are ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://indonesianvisas.com/apply"
              className="bg-amber-400 text-slate-900 px-10 py-5 rounded-full font-black text-xl hover:bg-white transition-all shadow-lg"
            >
              Apply Online Now
            </a>
            <a
              href="https://wa.me/6285727041992"
              className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-black text-xl hover:bg-white/20 transition-all"
            >
              Consult an Expert
            </a>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-10 px-4 bg-slate-100 border-t border-slate-200 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Official Bali Division of PT Indonesian Visas Agency • NIB: 0402260034806
        </p>
      </footer>
    </div>
  );
}
