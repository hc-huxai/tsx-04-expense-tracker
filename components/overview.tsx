"use client";

import { cn } from "@/lib/utils";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface OverviewProps {
  data: any[];
  className?: string;
}

export const Overview: React.FC<OverviewProps> = ({ data, className }) => {
  return (
    <ResponsiveContainer width={128} height={350} className={cn(className)}>
      <BarChart data={[{ time: "01/24", total: 2000 }]}>
        <XAxis
          dataKey={"time"}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `PKR${value}`}
        />
        <Bar dataKey={"total"} fill="#66FF4F" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
