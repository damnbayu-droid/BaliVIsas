import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visa Jakarta - Business & Investment Services",
  description: "Professional business visa support in Jakarta. Helping investors and corporate travelers with seamless entry permits.",
  alternates: { canonical: "/visa-jakarta" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location="Jakarta"
      title="Visa Jakarta - Business & Investment Hub"
      description="Professional visa services for the Indonesian capital. Supporting business professionals, investors, and diplomatic visitors."
      sections={[
        { title: "Business & Corporate", content: "Jakarta is the heart of Indonesian commerce. We specialize in C2 and D2 Business Visas for seamless corporate travel." },
        { title: "Investment KITAS", content: "Establish your business presence in Jakarta with our expert assistance for E28A Investment permits." },
        { title: "Capital City Logistics", content: "Navigate the busy immigration system of Jakarta with our dedicated local representatives." },
        { title: "Meeting & Conference Support", content: "Attending a global summit in Jakarta? We provide fast-track visa solutions for event attendees." }
      ]}
    />
  );
}
