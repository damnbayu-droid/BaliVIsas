import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visa Indonesia - Indonesian Visa Services Agency",
  description: "Official visa services for Indonesia. Fast-track VOA, extensions, and long-term permits for tourism and business.",
  alternates: { canonical: "/visa-indonesia" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location="Indonesia"
      title="Visa Indonesia - Your Gateway to the Archipelago"
      description="Comprehensive visa services for entering Indonesia. Whether for tourism, business, or long-term stay, we provide the official support you need."
      sections={[
        { title: "National Entry Requirements", content: "Indonesia offers various visa types depending on your nationality and purpose of visit. Most travelers enter via the Visa on Arrival (B1) for short-term stays." },
        { title: "e-Visa System Coverage", content: "Our services cover the entire Indonesian archipelago, ensuring your e-visa is valid for entry at all major international airports and seaports." },
        { title: "Expert Support", content: "With 16+ years of experience, we handle the complexities of Indonesian immigration law so you can focus on your journey." },
        { title: "Fast Processing", content: "Receive your Indonesian visa or extension within 24-48 hours with our express processing service." }
      ]}
    />
  );
}
