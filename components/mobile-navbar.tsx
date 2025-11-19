"use client";
import { navbarConfig } from "./navbar";
import Link from "next/link";
import { Title } from "./ui/title";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MobileNavbarProps {
  className?: string;
}

export const MobileNavbar = ({ className }: MobileNavbarProps) => {
  const pathname = usePathname();

  const getActiveSection = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };
  return (
    <div className={cn("fixed bottom-0 left-0 w-full z-50 bg-background/20 backdrop-blur-xl px-5 py-3 rounded-tl-[20px] rounded-tr-[20px] border border-gray-800", className)}>
      <div className="flex items-center justify-center gap-3">
        {navbarConfig.map((item) => {
          const isActive = getActiveSection(item.href);
          return (
            <Link key={item.title} href={item.href} prefetch={true}>
              <Title
                text={item.title}
                className={cn(
                  "text-xs py-3 cursor-pointer transition-colors font-semibold",
                  isActive ? "text-blue-400" : "text-white/80 hover:text-blue-400/80"
                )}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
