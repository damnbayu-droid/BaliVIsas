import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Research Visa Indonesia - Scientific Permits",
  description: "Official pathway for international researchers in Indonesia. BRIN approval and visa requirements explained.",
  alternates: { canonical: "/education/research-visa" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Research Visa Indonesia - Scientific Exploration"
      description="The official pathway for international researchers, PhD students, and scientific collaborators to work in Indonesia."
      sections={[
        { title: "BRIN Approval", content: "All international research must be approved by the National Research and Innovation Agency (BRIN). This is the first step before visa application." },
        { title: "Collaboration with Local Partners", content: "A local research partner (institution or university) is required to sponsor and oversee the research activity." },
        { title: "Field Research Permits", content: "Depending on the location (e.g., national parks), additional permits may be required. We handle the integrated licensing process." },
        { title: "Data Collection Rules", content: "Understanding Indonesian laws on biological and cultural data collection is vital for ethical and legal compliance." },
        { title: "Long-term Research KITAS", content: "For multi-year projects, a research KITAS provides stable residency and multiple-entry privileges for the team." }
      ]}
    />
  );
}
