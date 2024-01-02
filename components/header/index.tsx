"use client";

// * Global/Package Imports
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

// * Local Imports
import { Logo } from "./logo";
import { MainNav } from "./main-nav";
import { ModeToggle } from "@/components/theme-toggle";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="h-16 w-screen flex items-center px-6">
        <Logo />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
