import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { floristJsonLd } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = "LaFloraDelPatron | Fleuriste de Luxe · Mariage Casablanca";
const ogTitle = "LaFloraDelPatron — Fleuriste de Luxe à Casablanca";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE.domain),
    title,
    description: SITE.description,
    keywords: [
      "fleuriste Casablanca",
      "fleuriste de luxe",
      "décoration florale mariage",
      "design floral",
      "bouquets sur mesure",
      "sculpture florale",
      "livraison de fleurs Casablanca",
      "fleuriste mariage Casablanca",
      "décoration mariage Casablanca",
    ],
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      alternateLocale: "en_US",
      url: SITE.domain,
      siteName: SITE.name,
      title: ogTitle,
      description: SITE.description,
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: SITE.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: SITE.description,
      images: [SITE.ogImage],
    },
    category: "flowers",
    other: {
      "geo.region": "MA-CAS",
      "geo.placename": "Casablanca",
      "geo.position": "33.5731;-7.5898",
      ICBM: "33.5731, -7.5898",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="bg-canvas text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(floristJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
