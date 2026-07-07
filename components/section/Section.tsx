import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}
export default function Section({
  children,
  id,
  imageSrc,
  imageAlt,
}: SectionProps) {
  return (
    <section
      className="h-full w-full flex justify-between items-center"
      id={id}
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="flex-1 h-full flex items-end justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          priority
          placeholder="blur"
          className="max-w-fit"
        ></Image>
      </div>
    </section>
  );
}
