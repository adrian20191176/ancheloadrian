import type { Metadata, Viewport } from "next";
import { Anton, Caveat, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

// Big condensed headlines.
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

// Friendly, easy-to-read body copy.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

// Small labels, numbers and the clock.
const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

// A handful of hand-written notes.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  preload: false,
});

const TITLE = "Adrian Anchelo | Software Engineer";
const DESCRIPTION =
  "Adrian, a software engineer with four years of experience building for the web. Message me on WhatsApp to start a project.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffc83d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${dmSans.variable} ${dmMono.variable} ${caveat.variable}`}
    >
      <head>
        {/* model-viewer is an ES module, which is fetched in CORS mode. */}
        <link
          rel="preconnect"
          href="https://ajax.googleapis.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
