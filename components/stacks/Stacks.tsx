import Image, { StaticImageData } from "next/image";

interface TypeStack {
  svg: StaticImageData;
  alt: string;
}

export default function Stack({ svg, alt }: TypeStack) {
  return (
    <div className="flex size-16 items-center justify-center rounded-lg border border-white/10 bg-[#0A0F17] p-2 transition-transform hover:-translate-y-1 sm:size-[78px]">
      <Image src={svg} alt={alt} className="size-full" />
    </div>
  );
}
