import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", style: ['normal', 'italic'] });

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Selvamani M | Aspiring Software Engineer",
  description:
    "Portfolio of Selvamani M, a B.E. Computer Science Engineering student and aspiring Software Engineer focused on backend development, full-stack applications, APIs, databases, and AI/ML.",
  keywords: [
    "Selvamani M",
    "Software Engineer",
    "Computer Science Engineering",
    "V.S.B. Engineering College",
    "Java",
    "Python",
    "FastAPI",
    "MongoDB",
    "Machine Learning",
    "GLOF Sentinel",
    "Vehicle Telemetry",
  ],
  authors: [{ name: "Selvamani M" }],
  creator: "Selvamani M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://selvamani.dev",
    title: "Selvamani M | Aspiring Software Engineer",
    description:
      "Portfolio of Selvamani M, a B.E. Computer Science Engineering student and aspiring Software Engineer focused on backend development, full-stack applications, APIs, databases, and AI/ML.",
    siteName: "Selvamani M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selvamani M | Aspiring Software Engineer",
    description:
      "Portfolio of Selvamani M, a B.E. Computer Science Engineering student and aspiring Software Engineer focused on backend development, full-stack applications, APIs, databases, and AI/ML.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable} ${playfair.variable} font-sans bg-[#050505] text-[#f5f5f5] min-h-screen antialiased selection:bg-teal-500/30 selection:text-teal-200`}>
        {children}
      </body>
    </html>
  );
}
