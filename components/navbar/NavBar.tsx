import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="hidden text-foreground md:block">
      <ul className="flex items-center gap-7 text-sm">
        <li>
          <Link className="transition-colors hover:text-primary-font" href="#hero">Início</Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-primary-font" href="#about">Sobre</Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-primary-font" href="#stacks">Habilidades</Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-primary-font" href="#projects">Projetos</Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-primary-font" href="#contact">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
}
