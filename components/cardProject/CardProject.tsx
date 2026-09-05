import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CardProjectTypeProops {
  title: string;
  stacks: string[];
  image: string;
  className?: string;
}

export default function CardProject({
  title,
  stacks,
  image,
  className,
}: CardProjectTypeProops) {
  return (
    <Card
      className={`${className} w-54 overflow-hidden border-border bg-surface py-0 shadow-none cursor-pointer`}
    >
      <Image
        src={image}
        alt={`Prévia do projeto ${title}`}
        width={600}
        height={400}
        className="object-cover"
      />

      <CardHeader className="gap-2 px-2.5 py-2">
        <CardTitle className="text-start text-lg">{title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-1">
          {stacks.map((e, index) => (
            <Badge key={index}>{e}</Badge>
          ))}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
