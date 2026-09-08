import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  themeColor: "#f7f2ea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://ajax.googleapis.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
