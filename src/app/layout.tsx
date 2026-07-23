import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/tokens.css";
import "./globals.css";
import { GlobalHeader } from "@/components/shell/GlobalHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { GlobalSearch } from "@/components/shell/GlobalSearch";
import { ScrollContainer } from "@/components/shell/ScrollContainer";
import { AudioContext } from "@/components/ui/AudioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The MCU Chronicle",
  description: "An independent fan-made interactive guide to the Marvel Cinematic Universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">

        <AudioContext />
        <ScrollContainer>
          <GlobalHeader />
          <GlobalSearch />
          <main className="flex-1 flex flex-col pt-[var(--header-height)]">
            {children}
          </main>
          <SiteFooter />
        </ScrollContainer>
      </body>
    </html>
  );
}

