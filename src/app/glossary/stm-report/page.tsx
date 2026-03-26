import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Glossary: STM Police Reporting for Foreigners",
  description: "Learn about the police reporting requirements (STM) for foreign visitors and residents in Indonesia.",
  alternates: { canonical: "/glossary/stm-report" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Glossary: STM - Police Reporting Guide"
      description="Understanding why and how foreigners are reported to the Indonesian Police Department."
      sections={[
        { title: "STM (Surat Tanda Melapor)", content: "A certificate of reporting issued by the local police (Polres/Polsek)." },
        { title: "Who is responsible?", content: "The host (hotel, villa owner, or individual) is legally responsible for reporting foreign guests." },
        { title: "Law No. 6 Year 2011", content: "The Immigration Law that mandates the reporting of foreigners' presence in Indonesia." },
        { title: "24-Hour Rule", content: "A foreigner's presence must be reported within 24 hours of arrival at their accommodation." },
        { title: "Required for Extensions", content: "An STM is often requested during the visa extension process at the immigration office." },
        { title: "POB (Police Report Form)", content: "The administrative form used for manually reporting foreigners." },
        { title: "Digital Integration", content: "Most hotels use an integrated system to report guests electronically to the police." },
        { title: "Reporting Long-term Stay", content: "KITAS holders also need a valid STM from their local police station." },
        { title: "Loss of STM", content: "If you lose your STM, you must apply for a new one at the station where it was issued." },
        { title: "Penalties for Hosts", content: "Failure to report foreign guests can lead to fines or imprisonment for the host." },
        { title: "Security Purpose", content: "The STM system is primarily for public safety and monitoring the location of foreigners." }
      ]}
    />
  );
}
