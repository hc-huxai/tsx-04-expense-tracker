// * Local Imports
import { Overview } from "@/components/overview";
import { ReportToggler } from "./report-toggler";

export const Metric = () => {
  return (
    <div className="col-span-9 flex flex-col gap-4 p-4 border rounded-md">
      <div className="flex items-start justify-between">
        <h2 className="text-md text-muted-foreground font-semibold uppercase tracking-wider">
          Graphical Report
        </h2>

        <ReportToggler />
      </div>
      <Overview data={[]} />
    </div>
  );
};
