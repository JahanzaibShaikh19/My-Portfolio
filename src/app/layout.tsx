import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jahanzaib — Full Stack Engineer",
  description:
    "Full Stack Engineer and co-founder of HyperLogic Studio. I build web platforms, AI tools, and automation systems.",
  openGraph: {
    title: "Jahanzaib — Full Stack Engineer",
    description:
      "Full Stack Engineer and co-founder of HyperLogic Studio. I build web platforms, AI tools, and automation systems.",
    type: "website",
  },
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
      </head>
      <body>
        <Preloader />
        <main>{children}</main>
      </body>
    </html>
  );
}
