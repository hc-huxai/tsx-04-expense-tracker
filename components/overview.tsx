"use client";

import { useTheme } from "next-themes";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface OverviewProps {
  data: any[];
  className?: string;
}

export const Overview: React.FC<OverviewProps> = ({ data, className }) => {
  const { resolvedTheme } = useTheme();

  return (
    // <ResponsiveContainer className={cn(className)}>
    <BarChart width={128} height={350} data={[{ time: "01/24", total: 2490 }]}>
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
      <Tooltip
        wrapperStyle={{ left: "2rem", width: "8rem" }}
        content={({ active, payload }) => {
          if (active && payload && payload.length) {
            return (
              <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                      Expense
                    </span>
                    <span className="font-bold text-muted-foreground flex items-center gap-1">
                      <span>PKR</span>
                      <span>{payload[0].value}</span>
                    </span>
                  </div>
                  {/* <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Today
                      </span>
                      <span className="font-bold">{payload[1].value}</span>
                    </div> */}
                </div>
              </div>
            );
          }

          return null;
        }}
      />
      <Bar
        dataKey={"total"}
        fill={"#0af"}
        radius={[4, 4, 0, 0]}
        className="hover:brightness-95"
      />
    </BarChart>
    // </ResponsiveContainer>
  );
};
