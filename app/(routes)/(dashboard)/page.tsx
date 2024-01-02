"use client";

import { Overview } from "@/components/overview";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

// * Local Imports

export default function DashboardPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading
          title="Dashboard"
          description="An overview of what you spent!"
        />
        <Separator />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-9 flex flex-col gap-4 p-4 border rounded-md">
            <div className="flex items-center justify-between">
              <h2 className="text-md font-semibold uppercase tracking-wider">
                Graphical Report
              </h2>

              <Switch containerStyles="w-48 h-10" toggleStyles="w-[94px] h-9">
                <div className="z-10 w-full flex items-center text-sm font-semibold">
                  <p className="flex-1">
                    Monthly
                  </p>
                  <p className="flex-1">
                    Yearly
                  </p>
                </div>
              </Switch>
            </div>
            <Overview data={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
