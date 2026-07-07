import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import "./globals.css";
import Link from "next/link";
import Section from "@/components/section/Section";

import imgSection1 from "@/app/assets/section1.png";
import imgSection2 from "@/app/assets/section2.png";
import imgSection3 from "@/app/assets/section3.png";
import imgSection4 from "@/app/assets/section4.png";
import imgSection5 from "@/app/assets/section5.png";

export default function Home() {
  return (
    <>
      <Section id="hero" imageSrc={imgSection1} imageAlt="isso e uma imagem">
        <div>
          <p>Olá, eu sou</p>
          <h1 className="font-bold">Fabio Coutinho</h1>
          <p>Desenvolvedor Full Stak</p>
          <p>Java • Spring • React </p>
          <div className="flex gap-3.5">
            <Link href="#projects">
              <Button>Ver Projetos</Button>
            </Link>
            <Link href="#about">
              <Button variant={"outline"}>
                Sobre mim <ArrowDown />{" "}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      <Section id="about" imageSrc={imgSection2} imageAlt="isso e uma imagem">
        <h1>About</h1>
      </Section>
      <Section id="stacks" imageSrc={imgSection3} imageAlt="isso e uma imagem">
        <h1>Stacks</h1>
      </Section>
      <Section
        id="projects"
        imageSrc={imgSection4}
        imageAlt="isso e uma imagem"
      >
        <h1>Projects</h1>
      </Section>
      <Section id="contact" imageSrc={imgSection5} imageAlt="isso e uma imagem">
        <h1>Contacts</h1>
      </Section>
    </>
  );
}
