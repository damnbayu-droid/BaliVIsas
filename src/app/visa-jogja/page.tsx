import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visa Jogja - Cultural & Educational Visas",
  description: "Official visa services for Yogyakarta. Visit ancient temples and cultural centers with specialized visa support.",
  alternates: { canonical: "/visa-jogja" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location="Jogja"
      title="Visa Jogja - The Cultural Soul of Java"
      description="Official visa support for Yogyakarta. Explore ancient temples and rich Javanese culture with peace of mind."
      sections={[
        { title: "Heritage & Culture", content: "Visit Borobudur and Prambanan without visa worries. We handle all short-term and long-term tourism permits." },
        { title: "Education & Research", content: "As the 'City of Education', we provide specialized support for academic visas and social visits in Jogyakarta." },
        { title: "Arts & Traditions", content: "Stay longer to learn traditional crafts. Our extensions allow for deep cultural immersion in the Kraton area." },
        { title: "Spiritual Journeys", content: "Supporting long-term stays for those exploring the spiritual and philosophical heritage of Central Java." }
      ]}
    />
  );
}
