import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/providers/provider";
import { Analytics } from "@vercel/analytics/next";
import { USER } from "@/data/user";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/lib/url";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? USER.website;
const shareImagePath = "/images/mehul.png";

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${USER.displayName}'s Portfolio`,
      description: USER.bio.trim(),
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: USER.displayName,
      givenName: USER.firstName,
      familyName: USER.lastName,
      alternateName: [USER.username, ...USER.keywords],
      url: siteUrl,
      image: USER.avatar,
      email: USER.email,
      jobTitle: USER.jobTitle,
      description: USER.bio.trim(),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [GITHUB_URL, LINKEDIN_URL, X_URL],
      knowsAbout: [
        "UI Engineering",
        "Frontend Development",
        "Next.js",
        "TypeScript",
        "React",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mehul's Portfolio | Developer | Engineer",
    template: "%s | Mehul's Portfolio",
  },
  description:
    "Portfolio of Mehul showcasing projects, product work, and technical experience.",
  applicationName: "Mehul's Portfolio",
  keywords: [
    "Mehul",
    "Portfolio",
    "Software Engineer",
    "Frontend Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Web Development",
  ],
  authors: [{ name: "Mehul", url: siteUrl }],
  creator: "Mehul",
  publisher: "Mehul",
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "llms.txt" },
        { url: "/llms-full.txt", title: "llms-full.txt" },
      ],
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mehul's Portfolio | Developer | Engineer",
    description:
      "Explore Mehul's portfolio featuring selected projects, work experience, and testimonials.",
    siteName: "Mehul's Portfolio",
    locale: "en_US",
    images: [
      {
        url: shareImagePath,
        width: 1200,
        height: 630,
        alt: "Mehul's portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehul's Portfolio | Engineer",
    description:
      "Explore Mehul's portfolio featuring selected projects, work experience, and testimonials.",
    images: [shareImagePath],
  },
  icons: {
    icon: shareImagePath,
    shortcut: shareImagePath,
    apple: shareImagePath,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <Provider>{children}</Provider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
