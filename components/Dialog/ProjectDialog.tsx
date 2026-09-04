import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import ReactMarkdown from "react-markdown";

import Image from "next/image";

import { Badge } from "../ui/badge";
import Link from "next/link";

import githubligth from "@/app/assets/svg/githubLigth.svg";
import githubDark from "@/app/assets/svg/githubDark.svg";

import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ProjectDialogProps {
  children: ReactNode;
  gitHubUrl: string;
  projectUrl: string;
  stacks: string[];
  nameProject: string;
  image: string[];
  description: string;
}

export default function ProjectDialog({
  children,
  stacks,
  gitHubUrl,
  projectUrl,
  nameProject,
  image,
  description,
}: ProjectDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent
        className="lg:max-w-[60%]
    max-h-[90vh]
    flex
    flex-col
    gap-4
    overflow-hidden"
      >
        <DialogHeader>
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {image.map((e, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={e}
                    alt={`Prévia do projeto`}
                    width={1920}
                    height={1000}
                    unoptimized
                    className="object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0.5" />
            <CarouselNext className="right-0.5" />
          </Carousel>
        </DialogHeader>
        <DialogTitle>
          <div className="flex gap-2 justify-between items-center">
            {nameProject}
            <nav>
              <ul className="flex gap-4 *:w-6  *:transition-transform *:hover:-translate-y-1 ">
                <li aria-label="Ir para o GitHub de Fabio Coutinho">
                  <Link href={gitHubUrl}>
                    <Image
                      src={githubDark}
                      alt="GitHub logo"
                      className=" hidden dark:block"
                    />
                    <Image
                      src={githubligth}
                      alt="GitHub logo"
                      className="dark:hidden"
                    />
                  </Link>
                </li>
                <li
                  content="Ir para o projeto"
                  aria-label="Ir para o Projeto de Fabio Coutinho"
                >
                  <Link
                    href={projectUrl}
                    aria-label="Ir para o LinkedIn de Fabio Coutinho"
                  >
                    <ArrowRight />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </DialogTitle>
        <div className="no-scrollbar max-h-[50vh] overflow-y-auto leading-normal whitespace-pre-line">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        <div className="flex flex-wrap gap-2">
          {stacks.map((e, index) => (
            <Badge key={index}>{e}</Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
