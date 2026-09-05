import "./globals.css";
import { Geist } from "next/font/google";
import type { Metadata } from "next";
import NavBar from "@/components/navbar/NavBar";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import ThemeProvider from "@/components/theme-provaider";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Fabio Coutinho",
      jobTitle: "Desenvolvedor Full Stack",
      url: siteUrl,
      sameAs: [
        "https://github.com/FabioCoutinho1",
        "https://www.linkedin.com/in/fabio-coutinho-/",
      ],
    },
    {
      "@type": "WebSite",
      name: "Fabio Coutinho",
      url: siteUrl,
      inLanguage: "pt-BR",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fabio Coutinho | Desenvolvedor Full Stack",
    template: "%s | Fabio Coutinho",
  },
  description:
    "Portfólio de Fabio Coutinho, desenvolvedor Full Stack especializado em Java, Spring, React, Next.js e Node.js.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Fabio Coutinho",
    title: "Fabio Coutinho | Desenvolvedor Full Stack",
    description:
      "Conheça o trabalho e os projetos de Fabio Coutinho, desenvolvedor Full Stack.",
  },
  twitter: {
    card: "summary",
    title: "Fabio Coutinho | Desenvolvedor Full Stack",
    description:
      "Conheça o trabalho e os projetos de Fabio Coutinho, desenvolvedor Full Stack.",
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
    <html
      suppressHydrationWarning
      lang="pt-BR"
      className={`font-sans ${geist.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-header/85 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
              <div className="text-xl font-bold tracking-tight">
                <Link
                  href="/"
                  aria-label="Ir para a página inicial de Fabio Coutinho"
                >
                  <span className="text-primary-font">Fabio</span> Coutinho
                </Link>
              </div>
              <NavBar />
              <ThemeToggle />
            </div>
          </header>
          <main className="pt-16">
            <TooltipProvider>{children}</TooltipProvider>
          </main>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
