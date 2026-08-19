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
      <body className=" ">
        <header className="flex justify-between px-8 py-2 fixed w-full">
          <h1 className="font-bold">
            <Link href="#">
              <span className="text-primary-font">Fabio</span> Coutinho
            </Link>
          </h1>
          <NavBar />
          <Button>
            <MoonIcon />
          </Button>
        </header>
        <main className="px-8 h-dvh">{children}</main>
      </body>
    </html>
  );
}
