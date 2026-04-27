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
  title: "Bali Visa Agency - Official E-VOA & Indonesian Visa Services",
  description: "Official Bali Division of PT Indonesian Visas Agency. Trusted support for E-VOA, extensions, Investor KITAS, and company formation. NIB: 0402260034806. Get your Bali Visa fast and 100% legal.",
  keywords: [
    "Bali Visa Agency", 
    "E-VOA Bali", 
    "Visa on Arrival Indonesia", 
    "Investor KITAS Bali", 
    "Bali Visa Extension", 
    "PT Indonesian Visas Agency", 
    "Indonesian Visa Agent", 
    "NIB 0402260034806", 
    "Bali Company Formation", 
    "PMA Registration Bali"
  ],
  authors: [{ name: "Bali Visa Agency by Indonesian Visas ®" }],
  metadataBase: new URL("https://www.balivisa.agency"),
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "ID-BA",
    "geo.placename": "Kuta, Bali",
    "geo.position": "-8.7233;115.1723",
    "ICBM": "-8.7233, 115.1723",
    "theme-color": "#1e293b",
  },
  openGraph: {
    title: "Bali Visa Agency - #1 Trusted Visa Partner in Bali",
    description: "Official Bali Division of PT Indonesian Visas Agency. Professional support for E-VOA, KITAS, and Stay Permits. 100% Legal & Verified.",
    url: "https://www.balivisa.agency",
    siteName: "Bali Visa Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bali Visa Agency - Professional Visa Services",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@balivisa",
    creator: "@balivisa",
    title: "Bali Visa Agency - Official VOA Bali Support",
    description: "Fast, reliable VOA and Visa services operated by PT Indonesian Visas Agency. 100% Verified.",
    images: ["/og-image.png"],
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
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/logo.webp", type: "image/webp" },
    ],
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
