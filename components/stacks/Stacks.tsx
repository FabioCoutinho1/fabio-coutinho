import Image, { StaticImageData } from "next/image";

interface TypeStack {
  svg: StaticImageData;
  alt: string;
  invertInDarkMode?: boolean;
}

export default function Stack({ svg, alt, invertInDarkMode = false }: TypeStack) {
  return (
    <div className="flex size-16 items-center justify-center rounded-lg border border-border bg-surface p-2 transition-transform hover:-translate-y-1 sm:size-[78px]">
      <Image
        src={svg}
        alt={alt}
        className={`size-full ${invertInDarkMode ? "dark:brightness-0 dark:invert" : ""}`}
      />
    </div>
  );
}
