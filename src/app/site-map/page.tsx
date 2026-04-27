import React from 'react';
import Link from 'next/link';
import { MapPin, GraduationCap, ShieldCheck, BookOpen, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Site Map - Bali Visa Agency Resources",
  description: "Complete list of all regional visa pages, educational clusters, immigration guides, and visa glossary for Indonesia.",
  alternates: { canonical: "/site-map" }
};

const clusters = [
  {
    title: "Regional Visa Pages",
    icon: <MapPin className="w-6 h-6 text-purple-900" />,
    links: [
      { name: "Visa Indonesia", href: "/visa-indonesia" },
      { name: "Visa Bali", href: "/visa-bali" },
      { name: "Visa Jakarta", href: "/visa-jakarta" },
      { name: "Visa Lombok", href: "/visa-lombok" },
      { name: "Visa Surabaya", href: "/visa-surabaya" },
      { name: "Visa Jogja", href: "/visa-jogja" },
    ]
  },
  {
    title: "Educational Visa Cluster",
    icon: <GraduationCap className="w-6 h-6 text-purple-900" />,
    links: [
      { name: "B211A Visa Guide", href: "/education/b211a" },
      { name: "Study KITAS", href: "/education/study-kitas" },
      { name: "Cultural & Social Visa", href: "/education/cultural-visa" },
      { name: "Research Visa Indonesia", href: "/education/research-visa" },
      { name: "Internship Visa", href: "/education/internship-visa" },
    ]
  },
  {
    title: "Immigration Guides",
    icon: <ShieldCheck className="w-6 h-6 text-purple-900" />,
    links: [
      { name: "KITAS Requirements", href: "/immigration/kitas-requirements" },
      { name: "Overstay Rules & Penalties", href: "/immigration/overstay-rules" },
      { name: "Deportation Process", href: "/immigration/deportation-process" },
      { name: "Dual Citizenship Laws", href: "/immigration/dual-citizenship" },
      { name: "Permanent Residency (KITAP)", href: "/immigration/permanent-residency" },
    ]
  },
  {
    title: "Visa Glossary Cluster",
    icon: <BookOpen className="w-6 h-6 text-purple-900" />,
    links: [
      { name: "KITAS Meaning & Terms", href: "/glossary/kitas-meaning" },
      { name: "SKTT & Domicile Guide", href: "/glossary/sktt-guide" },
      { name: "STM Police Reporting", href: "/glossary/stm-report" },
      { name: "Global e-Visa System", href: "/glossary/e-visa-system" },
      { name: "Telex Visa & PVA", href: "/glossary/telex-visa" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">HTML Sitemap</h1>
          <p className="text-xl text-slate-600">Navigate through all our professional visa and immigration resources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clusters.map((cluster, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                {cluster.icon}
                <h2 className="text-xl font-bold text-slate-800">{cluster.title}</h2>
              </div>
              <ul className="space-y-4">
                {cluster.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-purple-900 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/"
            className="text-slate-500 hover:text-slate-800 transition-colors font-medium underline underline-offset-4"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
