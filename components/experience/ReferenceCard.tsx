import { Card, CardContent } from "../ui/card";
import Image from "next/image";

type ReferenceCardProps = {
  name: string;
  role: string;
  company: string;
  image: string;
  references: string;
};

const ReferenceCard = ({ data }: { data: ReferenceCardProps }) => {
  return (
    <Card className="max-w-2xl shadow-lg xl:max-w-4xl">
      <CardContent className="flex gap-10">
        <div className="hidden items-center pb-30 lg:flex">
          <Image
            width={100}
            height={100}
            src={data.image}
            alt={data.name}
            className="min-w-32 rounded-full xl:min-w-40"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="whitespace-pre-line">{data.references}</div>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">{data.name}</span>
            <span className="text-muted-foreground font-light">
              {data.role} at {data.company}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferenceCard;
