export interface Project {
  nameProject: string;
  description: string;
  images: string[];
  stacks: string[];
  gitHubUrl: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    nameProject: "Gerenciador de Tarefas — Full Stack",

    description: `
## Gerenciador de Tarefas — Full Stack

Aplicação web full-stack desenvolvida para gerenciamento de tarefas, permitindo que usuários criem e organizem suas atividades de forma simples e segura.

### Frontend

A interface foi desenvolvida com **React**, utilizando **React Router** para gerenciamento das rotas e **Context API** para centralizar o estado compartilhado da aplicação.

### Backend

O backend foi desenvolvido em **Java com Spring Boot**, disponibilizando uma API REST responsável pelo gerenciamento de usuários e tarefas.

A aplicação utiliza **Spring Data JPA**, **PostgreSQL** e **Flyway**.

### Infraestrutura

O backend possui configuração com **Docker e Docker Compose**.

O frontend é preparado para deploy na **Vercel**.
`,

    images: [
      "https://placehold.co/1920x1000/2F2E88/FFF",
      "https://placehold.co/1920x1000/3D3E46/FFF",
      "https://placehold.co/1920x1000/5F5E11/FFF",
    ],

    stacks: [
      "React",
      "JavaScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "PostgreSQL",
      "Flyway",
      "Maven",
      "Docker",
      "Docker Compose",
      "OpenAPI",
      "Swagger",
    ],

    gitHubUrl:
      "https://github.com/FabioCoutinho1/ToDo-Advanced-with-Spring-Boot",
    projectUrl: "https://geranciador-de-tarefas.vercel.app/login",
  },

  {
    nameProject: "Meu Segundo Projeto",

    description: `
## Meu Segundo Projeto

Descrição do segundo projeto...
`,

    images: [
      "https://placehold.co/1920x1000/222/FFF",
      "https://placehold.co/1920x1000/444/FFF",
    ],

    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],

    gitHubUrl: "#",
    projectUrl: "#",
  },
];
