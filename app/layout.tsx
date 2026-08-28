import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Edecode",
    default: "Edecode — AI Systems & Custom Software",
  },
  description:
    "Edecode builds AI systems and custom software for startups, growing businesses, and enterprise teams — from first conversation to production.",
  openGraph: {
    title: "Edecode — AI Systems & Custom Software",
    description:
      "Edecode builds AI systems and custom software for startups, growing businesses, and enterprise teams — from first conversation to production.",
    type: "website",
    siteName: "Edecode",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edecode — AI Systems & Custom Software",
  },
  robots: "index, follow",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const themeScript = `(function(){try{var root=document.documentElement;var stored=localStorage.getItem("theme");var systemLight=window.matchMedia("(prefers-color-scheme: light)").matches;var theme=stored?stored:(systemLight?"light":"dark");root.setAttribute("data-theme",theme);}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 bg-blue text-btn-text px-4 py-2 rounded-md text-sm font-medium"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
