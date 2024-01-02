// * Global Imports
import Link from "next/link";
import Image from "next/image";

// * Local Imports
import logo from "@/assets/img/logo.png";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="huxai-logo"
        className={cn(
          "",
          "h-12 w-fit object-contain cursor-pointer",
          "dark:brightness-100 dark:contrast-200 dark:invert"
        )}
        priority
      />
    </Link>
  );
};
