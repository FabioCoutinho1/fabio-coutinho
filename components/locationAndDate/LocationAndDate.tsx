import { LucideIcon } from "lucide-react";

interface LocationAndDateProopsType {
  text: string;
  icon: LucideIcon;
}

export default function LocationAndDate({
  text,
  icon: Icon,
}: LocationAndDateProopsType) {
  return (
    <p className="flex gap-2 bg-[#0A0F17] rounded-2xl px-2 py-1 border w-full justify-center">
      <Icon color="#FFCD29" />
      <span>{text}</span>
    </p>
  );
}
