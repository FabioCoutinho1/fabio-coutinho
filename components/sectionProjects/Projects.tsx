"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import Section from "../section/Section";
import Title from "../typography/Title";
import ProjectDialog from "../Dialog/ProjectDialog";
import CardProject from "../cardProject/CardProject";
import { useState } from "react";
import { projects } from "@/app/data/proejcs";

import imgSection4 from "@/app/assets/img/section4.png";

export default function Projects() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const showAllProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <Section
      id="projects"
      imageSrc={imgSection4}
      imageAlt="Ilustração de projetos"
    >
      <Title text="Projetos em destaque" />

      <div className="flex flex-wrap gap-6 items-start">
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
