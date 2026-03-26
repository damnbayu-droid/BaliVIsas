import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Glossary: Telex Visa & PVA Guide",
  description: "Understanding the Indonesian Telex Visa system and the modern Approval Code (PVA) process.",
  alternates: { canonical: "/glossary/telex-visa" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Glossary: Understanding the Telex Visa"
      description="A history and modern application of the Indonesian Telex Visa system (Visa Pintar)."
      sections={[
        { title: "Legacy Term: Telex", content: "Historically, visa approvals were sent via telex machines to embassies. Today, it refers to the digital approval code." },
        { title: "Visa Approval Code (PVA)", content: "The modern equivalent of the telex, sent electronically to applicants and embassies." },
        { title: "Embassy Pick-up", content: "Some visa types still require you to visit an Indonesian embassy abroad after getting the approval code." },
        { title: "Offshore Applications", content: "Telex visas are typically applied for while the foreigner is outside Indonesia (offshore)." },
        { title: "Integrated Systems (SIMKIM)", content: "The central immigration management system that generates all approval codes." },
        { title: "Verification Period", content: "Telex/PVA applications undergo thorough background checks by immigration headquarters in Jakarta." },
        { title: "Sponsor's Responsibility", content: "The sponsor is the one who initiates the telex application on behalf of the foreigner." },
        { title: "Validity of Approval", content: "Once the code is issued, you usually have 30-60 days to finalize the visa at an embassy." },
        { title: "Embassy Selection", content: "You must choose which embassy you will visit during the initial application phase." },
        { title: "Transition to E-Visa", content: "Most telex categories have been replaced by the direct e-visa, which removes the need for embassy visits." },
        { title: "Working Visas (C312)", content: "Work permits still often use the PVA/Telex system for coordination with Indonesian embassies." },
        { title: "Consulting an Agent", content: "Because of the complexity of embassy coordination, using an agent for telex visas is highly recommended." }
      ]}
    />
  );
}
