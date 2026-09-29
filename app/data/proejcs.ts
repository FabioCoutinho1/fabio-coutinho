export interface Project {
  nameProject: string;
  description: string;
  images: string[];
  imageMiniCard: string;
  stacks: string[];
  gitHubUrl: string;
  projectUrl?: string;
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
  //   {
  //     nameProject: "Mini Bank — Java MVC",

  //     description: `
  // ## Mini Bank — Java MVC

  // Aplicação de terminal desenvolvida em **Java** para simular operações bancárias básicas, com foco na prática de **Programação Orientada a Objetos** e do padrão arquitetural **MVC**.

  // ### Funcionalidades

  // O sistema permite criar e acessar contas **corrente ou poupança**, além de realizar operações como **depósito, saque e consulta de saldo**.

  // ### Arquitetura

  // O projeto utiliza o padrão **MVC**, separando as responsabilidades entre:

  // - **Model:** entidades e regras de negócio
  // - **Controller:** controle do fluxo da aplicação
  // - **View:** interação com o usuário pelo terminal

  // O projeto foi desenvolvido com **Java 21+**, sem frameworks, como forma de consolidar os fundamentos da linguagem e da arquitetura MVC.
  // `,

  //     images: [
  //       "/projects/todo-with-java/tela-login-desk.png",
  //       "/projects/todo-with-java/home-desk.png",
  //       "/projects/todo-with-java/tela-login-mobile.png",
  //     ],

  //     imageMiniCard: "",

  //     stacks: ["Java", "OOP", "MVC", "JDK 21"],

  //     gitHubUrl:
  //       "https://github.com/FabioCoutinho1/Mini-Bank-using-Java-with-MVC",
  //   },

  //   {
  //     nameProject: "Mini Server — REST API",

  //     description: `
  // ## Mini Server — REST API

  // API REST desenvolvida com **TypeScript e Node.js**, utilizando **Express** para construção do servidor e **PostgreSQL** para persistência dos dados.

  // O projeto foi desenvolvido com foco na prática de desenvolvimento backend, organização de código, autenticação e validação de dados.

  // ### Backend

  // A aplicação utiliza **Express** para criação do servidor e definição das rotas, com uma estrutura modular separando responsabilidades entre aplicação, rotas, módulos, bibliotecas e tipos.

  // ### Banco de dados

  // A persistência dos dados é realizada com **PostgreSQL**, utilizando **Prisma ORM** para modelagem e acesso ao banco de dados.

  // ### Segurança

  // O projeto utiliza **JWT** para autenticação, **bcrypt** para proteção de senhas e **Zod** para validação dos dados recebidos pela API.

  // ### Infraestrutura

  // O projeto possui configuração com **Docker e Docker Compose**, permitindo executar a aplicação e seus serviços de forma isolada e reproduzível.
  // `,

  //     images: [
  //       "/projects/todo-with-java/tela-login-desk.png",
  //       "/projects/todo-with-java/home-desk.png",
  //       "/projects/todo-with-java/tela-login-mobile.png",
  //     ],

  //     imageMiniCard: "",

  //     stacks: [
  //       "TypeScript",
  //       "Node.js",
  //       "Express",
  //       "Prisma",
  //       "PostgreSQL",
  //       "JWT",
  //       "Zod",
  //       "bcrypt",
  //       "Docker",
  //       "Docker Compose",
  //     ],

  //     gitHubUrl: "https://github.com/FabioCoutinho1/Mini-server",
  //   },
];
