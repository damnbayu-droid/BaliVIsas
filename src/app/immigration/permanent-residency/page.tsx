import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Permanent Residency (KITAP) Indonesia - 5-Year Permit Guide",
  description: "The ultimate guide to obtaining Permanent Residency (KITAP) in Indonesia. Requirements, benefits, and process.",
  alternates: { canonical: "/immigration/permanent-residency" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Permanent Residency (KITAP) - The 5-Year Permit"
      description="The ultimate guide to obtaining 'Hak Tetap' (Permanent Stay Permit) in Indonesia."
      sections={[
        { title: "What is KITAP?", content: "KITAP stands for Kartu Izin Tinggal Tetap. It is a 5-year residency permit that can be extended indefinitely." },
        { title: "Who is Eligible?", content: "Usually available after holding a KITAS in the same category for several consecutive years (3-5 years)." },
        { title: "Investor KITAP", content: "Investors who have consistently maintained their investment and KITAS status can upgrade to a KITAP." },
        { title: "Family Reunion KITAP", content: "Spouses of Indonesian citizens can apply for a KITAP after 2 years of marriage and holding a family KITAS." },
        { title: "Religious Workers", content: "Clergymen and religious leaders can also qualify for permanent residency under specific provisions." },
        { title: "Retirement KITAP", content: "Seniors who have lived in Indonesia on a retirement KITAS can apply for permanent status." },
        { title: "Working Privileges", content: "Some KITAP holders (like those married to Indonesians) have more flexible working rights than standard expats." },
        { title: "The 5-Year Validity", content: "The physical card lasts 5 years, but the status itself is permanent as long as the person remains in Indonesia." },
        { title: "Multiple Entry Re-entry (MERP)", content: "KITAP holders get a 2-year or 5-year MERP, allowing for frequent international travel." },
        { title: "Local ID (KTP-OA)", content: "KITAP holders are issued a 'KTP Orang Asing' (Foreigner Identity Card) which is essential for local banking and contracts." },
        { title: "Family Registry (KK)", content: "You become part of the local family registry system, providing a deep level of integration into the community." },
        { title: "Financial Security", content: "Permanent residency often lowers the risk for local banks when applying for loans or mortgages." },
        { title: "The Path to Citizenship", content: "While KITAP is permanent, it is also the final stepping stone for those wishing to eventually apply for Indonesian citizenship." },
        { title: "Cancellation Risks", content: "Leaving Indonesia for more than 1 year without returning can lead to the automatic cancellation of your KITAP." }
      ]}
    />
  );
}
