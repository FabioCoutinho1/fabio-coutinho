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
    <section className="scroll-mt-16" id={id}>
      <div className="mx-auto grid min-h-[min(100dvh,34rem)] max-w-6xl grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)] lg:gap-16 lg:py-8">
        <div className="flex flex-col items-start gap-5">{children}</div>
        <div className="order-first flex h-full min-h-64 items-end justify-center lg:order-last">
          <Image
            src={imageSrc}
            alt={imageAlt}
            priority={id === "hero"}
            placeholder="blur"
            className="h-auto max-h-[28rem] w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
