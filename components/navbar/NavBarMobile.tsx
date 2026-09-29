"use client";

import { CodeXml, ContactRound, Folder, Home, Menu, User } from "lucide-react";

import { Button } from "../ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Separator } from "../ui/separator";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import Image from "next/image";

import githubligth from "@/app/assets/svg/githubLigth.svg";
import githubDark from "@/app/assets/svg/githubDark.svg";

import linkedIn from "@/app/assets/svg/linkedin.svg";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function NavBarMobile() {
  const pathname = usePathname();

  function handleScroll(to: string): void {
    ScrollSmoother.get()?.scrollTo(to, true);
  }

  function handleScrollPath(
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string,
  ): void {
    if (pathname === "/") {
      e.preventDefault();
      handleScroll(section);
    }
  }

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost">
            <Menu />
          </Button>
        }
      />
      <SheetContent>
        <SheetHeader>
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="/img/avatar.png" />
              <AvatarFallback>FC</AvatarFallback>
              <AvatarBadge className="bg-green-500" />
            </Avatar>
            <div className="flex flex-col">
              <SheetTitle>Fabio Coutinho</SheetTitle>
              <SheetDescription>Engenheiro de software</SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col gap-4 px-4">
          <nav>
            <ul className="flex flex-col gap-6">
              <SheetClose>
                <li>
                  <Link
                    className="transition-colors hover:text-primary-font flex gap-3 items-center"
                    href="#hero"
                    onClick={(e) => {
                      handleScrollPath(e, "#hero");
                    }}
                  >
                    <Home />
                    Início
                  </Link>
                </li>
              </SheetClose>
              <SheetClose>
                <li>
                  <Link
                    className="transition-colors hover:text-primary-font flex gap-3 items-center"
                    href="#about"
                    onClick={(e) => {
                      handleScrollPath(e, "#about");
                    }}
                  >
                    <User />
                    Sobre
                  </Link>
                </li>
              </SheetClose>
              <SheetClose>
                <li>
                  <Link
                    className="transition-colors hover:text-primary-font flex gap-3 items-center"
                    href="#stacks"
                    onClick={(e) => {
                      handleScrollPath(e, "#stacks");
                    }}
                  >
                    <CodeXml />
                    Habilidades
                  </Link>
                </li>
              </SheetClose>
              <SheetClose>
                <li>
                  <Link
                    className="transition-colors hover:text-primary-font flex gap-3 items-center"
                    href="#projects"
                    onClick={(e) => {
                      handleScrollPath(e, "#projects");
                    }}
                  >
                    <Folder />
                    Projetos
                  </Link>
                </li>
              </SheetClose>
              <SheetClose>
                <li>
                  <Link
                    className="transition-colors hover:text-primary-font flex gap-3 items-center"
                    href="#contact"
                    onClick={(e) => {
                      handleScrollPath(e, "#contact");
                    }}
                  >
                    <ContactRound />
                    Contatos
                  </Link>
                </li>
              </SheetClose>
            </ul>
          </nav>
          <Separator />
          <div className="flex justify-between">
            <h2>Tema</h2>
            <ThemeToggle />
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <h2>Siga-me</h2>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link href="https://github.com/FabioCoutinho1">
                    <Image
                      src={githubDark}
                      alt="GitHub logo"
                      className="size-10 rounded-lg border border-border bg-surface p-2 transition-transform hover:-translate-y-1 sm:size-19.5 hidden dark:block"
                      aria-label="Ir para o GitHub de Fabio Coutinho"
                    />
                    <Image
                      src={githubligth}
                      alt="GitHub logo"
                      className="size-10 rounded-lg border border-border bg-surface p-2 transition-transform hover:-translate-y-1 sm:size-19.5 dark:hidden"
                      aria-label="Ir para o GitHub de Fabio Coutinho"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/fabio-coutinho-/"
                    aria-label="Ir para o LinkedIn de Fabio Coutinho"
                  >
                    <Image
                      src={linkedIn}
                      alt="LinkedIn logo"
                      className="size-10 rounded-lg border border-border bg-surface p-2 transition-transform hover:-translate-y-1 sm:size-19.5"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
