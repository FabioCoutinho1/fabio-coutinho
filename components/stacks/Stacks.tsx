import Image, { StaticImageData } from "next/image";

interface TypeStack {
  svg: StaticImageData;
  alt: string;
}

export default function Stack({ svg, alt }: TypeStack) {
  return (
    <div className="bg-[#0A0F17] rounded-2xl p-1 border">
      <Image src={svg} alt={alt} />
    </div>
  );
}
