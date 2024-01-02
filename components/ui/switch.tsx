"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  containerStyles?: string;
  toggleStyles?: string;
  checked: boolean;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ containerStyles, toggleStyles, checked, children, ...props }, ref) => (
  <SwitchPrimitives.Root
    checked={checked}
    className={cn(
      `peer inline-flex shrink-0 w-11 h-6 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-input`,
      //  data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`,
      containerStyles
    )}
    {...props}
    ref={ref}
  >
    {children}
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none absolute block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[100%] data-[state=unchecked]:translate-x-0",
        toggleStyles
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
