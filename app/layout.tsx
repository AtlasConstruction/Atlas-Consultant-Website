import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingActions } from "@/components/floating-actions";
import { OrganizationSchema } from "@/components/schema";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atlasconsultant.in"),
  title: {
    default: "Atlas Consultant | Structural Audit & Building Repair Consultants Mumbai",
    template: "%s | Atlas Consultant"
  },
  description:
    "Atlas Consultant is a specialist structural audit, building repair, waterproofing, redevelopment and PMC consultancy for housing societies across Mumbai Metropolitan Region.",
  openGraph: {
    title: "Atlas Consultant - Mumbai's Trusted Structural Audit & Building Repair Consultants",
    description:
      "Housing society specialists for structural audits, repair PMC, waterproofing, redevelopment and structural engineering across Mumbai, Thane and Navi Mumbai.",
    url: "https://atlasconsultant.in",
    siteName: "Atlas Consultant",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Consultant",
    description: "Structural audit and society building repair consultants across MMR."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={`${geist.variable} font-sans antialiased`}>
        <OrganizationSchema />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
