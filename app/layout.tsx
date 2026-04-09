import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/providers/provider";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehul.codes";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mehul's Portfolio | Engineer",
    template: "%s | Mehul's Portfolio",
  },
  description:
    "Portfolio of Mehul showcasing engineering projects, product work, and technical experience.",
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
  authors: [{ name: "Mehul" }],
  creator: "Mehul",
  publisher: "Mehul",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mehul's Portfolio | Engineer",
    description:
      "Explore Mehul's engineering portfolio featuring selected projects, work experience, and testimonials.",
    siteName: "Mehul's Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehul's Portfolio | Engineer",
    description:
      "Explore Mehul's engineering portfolio featuring selected projects, work experience, and testimonials.",
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
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
