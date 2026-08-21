import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar/NavBar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "lucide-react";

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
      className={cn("font-sans dark", geist.variable)}
    >
      <body>
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050712]/85 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <h1 className="text-xl font-bold tracking-tight">
            <Link href="#">
              <span className="text-primary-font">Fabio</span> Coutinho
            </Link>
          </h1>
          <NavBar />
          <Button variant="ghost" size="icon" aria-label="Alternar tema" className="text-white hover:bg-white/10 hover:text-white">
            <MoonIcon className="size-5" />
          </Button>
          </div>
        </header>
        {/* O header é fixo; este espaço reserva seus 4rem de altura. */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
