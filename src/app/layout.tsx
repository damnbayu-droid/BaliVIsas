import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bali Visas Agency - Official VOA Bali & Indonesian Visas",
  description: "Bali Visas Agency - The official support for voabali.com and your trusted Indonesian Visas partner. Fast VOA (Visa On Arrival), extensions, and business visas for 97 countries.",
  keywords: ["Bali Visas Agency", "VOA Bali", "voabali.com", "Visa on Arrival Bali", "Indonesian Visas", "Bali Visa", "Indonesia Visa", "Bali Entry Requirements", "B213 Visa"],
  authors: [{ name: "Bali Visas Agency by Indonesian Visas ®" }],
  metadataBase: new URL("https://balivisas.agency"),
  alternates: {
    canonical: "https://balivisas.agency",
  },
  openGraph: {
    title: "Bali Visas Agency - Official VOA Bali & Indonesian Visas services",
    description: "Operated by PT Indonesian Visas Agency. The trusted source for Visa On Arrival (voabali.com) and all Indonesian Visa services.",
    url: "https://balivisas.agency",
    siteName: "Bali Visas Agency",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Visas Agency - Official VOA Bali Support",
    description: "Fast, reliable VOA and Visa services operated by PT Indonesian Visas Agency.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased h-full w-full bg-slate-50`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
