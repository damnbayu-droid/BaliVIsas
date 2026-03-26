import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dual Citizenship Laws Indonesia - Mixed Marriage Guide",
  description: "Understanding Indonesian citizenship laws and current provisions for children of mixed marriages.",
  alternates: { canonical: "/immigration/dual-citizenship" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Dual Citizenship & Indonesian Law"
      description="A deep dive into why Indonesia generally doesn't allow dual citizenship and the exceptions for children."
      sections={[
        { title: "Single Citizenship Principle", content: "Indonesia strictly follows the single citizenship principle (Asas Kewarganegaraan Tunggal)." },
        { title: "Law No. 12 of 2006", content: "The current legal framework governing who is considered an Indonesian citizen." },
        { title: "Children of Mixed Marriage", content: "Children born to one Indonesian parent may hold dual citizenship (Affidavit) until the age of 18." },
        { title: "The Choice at 18", content: "By age 18 (or 21 at the latest), mixed-parentage children must choose one citizenship and renounce the other." },
        { title: "Affidavit Passport", content: "The special document (a limited Indonesian passport) given to dual-citizen children for easy travel." },
        { title: "Loss of Citizenship", content: "Voluntarily acquiring another citizenship, swearing an oath to another country, or joining a foreign military leads to automatic loss of WNI status." },
        { title: "KITAS for Ex-WNI", content: "Former Indonesian citizens (Ex-WNI) can apply for a special KITAS/KITAP category to live in their homeland." },
        { title: "Diaspora Card (KMILN)", content: "A card issued to the Indonesian diaspora to provide certain facilities without requiring citizenship." },
        { title: "Golden Visa & Residency", content: "The new Golden Visa offers a path for long-term residency that doesn't require giving up original citizenship." },
        { title: "Marriage to Foreigners", content: "Indonesian citizens don't lose their citizenship automatically when marrying a foreigner unless they take the other country's passport." },
        { title: "Property Ownership", content: "Foreigners (even those with Indonesian spouses) have different property ownership rights than full WNI citizens." },
        { title: "Inheritance Laws", content: "Understanding how citizenship affects the ability to inherit freehold land (Hak Milik) in Indonesia." },
        { title: "Naturalization Path", content: "Foreigners can become WNI after living in Indonesia for 5-10 years, but must renounce their original citizenship." }
      ]}
    />
  );
}
