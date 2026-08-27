import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowRight,
  Calendar,
  FileUser,
  Mail,
  MapPin,
} from "lucide-react";
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
import svgTypeScript from "@/app/assets/svg.stacks/datilografado.svg";
import svgExpress from "@/app/assets/svg.stacks/expressar.svg";
import svgNext from "@/app/assets/svg.stacks/nextjs.svg";

import githubligth from "@/app/assets/svg/githubLigth.svg";
import githubDark from "@/app/assets/svg/githubDark.svg";

import linkedIn from "@/app/assets/svg/linkedin.svg";
import Stack from "@/components/stacks/Stacks";
import Title from "@/components/typography/Title";
import LocationAndDate from "@/components/locationAndDate/LocationAndDate";
import CardProject from "@/components/cardProject/CardProject";

export default function Home() {
  const mapStacks = [
    { id: 1, svg: svgJava, alt: "logo java" },
    { id: 2, svg: svgSpring, alt: "logo spring boot" },
    { id: 3, svg: svgPostgres, alt: "logo postgresSql" },
    { id: 4, svg: svgRedis, alt: "logo redis" },
    { id: 5, svg: svgDocker, alt: "logo docker" },
    { id: 6, svg: svgReact, alt: "logo java" },
    { id: 7, svg: svgNode, alt: "logo node" },
    { id: 8, svg: svgTypeScript, alt: "Logo TypeScript" },
    { id: 9, svg: svgExpress, alt: "Logo Express", invertInDarkMode: true },
    { id: 10, svg: svgNext, alt: "Logo Next", invertInDarkMode: true },
  ];

  return (
    <>
      <Section
        id="hero"
        imageSrc={imgSection1}
        imageAlt="Ilustração de Fabio Coutinho"
      >
        <div className="space-y-1">
          <p className="text-3xl sm:text-4xl">Olá, eu sou</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Fabio Coutinho
          </h1>
          <p className="text-2xl text-primary-font sm:text-3xl">
            Desenvolvedor Full Stack
          </p>
          <p className="pt-1 text-lg">
            Java • Spring • React/Next • TypeScrip • Node.js • PostgreSql
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="#projects">
            <Button className="rounded-2xl px-4 text-base">Ver projetos</Button>
          </Link>
          <Link href="#about">
            <Button variant="outline" className="rounded-2xl px-4 text-base">
              Sobre mim <ArrowDown className="size-5" />
            </Button>
          </Link>
        </div>
      </Section>
      <Section
        id="about"
        imageSrc={imgSection2}
        imageAlt="Ilustração de apresentação"
      >
        <div className="max-w-md space-y-4">
          <Title text="Sobre mim" />
          <p>
            Sou desenvolvedor Full Stack apaixonado por criar soluções
            eficientes e experiências incriveis. <br />
            <br />
            Atualmente focado em construir aplicações escaláveis com tecnologias
            modernas.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <LocationAndDate text="Brasil" icon={MapPin} />
            <LocationAndDate text="23 anos" icon={Calendar} />
          </div>
        </div>
      </Section>
      <Section
        id="stacks"
        imageSrc={imgSection3}
        imageAlt="Ilustração de habilidades"
      >
        <Title text="Minhas habilidades" />
        <div className="flex flex-wrap gap-3.5">
          {mapStacks.map((e) => (
            <Stack
              key={e.id}
              svg={e.svg}
              alt={e.alt}
              invertInDarkMode={e.invertInDarkMode}
            />
          ))}
        </div>
      </Section>
      <Section
        id="projects"
        imageSrc={imgSection4}
        imageAlt="Ilustração de projetos"
      >
        <Title text="Projetos em destaque" />

        <div className="flex flex-wrap gap-6">
          <CardProject title="GitHub Finder" />
          <CardProject title="Gerenciador de Tarefas" />
        </div>

        <a
          className="flex items-center gap-2 text-lg text-primary-font transition-colors hover:text-foreground"
          href="#projects"
        >
          Ver todos os projetos
          <ArrowRight size={18} />
        </a>
      </Section>
      <Section
        id="contact"
        imageSrc={imgSection5}
        imageAlt="Ilustração de contato"
      >
        <Title text={"Vamos conversar"} />

        <p>
          Estou sempre aberto a novas oportunidades e projetos interessantes.
        </p>

        <div>
          <ul className="flex flex-wrap gap-5">
            <li>
              <a
                href="mailto:fabiocoutinho5499@gmail.com"
                aria-label="Enviar e-mail para Fábio Coutinho"
              >
                <Mail className="size-10 rounded-lg border border-border bg-surface p-2 text-primary-font transition-transform hover:-translate-y-1 sm:size-[78px]" />
              </a>
            </li>
            <li>
              <a
                href="/curriculo.pdf"
                download="meu-curriculo.pdf"
                aria-label="Baixar currículo"
              >
                <FileUser className="size-10 rounded-lg border border-border bg-surface p-2 text-primary-font transition-transform hover:-translate-y-1 sm:size-[78px]" />
              </a>
            </li>
            <li>
              <Link href="https://github.com/FabioCoutinho1">
                <Image
                  src={githubDark}
                  alt="GitHub logo"
                  className="size-10 rounded-lg border border-border bg-surface p-2 transition-transform hover:-translate-y-1 sm:size-[78px] hidden dark:block"
                  aria-label="Ir para o GitHub de Fabio Coutinho"
                />
                <Image
                  src={githubligth}
                  alt="GitHub logo"
                  className="size-10 rounded-lg border border-border bg-surface p-2 transition-transform hover:-translate-y-1 sm:size-[78px] dark:hidden"
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
                  className="size-10 rounded-lg border border-border bg-surface p-2 transition-transform hover:-translate-y-1 sm:size-[78px]"
                />
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
