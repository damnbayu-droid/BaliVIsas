import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cultural & Social Visa Indonesia - Arts & Learning",
  description: "Learn about the Indonesian Social-Cultural visa for arts, training, and social exchanges.",
  alternates: { canonical: "/education/cultural-visa" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Cultural & Social Visa - Immersive Learning"
      description="Explore Indonesia's rich heritage through arts, martial arts, or religious studies with a dedicated social-cultural visa."
      sections={[
        { title: "Arts and Training", content: "Ideal for those learning traditional dance, music, or crafts. This visa (C1 sub-type) allows for deep cultural engagement." },
        { title: "Non-Formal Education", content: "Perfect for language courses or yoga teacher training programs that don't fall under a formal university KITAS." },
        { title: "60-Day Initial Stay", content: "Like the B211A, it starts with 60 days and can be extended to support your learning journey up to 6 months." },
        { title: "Local Sponsor Requirement", content: "A socio-cultural sponsor (foundation or individual) is required. We can assist in finding a legitimate sponsor for your stay." },
        { title: "Bridging the Gap", content: "Learn about the transitions from cultural visits to more permanent residence options if you decide to stay longer." }
      ]}
    />
  );
}
