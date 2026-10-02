import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "./globals.css";
import { profile } from "@/data/portfolio";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description = `${profile.name} — ${profile.role}, ${profile.specialization}. ${profile.availability}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — Data Science & AI`, template: `%s — ${profile.name}` },
  description,
  keywords: ["AI", "Data Science", "Machine Learning", "Data Engineering", "PFE", "EMSI", "Casablanca", profile.name],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} — Data Science & AI`,
    description,
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    images: [{ url: profile.photo, width: 605, height: 807, alt: profile.name }],
  },
  twitter: { card: "summary", title: `${profile.name} — Data Science & AI`, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#111014" },
  ],
};

// Applies the saved theme before paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
