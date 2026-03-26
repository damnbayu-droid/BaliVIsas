import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Overstay Rules & Penalties Indonesia - Legal Guide",
  description: "Stay compliant with Indonesian immigration laws. Understanding overstay fines, deportation, and blacklisting.",
  alternates: { canonical: "/immigration/overstay-rules" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Overstay Rules & Penalties in Indonesia"
      description="Important information regarding the legal consequences of overstaying your visa in Indonesia."
      sections={[
        { title: "The Daily Fine", content: "Overstaying is currently penalized at 1,000,000 IDR (approx. $65 USD) per day for stays under 60 days." },
        { title: "Counting the Days", content: "The first day of your visa is day 1. If you leave at 12:01 AM on the day after your visa expires, you are on Day 1 of overstay." },
        { title: "Automatic Detection", content: "The automated immigration system at airport gates will instantly detect an expired visa during passport control." },
        { title: "Payment at Airport", content: "Short overstays (under 60 days) can usually be paid directly at the airport's immigration office before departure." },
        { title: "Over 60 Days Rule", content: "If you overstay more than 60 days, you face deportation, a fine, and a mandatory blacklisting from the country." },
        { title: "Immigration Detention", content: "Long-term overstayers may be held in an immigration detention center until their deportation is finalized." },
        { title: "Blacklisting (DPI)", content: "Blacklisting prevents you from re-entering Indonesia for a minimum of 6 months to several years, depending on the severity." },
        { title: "Reporting Voluntarily", content: "If you realize you've overstayed, it's better to report to an immigration office voluntarily rather than getting caught at the airport." },
        { title: "Extenuating Circumstances", content: "Medical emergencies (with hospital proof) may sometimes waive the daily fine, but this requires immediate reporting." },
        { title: "Visa Agents & Overstay", content: "Professional agents (like Bali Visas) can help facilitate the reporting and payment process to minimize stress." },
        { title: "Legal Representation", content: "In serious overstay cases, having legal counsel is recommended to navigate the administrative court process." }
      ]}
    />
  );
}
