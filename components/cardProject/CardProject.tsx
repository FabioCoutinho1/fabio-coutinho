import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CardProjectTypeProops {
  title: string;
}

export default function CardProject({ title }: CardProjectTypeProops) {
  return (
    <Card className="w-full max-w-sm">
      <Image
        src="https://placehold.co/600x400/2F2E88/FFF"
        alt="placehold_Imagr"
        width={600}
        height={400}
        unoptimized
      />

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex gap-2">
          <Badge>React</Badge>
          <Badge>Spring</Badge>
          <Badge>Postgres</Badge>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
