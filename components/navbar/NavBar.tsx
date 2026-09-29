"use client";

import handleScrollPath from "@/lib/scrollsmoothe";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="hidden text-foreground md:block"
    >
      <ul className="flex items-center gap-7 text-sm">
        <li>
          <Link
            className="transition-colors hover:text-primary-font"
            href="/#hero"
            onClick={(e) => {
              handleScrollPath(e, "#hero", pathname);
            }}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            className="transition-colors hover:text-primary-font"
            href="/#about"
            onClick={(e) => {
              handleScrollPath(e, "#about", pathname);
            }}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            className="transition-colors hover:text-primary-font"
            href="/#stacks"
            onClick={(e) => {
              handleScrollPath(e, "#stacks", pathname);
            }}
          >
            Habilidades
          </Link>
        </li>
        <li>
          <Link
            className="transition-colors hover:text-primary-font"
            href="/#projects"
            onClick={(e) => {
              handleScrollPath(e, "#projects", pathname);
            }}
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            className="transition-colors hover:text-primary-font"
            href="/#contact"
            onClick={(e) => {
              handleScrollPath(e, "#contact", pathname);
            }}
          >
            Contatos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
