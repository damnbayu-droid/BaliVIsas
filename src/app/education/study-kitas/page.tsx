import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Study KITAS Indonesia - Student Visa Guide",
  description: "Official requirements for the Indonesian Study KITAS (E30). Supporting international students and researchers.",
  alternates: { canonical: "/education/study-kitas" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Study KITAS - Academic Excellence in Indonesia"
      description="The official residence permit for international students, researchers, and academic exchanges in Indonesia."
      sections={[
        { title: "Educational Stay Permit", content: "The E30 sub-type (Study KITAS) allows students to reside in Indonesia for 6 months, 1 year, or 2 years depending on the program duration." },
        { title: "University Sponsorship", content: "A formal acceptance letter from a registered Indonesian institution is required. We coordinate with your university to finalize the sponsorship formalities." },
        { title: "Study Permits (Izin Belajar)", content: "Before applying for the visa, students must obtain a Study Permit from the Ministry of Education. Our team facilitates this crucial step." },
        { title: "Renewal and Compliance", content: "KITAS holders must report any change of address and ensure their permit is renewed at least 30 days before expiry to avoid overstay fines." },
        { title: "Part-time Work Rules", content: "Generally, a study KITAS does not allow for local employment. However, internship provisions may apply under specific cultural or academic programs." }
      ]}
    />
  );
}
