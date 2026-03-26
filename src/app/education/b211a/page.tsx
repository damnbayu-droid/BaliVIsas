import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "B211A Visa Guide - Indonesian Visit Visa",
  description: "The complete guide to the B211A single-entry visit visa for tourism and business in Indonesia.",
  alternates: { canonical: "/education/b211a" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="B211A Visa Guide - The Universal Entry Permit"
      description="Deep dive into the B211A single-entry visit visa. Perfect for tourism, business meetings, and industrial visits up to 180 days."
      sections={[
        { title: "What is B211A?", content: "The B211A (now officially renamed under various sub-types like C1/C2) is a single-entry visa valid for 60 days. It can be extended twice, each time for another 60 days, allowing a total stay of 180 days." },
        { title: "Eligibility Requirements", content: "Most nationalities are eligible. You need a passport with 6 months validity, a proof of vaccination (if applicable), and a sponsor (which we provide)." },
        { title: "Tourism vs Business", content: "While primarily used for tourism, the B211A also allows for non-commercial business activities like attending conferences, meetings, or sourcing products." },
        { title: "Extension Process", content: "We handle the entire extension process, including the required biometrics at the local immigration office. Start the process 7-10 days before your visa expires." },
        { title: "Conversion to KITAS", content: "In some cases, a B211A can be converted into a long-term residence permit (KITAS) without leaving the country. Consult our experts for your specific path." }
      ]}
    />
  );
}
