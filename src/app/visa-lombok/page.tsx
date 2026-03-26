import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visa Lombok - Entry Permits & Extensions",
  description: "Official visa services for Lombok. Explore the Gili Islands and Mandalika with reliable visa support.",
  alternates: { canonical: "/visa-lombok" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location="Lombok"
      title="Visa Lombok - The New Frontier of Indonesia"
      description="Explore the pristine beaches and cultural heritage of Lombok with our reliable visa support services."
      sections={[
        { title: "Eco-Tourism Gateway", content: "Lombok offers a quieter alternative to Bali. We support all tourist visa categories for your stay in Mandalika and beyond." },
        { title: "Surfing & Adventure", content: "Get your visa sorted before you hit the waves. Our online application ensures you spend more time on the beach." },
        { title: "Seamless Island Hopping", content: "Easily extend your Bali visa while in Lombok through our integrated regional support network." },
        { title: "Personalized Service", content: "Our team provides dedicated support for travelers exploring the Gili Islands and Mount Rinjani." }
      ]}
    />
  );
}
