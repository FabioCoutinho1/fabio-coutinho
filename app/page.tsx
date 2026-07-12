import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar, FileUser, Mail, MapPin } from "lucide-react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

import Section from "@/components/section/Section";

import imgSection1 from "@/app/assets/img/section1.png";
import imgSection2 from "@/app/assets/img/section2.png";
import imgSection3 from "@/app/assets/img/section3.png";
import imgSection4 from "@/app/assets/img/section4.png";
import imgSection5 from "@/app/assets/img/section5.png";

import svgJava from "@/app/assets/svg.stacks/icons-java.svg";
import svgSpring from "@/app/assets/svg.stacks/icons-spring-boot.svg";
import svgPostgres from "@/app/assets/svg.stacks/icons-postgresql.svg";
import svgRedis from "@/app/assets/svg.stacks/icons-redis.svg";
import svgDocker from "@/app/assets/svg.stacks/icons-docker.svg";
import svgReact from "@/app/assets/svg.stacks/icons-react.svg";
import svgNode from "@/app/assets/svg.stacks/icons-nodejs.svg";

import github from "@/app/assets/svg/github.svg";
import linkedIn from "@/app/assets/svg/linkedin.svg";
import Stack from "@/components/stacks/Stacks";
import Title from "@/components/typography/Title";
import LocationAndDate from "@/components/lactionAndDate/LocationAndDate";

export default function Home() {
  const mapStacks = [
    { id: 1, svg: svgJava, alt: "logo java" },
    { id: 2, svg: svgSpring, alt: "logo spring boot" },
    { id: 3, svg: svgPostgres, alt: "logo postgresSql" },
    { id: 4, svg: svgRedis, alt: "logo redis" },
    { id: 5, svg: svgDocker, alt: "logo docker" },
    { id: 6, svg: svgReact, alt: "logo java" },
    { id: 7, svg: svgNode, alt: "logo node" },
  ];

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
        <div className="flex flex-col w-2xs">
          <Title text="Sobre mim" />
          <p>
            Sou desenvolvedor Full Stack apaixonado por criar soluções
            eficientes e experiências incriveis. <br />
            <br />
            Atualmente focado em construir aplicações escaláveis com tecnologias
            modernas.
          </p>

          <div className="flex gap-3.5">
            <LocationAndDate text="Brasil" icon={MapPin} />
            <LocationAndDate text="23 anos" icon={Calendar} />
          </div>
        </div>
      </Section>
      <Section id="stacks" imageSrc={imgSection3} imageAlt="isso e uma imagem">
        <Title text="Minhas habilidades" />
        <div className="flex gap-4">
          {mapStacks.map((e) => (
            <Stack key={e.id} svg={e.svg} alt={e.alt} />
          ))}
        </div>
      </Section>
      <Section
        id="projects"
        imageSrc={imgSection4}
        imageAlt="isso e uma imagem"
      >
        <Title text="Projetos em destaque" />
      </Section>
      <Section id="contact" imageSrc={imgSection5} imageAlt="isso e uma imagem">
        <Title text={"Vamos conversar"} />

        <p>
          Estou sempre aberto a novas oportunidades e projetos interessantes.
        </p>

        <div>
          <ul className="flex gap-3.5">
            <li>
              <a
                href="mailto:fabiocoutinho5499@gmail.com"
                aria-label="Enviar e-mail para Fábio Coutinho"
              >
                <Mail size={48} />
              </a>
            </li>
            <li>
              <a
                href="/curriculo.pdf"
                download="meu-curriculo.pdf"
                aria-label="Baixar currículo"
              >
                <FileUser size={48} />
              </a>
            </li>
            <li>
              <Link href="https://github.com/FabioCoutinho1">
                <Image
                  src={github}
                  alt="GitHub logo"
                  className="w-12"
                  aria-label="Ir para o LinkedIn de Fabio Coutinho"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/fabio-coutinho-/"
                aria-label="Ir para o GitHub de Fabio Coutinho"
              >
                <Image src={linkedIn} alt="GitHub logo" className="w-12" />
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
