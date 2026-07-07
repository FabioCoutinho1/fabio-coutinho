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
    <html lang="en" className={cn("font-sans dark", geist.variable)}>
      <body className="">
        <header className="flex justify-between px-64 py-2 fixed w-full">
          <h1 className="font-bold">
            <Link href="#">Fabio Coutinho</Link>
          </h1>
          <NavBar />
          <Button>
            <MoonIcon />
          </Button>
        </header>
        <main className="px-2.5 h-dvh w-dvw">{children}</main>
      </body>
    </html>
  );
}
