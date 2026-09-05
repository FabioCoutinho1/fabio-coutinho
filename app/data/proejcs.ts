export interface Project {
  nameProject: string;
  description: string;
  images: string[];
  imageMiniCard: string;
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
      "/projects/todo-with-java/tela-login-desk.png",
      "/projects/todo-with-java/home-desk.png",
      "/projects/todo-with-java/tela-login-mobile.png",
      "/projects/todo-with-java/menu-direto-desk.png",
      "/projects/todo-with-java/home-mobile.png",
      "/projects/todo-with-java/menu-esquerdo-mobile.png",
      "/projects/todo-with-java/menu-esquerdo-desk.png",
      "/projects/todo-with-java/tela-cadastro-desk.png",
      "/projects/todo-with-java/menu-direto-mobile.png",
    ],

    imageMiniCard: "/projects/todo-with-java/tela-login-desk.png",

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
  //Sergundo Projeto
];
