import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Glossary: SKTT & Domicile Registration in Indonesia",
  description: "Understanding the secondary registration requirements (SKTT) for all KITAS holders in Indonesia.",
  alternates: { canonical: "/glossary/sktt-guide" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Glossary: SKTT & Domicile Registration"
      description="Understanding secondary registration requirements for residency holders in Indonesia."
      sections={[
        { title: "SKTT Definition", content: "Surat Keterangan Tempat Tinggal (SKTT) is a certificate of residence for KITAS holders." },
        { title: "Disdukcapil", content: "The Office of Population and Civil Registration that issues the SKTT." },
        { title: "NIK (Nomor Induk Kependudukan)", content: "The National Identification Number assigned to you in the SKTT." },
        { title: "Validity Period", content: "An SKTT is valid for the duration of your KITAS and must be renewed alongside it." },
        { title: "Required for Banking", content: "Most local banks require an SKTT to open or maintain a savings account." },
        { title: "SIM (Driving License)", content: "You need an SKTT to apply for a local Indonesian driving license (SIM A or SIM C)." },
        { title: "Family Registry Link", content: "If married to an Indonesian, your SKTT is linked to their Kartu Keluarga (KK)." },
        { title: "Change of Address", content: "Moving to a new villa? You must report the move and update your SKTT within 14 days." },
        { title: "Online Application (SIAK)", content: "Many regions now offer online SKTT applications through the SIAK integrated system." },
        { title: "Verification Visits", content: "Officers may occasionally visit your registered address to verify your residency status." }
      ]}
    />
  );
}
