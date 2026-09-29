"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

import Section from "../section/Section";
import Title from "../typography/Title";
import ProjectDialog from "../Dialog/ProjectDialog";
import CardProject from "../cardProject/CardProject";
import { projects } from "@/app/data/proejcs";

import imgSection4 from "@/app/assets/img/section4.png";

export default function Projects() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);

  const showAllProjects = showAll ? projects : projects.slice(0, 2);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".gsap-project-card");

      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 24, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "transform, opacity, visibility",
        },
      );
    },
    { dependencies: [showAll], scope: listRef },
  );

  return (
    <Section
      id="projects"
      imageSrc={imgSection4}
      imageAlt="Ilustração de projetos"
    >
      <Title text="Projetos em destaque" />

      <div ref={listRef} className="flex flex-wrap items-start gap-6">
        {showAllProjects.map((project) => (
          <ProjectDialog
            key={project.nameProject}
            image={project.images}
            description={project.description}
            nameProject={project.nameProject}
            stacks={project.stacks}
            gitHubUrl={project.gitHubUrl}
            projectUrl={project.projectUrl}
          >
            <CardProject
              className="gsap-project-card"
              image={project.images[0]}
              stacks={project.stacks}
              title={project.nameProject}
            />
          </ProjectDialog>
        ))}
      </div>

      {!showAll ? (
        <button
          className="flex items-center gap-2 text-lg text-primary-font transition-colors hover:text-foreground"
          aria-label="Ver todos os projetos de Fabio Coutinho"
          onClick={() => setShowAll(true)}
        >
          Ver todos os projetos
          <ArrowRight size={18} />
        </button>
      ) : (
        <button
          className="flex items-center gap-2 text-lg text-primary-font transition-colors hover:text-foreground"
          aria-label="Ver menos projetos de Fabio Coutinho"
          onClick={() => setShowAll(false)}
        >
          Ver menos
          <ArrowUp size={18} />
        </button>
      )}
    </Section>
  );
}
