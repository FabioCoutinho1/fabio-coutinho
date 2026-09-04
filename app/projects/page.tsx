import CardProject from "@/components/cardProject/CardProject";
import ProjectDialog from "@/components/Dialog/ProjectDialog";
import Title from "@/components/typography/Title";
import { projects } from "@/app/data/proejcs";

export default function Page() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center gap-10 overflow-hidden bg-background py-16 text-white sm:py-24">
      <Title text="Todos meus projetos" />

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
            <CardProject stacks={project.stacks} title={project.nameProject} />
          </ProjectDialog>
        ))}
      </div>
    </section>
  );
}
