import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Internship Visa Indonesia - Training Permits",
  description: "Gain work experience in Indonesia. Requirements for non-paid internships and training visas.",
  alternates: { canonical: "/education/internship-visa" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Internship Visa - Professional Development"
      description="Gain international work experience in Indonesia. Learn about the requirements for non-paid internships and training programs."
      sections={[
        { title: "Internship Categories", content: "Most internships fall under the socio-cultural or student visa categories, provided they are non-paid and for educational purposes." },
        { title: "Company Sponsorship", content: "The host company in Indonesia must provide a guarantee letter and details of the training program." },
        { title: "Stay Limitations", content: "Internships are typically limited to 6 months. For longer professional training, a different KITAS category may be required." },
        { title: "Insurance & Safety", content: "A valid health insurance coverage and emergency contact info are mandatory for all international interns in Bali." },
        { title: "From Intern to Employee", content: "Understand the legal pathway (and limitations) if your internship leads to a full-time job offer in Indonesia." }
      ]}
    />
  );
}
