"use client";

// * Global/Package Imports
import { useState, useEffect } from "react";

// * Local Imports
import { Metric } from "@/components/metric";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { RecentExpenses } from "@/components/recent-expenses";

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading
          title="Dashboard"
          description="An overview of what you spent!"
        />
        <Separator />
        <div className="grid grid-cols-12 gap-6">
          <Metric />
          <RecentExpenses/>
        </div>
      </div>
    </div>
  );
}
