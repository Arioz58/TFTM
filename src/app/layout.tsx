import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TFTM - T'as faim ? Tu manges! Snack à Strasbourg | Burgers, Tacos, Sandwichs, Hot Dogs",
  description: "TFTM (T'as Faim Tu Manges) vous propose des burgers, tacos, sandwichs et hot dogs à Strasbourg. Commandez en livraison via Uber Eats.",
  metadataBase: new URL("https://www.tftm67.fr"),
  openGraph: {
    title: "TFTM - Snack à Strasbourg | Burgers, Tacos, Sandwichs, Hot Dogs",
    description: "TFTM (T'as Faim Tu Manges) vous propose des burgers, tacos, sandwichs et hot dogs à Strasbourg. Commandez en livraison via Uber Eats.",
    url: "https://www.tftm67.fr",
    siteName: "TFTM Strasbourg",
    images: [
      {
        url: "/images/tftm-logo.jpg",
        width: 800,
        height: 600,
        alt: "TFTM Strasbourg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tftm",
    creator: "@tftm",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
