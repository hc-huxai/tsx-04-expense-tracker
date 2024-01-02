import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNav = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Reports",
      href: "/reports",
      active: pathname === "/reports",
    },
  ];

  return (
    <div className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
