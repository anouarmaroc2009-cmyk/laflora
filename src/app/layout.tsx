import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { floristJsonLd, websiteJsonLd, faqJsonLd } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = `${SITE.legalName} | Fleuriste • Décorateur • Paysagiste | Hay Riad, Rabat`;
const ogTitle = `${SITE.legalName} | ${SITE.signature}`;

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE.domain),
    title,
    description: SITE.description,
    applicationName: SITE.name,
    keywords: [
      "fleuriste Rabat",
      "fleuriste de luxe Rabat",
      "fleuriste Hay Riad",
      "bouquet personnalisé",
      "boîte à fleurs Rabat",
      "coffret cadeau fleurs",
      "aménagement paysager Rabat",
      "décoration florale mariage Rabat",
      "fleuriste mariage Rabat",
      "paysagiste Rabat",
    ],
    authors: [{ name: SITE.legalName }],
    creator: SITE.legalName,
    alternates: {
      canonical: "/",
      types: {
        "application/rss+xml": "/feed.xml",
      },
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
      locale: "fr_MA",
      url: SITE.domain,
      siteName: SITE.legalName,
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
      "geo.region": "MA-RAZ",
      "geo.placename": "Hay Riad, Rabat",
      "geo.position": "34.0209;-6.8416",
      ICBM: "34.0209, -6.8416",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [floristJsonLd, websiteJsonLd, faqJsonLd];

  return (
    <html lang="fr" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="bg-void text-chalk antialiased">
        {jsonLd.map((node, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(node).replace(/</g, "\\u003c"),
            }}
          />
        ))}
        <div className="grain" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        {children}
        {/*
          Cookie-free, so no consent banner is required. Page views + Web Vitals
          here; the WhatsApp clicks that actually represent a conversion are
          fired from src/lib/analytics.ts.
        */}
        <Analytics />
      </body>
    </html>
  );
}