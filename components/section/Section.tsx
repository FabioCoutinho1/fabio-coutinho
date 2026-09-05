"use client";

import Image, { StaticImageData } from "next/image";
import { useGSAP } from "@gsap/react";
import { ReactNode, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top 10%",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
      });
      tl.from(".gsap-section-avatar", {
        scale: 0,
        duration: 0.6,
        ease: "power3.out",
      });
      tl.from(
        ".box",
        {
          opacity: 0,
          x: -500,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );
    },
    { scope: sectionRef },
  );

  // useGSAP(
  //   () => {
  //     const media = gsap.matchMedia();

  //     media.add("(prefers-reduced-motion: no-preference)", () => {
  //       const section = sectionRef.current;

  //       if (!section) return;

  //       const content = gsap.utils.toArray<HTMLElement>(
  //         ".gsap-section-content :is(h1, h2, h3, p, a, li, [data-gsap-reveal])",
  //       );

  //       const timeline = gsap.timeline({
  //         paused: true,
  //         defaults: { ease: "power3.out" },
  //       });

  //       timeline
  //         .from(content, {
  //           autoAlpha: 0,
  //           x: -40,
  //           y: 16,
  //           duration: 0.6,
  //           stagger: 0.1,
  //         })
  //         .from(
  //           ".gsap-section-avatar",
  //           {
  //             autoAlpha: 0,
  //             scale: 0.78,
  //             y: 28,
  //             duration: 1,
  //             ease: "power2.out",
  //           },
  //           0.15,
  //         );

  //       // Mantém a animação ativa até a seção já estar saindo mais da tela.
  //       // Um limiar menor amplia a faixa visível antes do reverse.
  //       const getVisibleSectionThreshold = () => section.offsetHeight * 0.8;
  //       const getHeaderHeight = () =>
  //         document.querySelector("header")?.clientHeight ?? 0;
  //       // A seção fica ativa na faixa em que ao menos 60% dela está
  //       // dentro da área útil abaixo do header, nos dois sentidos do scroll.
  //       const visibilityObserver = ScrollTrigger.create({
  //         trigger: section,
  //         start: () =>
  //           `top ${window.innerHeight - getVisibleSectionThreshold()}px`,
  //         end: () =>
  //           `bottom ${getHeaderHeight() + getVisibleSectionThreshold()}px`,
  //         onEnter: () => timeline.restart(),
  //         onEnterBack: () => timeline.restart(),
  //         onLeave: () => timeline.reverse(),
  //         onLeaveBack: () => timeline.reverse(),
  //       });

  //       return () => visibilityObserver.kill();
  //     });

  //     return () => media.revert();
  //   },
  //   { scope: sectionRef },
  // );

  return (
    <section ref={sectionRef} className="w-full scroll-mt-16" id={id}>
      <div className="container mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(28rem,0.95fr)] lg:gap-20">
        <div className="box gsap-section-content flex flex-col items-start justify-center gap-5 lg:self-center">
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
