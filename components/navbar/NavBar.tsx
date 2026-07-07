import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="text-white">
      <ul className="flex gap-3.5">
        <li>
          <Link href="#hero">Home</Link>
        </li>
        <li>
          <Link href="#about">Sobre mim</Link>
        </li>
        <li>
          <Link href="#stacks">Habilidades</Link>
        </li>
        <li>
          <Link href="#projects">Projetos</Link>
        </li>
        <li>
          <Link href="#contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
