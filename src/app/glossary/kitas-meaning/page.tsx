import VisaPageTemplate from '@/components/visa-page-template';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Glossary: KITAS Meaning & Terms - Indonesian Visa Dictionary",
  description: "An advanced glossary of terms related to the Limited Stay Permit (KITAS) and residency in Indonesia.",
  alternates: { canonical: "/glossary/kitas-meaning" }
};

export default function Page() {
  return (
    <VisaPageTemplate
      location=""
      title="Glossary: KITAS Explained - All You Need to Know"
      description="An advanced glossary of terms related to the Limited Stay Permit (KITAS) in Indonesia."
      sections={[
        { title: "KITAS (Kartu Izin Tinggal Terbatas)", content: "The primary residency permit for foreigners working, investing, or residing long-term in Indonesia." },
        { title: "ITAS (Izin Tinggal Terbatas)", content: "The status of limited stay, while KITAS refers to the card (physical or digital) representing that status." },
        { title: "WNA (Warga Negara Asing)", content: "The Indonesian term for a foreign citizen." },
        { title: "WNI (Warga Negara Indonesia)", content: "The Indonesian term for an Indonesian citizen." },
        { title: "NIB (Nomor Induk Berusaha)", content: "Business Identification Number for companies, essential for sponsoring a KITAS." },
        { title: "OSS (Online Single Submission)", content: "The electronic system used for business licensing and visa sponsorship applications." },
        { title: "BKPM (Board of Investment)", content: "The agency that regulates foreign investment and approves investor KITAS categories." },
        { title: "KUA (Kantor Urusan Agama)", content: "The Religious Affairs Office, relevant for marriage KITAS for Muslims." },
        { title: "Catatan Sipil", content: "The Civil Registry Office where foreigners report their domicile and marriage." },
        { title: "SKTT (Surat Keterangan Tempat Tinggal)", content: "A domicile registration certificate required for all KITAS holders." },
        { title: "KTP-OA (Kartu Tanda Penduduk Orang Asing)", content: "Identity card for foreigners holding permanent residence (KITAP)." },
        { title: "NPWP (Nomor Pokok Wajib Pajak)", content: "Indonesian Tax ID, which some KITAS holders are required to obtain." },
        { title: "RPTKA (Rencana Penggunaan Tenaga Kerja Asing)", content: "A foreign worker utilization plan required for work permits." },
        { title: "NOTIFIKASI (Work Permit)", content: "The final work authorization approval before the visa stage." },
        { title: "DKP-TKA (Skill Development Fund)", content: "A mandatory $1,200 annual fee paid by employers for hiring foreign workers." }
      ]}
    />
  );
}
