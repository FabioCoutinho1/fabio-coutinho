"use client";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
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
              handleScrollPath(e, "#hero");
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
              handleScrollPath(e, "#about");
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
              handleScrollPath(e, "#stacks");
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
              handleScrollPath(e, "#projects");
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
              handleScrollPath(e, "#contact");
            }}
          >
            Contatos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
