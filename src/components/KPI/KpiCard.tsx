import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type KpiCardProps = {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
};

export function KpiCard({ title, value, icon }: KpiCardProps) {
  return (
    <Card className="border-secondary-foreground box shadow-md shadow-secondary-foreground w-[70%] md:w-full mx-auto ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-Text-primary">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold text-primary">{value}</div>
      </CardContent>
    </Card>
  );
}
