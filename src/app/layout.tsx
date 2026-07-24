import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/shell/SiteHeader";
import { LenisProvider } from "@/components/shell/LenisProvider";
import { siteUrl } from "@/lib/site";

/* ── Fonts (§7) ── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth", "GRAD"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ── Metadata (§5A, §63) ── */
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "THE MCU EXPERIENCE — Full Story Archive",
    template: "%s | THE MCU EXPERIENCE",
  },
  description:
    "Every MCU film changes the story. See what each decision costs, which consequences matter, and find the right order for your journey.",
  applicationName: "The MCU Experience",
  authors: [{ name: "The MCU Experience" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "THE MCU EXPERIENCE",
    description: "Watch order and consequence for every MCU film.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${robotoFlex.variable}`}
    >
      <body>
        <LenisProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <div className="site-shell">
            <SiteHeader />
            <main id="main-content" className="site-main">
              {children}
            </main>
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
