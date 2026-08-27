import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CardProjectTypeProops {
  title: string;
}

export default function CardProject({ title }: CardProjectTypeProops) {
  return (
    <Card className="w-[216px] overflow-hidden border-border bg-surface py-0 shadow-none">
      <Image
        src="https://placehold.co/600x400/2F2E88/FFF"
        alt={`Prévia do projeto ${title}`}
        width={600}
        height={400}
        unoptimized
        className="h-[124px] w-full object-cover"
      />

      <CardHeader className="gap-2 px-2.5 py-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-1">
          <Badge className="rounded-sm px-1 text-[10px]">React</Badge>
          <Badge className="rounded-sm px-1 text-[10px]">Spring Boot</Badge>
          <Badge className="rounded-sm px-1 text-[10px]">Postgres</Badge>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
