import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://laktab.dev";
const title = "Noureddine Laktab | Full-Stack Web Developer – React & Laravel";
const description =
  "I'm Noureddine Laktab, a Full-Stack Web Developer from Morocco specializing in React and Laravel. I build clean, scalable, and performance-focused web applications. View my portfolio and projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Noureddine Laktab",
    "Full Stack Developer",
    "React Developer",
    "Laravel Developer",
    "Web Developer Morocco",
    "PHP Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Casablanca Developer",
  ],
  authors: [{ name: "Noureddine Laktab", url: siteUrl }],
  creator: "Noureddine Laktab",
  alternates: {
    canonical: siteUrl,
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
  icons: {
    icon: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description:
      "Full-Stack Web Developer from Morocco specializing in React & Laravel. Building clean, scalable web applications. View my portfolio, projects, and skills.",
    siteName: "Noureddine Laktab Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/dark_center_profile.webp",
        width: 1200,
        height: 630,
        alt: "Noureddine Laktab - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Full-Stack Web Developer from Morocco specializing in React & Laravel. Building clean, scalable web applications.",
    images: ["/dark_center_profile.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noureddine Laktab",
  jobTitle: "Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer specializing in React and Laravel, building clean, scalable, and performance-focused web applications.",
  url: siteUrl,
  image: `${siteUrl}/dark_center_profile.webp`,
  email: "noureddine.laktab15@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "Morocco",
  },
  sameAs: [
    "https://github.com/Laktab-Noureddine-code",
    "https://linkedin.com/in/noureddine-laktab",
  ],
  knowsAbout: [
    "React",
    "Laravel",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Full-Stack Development",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
