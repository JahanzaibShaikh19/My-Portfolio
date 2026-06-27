import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./smooth-fixes.css";
import "./work-detail.css";
import "./contact-vibe.css";
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
const googleSiteVerification = "Oww6IMISsOFq3gZJzV8SzxpZoyQmiVb8iPbHBbHCaf8";

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
  abstract: siteConfig.shortDescription,
  category: "technology",
  classification: "Full Stack Engineering, SaaS Development, AI Automation, Product Engineering",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: googleSiteVerification,
  },
  icons: {
    icon: faviconImage,
    shortcut: faviconImage,
    apple: faviconImage,
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
        alt: "Jahanzaib Shaikh — Full Stack Engineer and AI Automation Developer",
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
  other: {
    "ai-summary": siteConfig.shortDescription,
    "expertise": siteConfig.expertise.join(", "),
    "service-area": siteConfig.serviceArea,
    "profile:username": "JahanzaibShaikh19",
  },
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
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.legalName,
      alternateName: ["Jahanzaib", "Jahanzaib Shaikh", "JahanzaibShaikh19"],
      url: siteConfig.url,
      image: `${siteConfig.url}/images/Profile.png`,
      jobTitle: ["Full Stack Engineer", "AI Automation Developer", "SaaS Developer"],
      email: siteConfig.email,
      knowsLanguage: siteConfig.languages,
      knowsAbout: siteConfig.expertise,
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
        siteConfig.links.twitter,
        siteConfig.links.upwork,
      ],
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      name: "Jahanzaib Shaikh Full Stack Engineering Services",
      url: siteConfig.url,
      description: siteConfig.description,
      areaServed: siteConfig.serviceArea,
      serviceType: siteConfig.services.map((service) => service.name),
      knowsAbout: siteConfig.expertise,
    },
    {
      "@type": "FAQPage",
      mainEntity: siteConfig.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "ItemList",
      name: "Featured projects by Jahanzaib Shaikh",
      itemListElement: siteConfig.featuredProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/work/${project.slug}`,
        name: project.name,
        description: project.description,
      })),
    },
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
        <meta name="google-site-verification" content={googleSiteVerification} />
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
