import Image, { StaticImageData } from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface TypeStack {
  svg: StaticImageData;
  alt: string;
  invertInDarkMode?: boolean;
  taskName: string;
}

export default function Stack({
  svg,
  alt,
  invertInDarkMode = false,
  taskName,
}: TypeStack) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="flex size-16 items-center justify-center rounded-lg border border-border bg-surface p-2 transition-transform hover:-translate-y-1 sm:size-19.5">
          <Image
            src={svg}
            alt={alt}
            className={`size-full ${invertInDarkMode ? "dark:brightness-0 dark:invert" : ""}`}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{taskName}</p>
      </TooltipContent>
    </Tooltip>
  );
}
