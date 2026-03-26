import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visa Surabaya - East Java Business & Travel",
  description: "Reliable visa support in Surabaya. Gateway to East Java's industrial hubs and natural wonders.",
  alternates: { canonical: "/visa-surabaya" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location="Surabaya"
      title="Visa Surabaya - Gateway to East Java"
      description="Reliable visa services for the industrial and cultural heart of East Java. Supporting business and tourism in Surabaya."
      sections={[
        { title: "Industrial & Maritime Hub", content: "Surabaya is a key port city. We provide specialized visa support for maritime professionals and industrial experts." },
        { title: "Mount Bromo Exploration", content: "Start your East Java adventure from Surabaya. Our tourist visas cover your entire trek to the volcanoes." },
        { title: "Educational Exchanges", content: "Supporting international students and researchers visiting Surabaya's top-tier universities." },
        { title: "Regional Growth Support", content: "Efficient processing for those looking to invest in the rapidly developing East Java region." }
      ]}
    />
  );
}
