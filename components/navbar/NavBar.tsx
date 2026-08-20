import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="hidden text-white md:block">
      <ul className="flex items-center gap-7 text-sm">
        <li>
          <Link className="transition-colors hover:text-[#725aef]" href="#hero">Início</Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-[#725aef]" href="#about">Sobre</Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-[#725aef]" href="#stacks">Habilidades</Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-[#725aef]" href="#projects">Projetos</Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-[#725aef]" href="#contact">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
}
