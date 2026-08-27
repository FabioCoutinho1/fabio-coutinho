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
    <p className="flex min-w-36 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 font-semibold">
      <Icon className="size-5 text-highlight" />
      <span>{text}</span>
    </p>
  );
}
