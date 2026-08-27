import "./globals.css";
import { Geist } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import ThemeProvider from "@/components/theme-provaider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
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
              <h1 className="text-xl font-bold tracking-tight">
                <Link href="#">
                  <span className="text-primary-font">Fabio</span> Coutinho
                </Link>
              </h1>
              <NavBar />
              <ThemeToggle />
            </div>
          </header>
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
