"use client";

import Image, { StaticImageData } from "next/image";
import { useGSAP } from "@gsap/react";
import { ReactNode, useRef } from "react";
import { gsap } from "@/lib/gsap";

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
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const content = gsap.utils.toArray<HTMLElement>(
          ".gsap-section-content :is(h1, h2, h3, p, a, li, [data-gsap-reveal])",
        );

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            // play ao entrar por cima ou por baixo; reverse ao sair da seção.
            toggleActions: "play reverse play reverse",
          },
          defaults: { ease: "power3.out" },
        });

        timeline
          .from(content, {
            autoAlpha: 0,
            x: -40,
            y: 16,
            duration: 0.6,
            stagger: 0.1,
          })
          .from(
            ".gsap-section-avatar",
            {
              autoAlpha: 0,
              scale: 0.78,
              y: 28,
              duration: 1,
              ease: "power2.out",
            },
            0.15,
          );
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full scroll-mt-16" id={id}>
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(28rem,0.95fr)] lg:gap-20">
        <div className="gsap-section-content flex flex-col items-start justify-center gap-5 lg:self-center">
          {children}
        </div>
        <div className="order-first flex min-h-64 items-end justify-center lg:order-last lg:h-full lg:self-stretch">
          <Image
            src={imageSrc}
            alt={imageAlt}
            priority={id === "hero"}
            placeholder="blur"
            className="gsap-section-avatar h-auto max-h-88 w-auto max-w-full object-contain sm:max-h-122 lg:max-h-[calc(100svh-5rem)] lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
