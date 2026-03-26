import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Glossary: The Global e-Visa System Indonesia",
  description: "A technical breakdown of Indonesia's digital visa infrastructure and e-visa application procedures.",
  alternates: { canonical: "/glossary/e-visa-system" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Glossary: The Global e-Visa System"
      description="A technical breakdown of Indonesia's digital visa infrastructure."
      sections={[
        { title: "E-Visa Definition", content: "An electronic authorization issued by the Directorate General of Immigration." },
        { title: "Molina Portal", content: "The official online platform for applying for VOA and other visit visas." },
        { title: "Pre-Arrival Approval", content: "Most e-visas must be applied for and approved before you board your flight." },
        { title: "QR Code Verification", content: "Modern e-visas feature a QR code that officers scan at the airport." },
        { title: "PDF Format Delivery", content: "Approved e-visas are sent directly to your email in PDF format." },
        { title: "90-Day Entry Window", content: "You must enter Indonesia within 90 days of your e-visa being issued." },
        { title: "Online Payment (Simponi)", content: "Fees are typically paid online via credit card through the Simponi payment gateway." },
        { title: "Billing Codes", content: "A unique 15-digit code generated for paying visa and immigration fees." },
        { title: "Data Synchronization", content: "The system syncs your passport data automatically with airline check-in systems." },
        { title: "Automated Biometrics", content: "The e-visa system is linked to the facial recognition gates at Jakarta and Bali airports." },
        { title: "User Account (Individu)", content: "Foreigners can create individual accounts to manage their own visa history." },
        { title: "Agent Account (Korporasi)", content: "Visa agencies use professional accounts to sponsor and track thousands of applications." },
        { title: "Status Tracking", content: "You can track your application status from 'Requested' to 'Approved' online." },
        { title: "Entry Stamps", content: "Even with an e-visa, you will receive a physical entry stamp in your passport." },
        { title: "Exit Stamps", content: "Your departure is also recorded digitally, syncing with your e-visa stay period." },
        { title: "System Downtime", content: "In rare cases of system maintenance, manual visa processing may be enabled at embassies." }
      ]}
    />
  );
}
