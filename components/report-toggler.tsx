import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export const ReportToggler = () => {
  const [reportType, setReportType] = useState<"monthly" | "yearly">("monthly");
  return (
    <Switch
      containerStyles="w-40 h-10"
      toggleStyles="w-[78px] h-9"
      checked={reportType === "monthly" ? false : true}
      onClick={() =>
        setReportType(reportType === "monthly" ? "yearly" : "monthly")
      }
    >
      <div className="z-10 w-full flex items-center text-sm font-semibold">
        <p
          className={cn(
            "flex-1 transition-colors select-none",
            !!(reportType === "yearly") && "text-muted-foreground"
          )}
        >
          Monthly
        </p>
        <p
          className={cn(
            "flex-1 transition-colors select-none",
            !!(reportType === "monthly") && "text-muted-foreground"
          )}
        >
          Yearly
        </p>
      </div>
    </Switch>
  );
}