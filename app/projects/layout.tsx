import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de Fabio Coutinho em desenvolvimento Full Stack, com aplicações em Java, Spring Boot, React e tecnologias relacionadas.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projetos | Fabio Coutinho",
    description:
      "Conheça os projetos de Fabio Coutinho em desenvolvimento Full Stack.",
    url: "/projects",
  },
  twitter: {
    title: "Projetos | Fabio Coutinho",
    description:
      "Conheça os projetos de Fabio Coutinho em desenvolvimento Full Stack.",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
