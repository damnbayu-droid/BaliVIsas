import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Deportation Process Indonesia - Administrative Procedures",
  description: "Learn about the administrative process of deportation from Indonesia for visa and law violations.",
  alternates: { canonical: "/immigration/deportation-process" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Deportation Process in Indonesia - What to Know"
      description="Understanding the administrative process of deportation from Indonesia for visa and law violations."
      sections={[
        { title: "Grounds for Deportation", content: "Reasons include working illegally, long-term overstay, criminal activity, or disturbing public order." },
        { title: "Initial Investigation", content: "Immigration intelligence (Wasdakim) will conduct an investigation and interview the foreigner and their sponsor." },
        { title: "Passport Confiscation", content: "During an investigation, immigration has the right to confiscate your passport and issue a receipt." },
        { title: "Administrative Action", content: "Deportation is often an 'Administrative Action' rather than a criminal one, allowing for faster processing." },
        { title: "Detention Phase", content: "Foreigners may be held at an immigration office or a dedicated detention center (Rudenim) during the process." },
        { title: "Flight Costs", content: "The foreigner or their sponsor is responsible for the cost of the deportation flight to their home country." },
        { title: "Family & Possessions", content: "Authorities typically allow time to pack essentials, but complex asset liquidation might require power of attorney." },
        { title: "Final Order (TAK)", content: "A formal 'Tindakan Administratif Keimigrasian' order is signed by the Head of the Immigration Office." },
        { title: "The Escort", content: "Officers will escort the individual to the aircraft door to ensure they have physically left Indonesia." },
        { title: "Re-entry Bans", content: "Deportation automatically triggers a re-entry ban (Daftar Penangkalan) for a period decided by Jakarta headquarters." }
      ]}
    />
  );
}
