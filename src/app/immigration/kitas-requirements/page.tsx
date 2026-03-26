import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "KITAS Requirements Indonesia - Complete Document Guide",
  description: "Learn about the essential documents and procedures for the Indonesian Limited Stay Permit (KITAS).",
  alternates: { canonical: "/immigration/kitas-requirements" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="KITAS Requirements - The Ultimate Guide"
      description="Everything you need to know about the Indonesian Limited Stay Permit (KITAS). From documents to biometrics."
      sections={[
        { title: "What is KITAS?", content: "KITAS stands for Kartu Izin Tinggal Terbatas, which is a Limited Stay Permit for foreigners living in Indonesia." },
        { title: "Common Sub-types", content: "There are various sub-types including Working KITAS, Investment KITAS, Family Reunion, and Retirement KITAS." },
        { title: "Passport Validity", content: "Your passport must be valid for at least 18 months for a 12-month KITAS application." },
        { title: "Company Sponsorship", content: "For working KITAS, a local company with a minimum NIB and capital requirement must sponsor the applicant." },
        { title: "Investor Requirements", content: "Investor KITAS (E28A/B) requires the applicant to hold a certain value of shares in the company (typically 1 Billion IDR)." },
        { title: "Marriage KITAS", content: "Foreigners married to Indonesian citizens can apply for a family reunion KITAS sponsored by their spouse." },
        { title: "Retirement Perks", content: "Foreigners aged 60+ (some countries 55+) can enjoy a retirement KITAS with specific financial and housing requirements." },
        { title: "The Telex/E-Visa Step", content: "Before getting the physical card, you must obtain an e-visa approval which serves as your entry permit." },
        { title: "Biometrics at Immigration", content: "Within 30 days of arrival, you must visit the local immigration office for fingerprints and photo session." },
        { title: "MERP (Entry Permit)", content: "Modern KITAS come with a Multiple Entry Re-entry Permit, allowing you to travel abroad without losing your status." },
        { title: "Address Reporting (SKTT)", content: "KITAS holders must report their domicile to the Civil Registry to obtain a Certificate of Residence (SKTT)." },
        { title: "EPO Process", content: "When finishing your stay, you must undergo the Exit Permit Only (EPO) process before leaving Indonesia for good." }
      ]}
    />
  );
}
