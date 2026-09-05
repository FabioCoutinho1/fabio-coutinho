"use client";

import CardProject from "@/components/cardProject/CardProject";
import ProjectDialog from "@/components/Dialog/ProjectDialog";
import { projects } from "@/app/data/proejcs";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const sectionProjectsRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".card-gsap", {
        x: -10000,
        opacity: 0,
        duration: 0.6,
        stagger: {
          each: 0.1,
        },
      });
    },
    { scope: sectionProjectsRef },
  );

  return (
    <section
      ref={sectionProjectsRef}
      className="section-gsap min-h-[calc(100vh-4rem)] flex flex-col items-center gap-10 overflow-hidden bg-background py-16 text-white sm:py-24"
    >
      <h1 className="text-3xl font-bold tracking-tight text-primary-font sm:text-4xl">
        Todos os meus projetos
      </h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">
        {projects.map((project, index) => (
          <ProjectDialog
            key={index}
            image={project.images}
            description={project.description}
            nameProject={project.nameProject}
            stacks={project.stacks}
            gitHubUrl={project.gitHubUrl}
            projectUrl={project.projectUrl}
          >
            <CardProject
              className="card-gsap"
              stacks={project.stacks}
              title={project.nameProject}
              image={project.images[0]}
            />
          </ProjectDialog>
        ))}
      </div>
    </section>
  );
}
