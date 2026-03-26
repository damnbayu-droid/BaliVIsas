import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visa Bali - Official VOA Bali Support",
  description: "Fast Bali visa services. Specializing in tourist visa extensions and digital nomad permits in Kuta, Bali.",
  alternates: { canonical: "/visa-bali" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location="Bali"
      title="Visa Bali - Start Your Island Life Today"
      description="The official support for voabali.com. Specialized visa services for travelers, digital nomads, and investors looking to call Bali home."
      sections={[
        { title: "Tourism & Leisure", content: "Bali is the top destination for Indonesian tourism. We facilitate easy VOA extensions and 60-day tourist visas for maximum relaxation." },
        { title: "Digital Nomad Lifestyle", content: "Remote work in Bali is easier than ever with the E33G Digital Nomad visa and other long-term options we support." },
        { title: "Local Expertise in Kuta", content: "Our main office is located in the heart of Bali, providing direct access to local immigration offices for fast-track extensions." },
        { title: "Island-Wide Services", content: "From Uluwatu to Ubud, our courier service for passport collection and return covers all areas of Bali." }
      ]}
    />
  );
}
