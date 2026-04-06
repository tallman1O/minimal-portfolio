import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/providers/provider";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mehul's Portfolio",
  description: "Mehul's Portfolio",
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
