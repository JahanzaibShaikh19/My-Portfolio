import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./smooth-fixes.css";
import "./work-detail.css";
import Preloader from "@/components/Preloader";
import AmbientBackground from "@/components/AmbientBackground";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig } from "@/config/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const socialImage = "/images/Profile.png";
const faviconImage = "/icon";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: "%s | Jahanzaib Shaikh",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  icons: {
    icon: faviconImage,
    shortcut: faviconImage,
    apple: faviconImage,
  },
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 1200,
        alt: "Jahanzaib Shaikh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@jahanzaib699",
    images: [socialImage],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jahanzaib Shaikh",
  url: siteConfig.url,
  jobTitle: "Full Stack Engineer and AI Automation Developer",
  email: siteConfig.email,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
    siteConfig.links.upwork,
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "SaaS Development",
    "AI Automation",
    "Mobile Apps",
    "Dashboard Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  if (!theme) {
                    theme = 'dark';
                    localStorage.setItem('portfolio-theme', theme);
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-accent selection:text-black">
        <Preloader />
        <AmbientBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
