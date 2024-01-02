import { Banknote, Info } from "lucide-react"
import { Separator } from "./ui/separator";

export const RecentExpenses =() => {
    return (
      <div className="col-span-3 flex flex-col p-4 rounded-md border gap-2">
        {/* Section Heading */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Recent Expenses</h2>
          <p className="text-sm text-muted-foreground">
            Your recent 10 expenses
          </p>
        </div>

        {/* List View */}
        <div className="grid-grid-cols-1 gap-2">
          {/* Single List Tile */}
          <div className="p-2 flex items-center justify-between hover:bg-border transition-all rounded-md">
            {/* Icon */}
            <div className="bg-muted p-2 rounded-full">
              <Banknote />
            </div>

            {/* Category & Expense */}
            <div className="flex-1 flex flex-col px-4">
              <span className="font-medium text-sm">PKR 300</span>
              <span className="font-medium text-xs text-muted-foreground">Petrol</span>
            </div>

            {/* More info action btn */}
            <Info className="cursor-pointer" />
          </div>
        </div>
      </div>
    );
}