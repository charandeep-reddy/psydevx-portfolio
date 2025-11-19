"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Title } from "./ui/title";
import { cn } from "@/lib/utils";

export const navbarConfig = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  // Normalize pathname for comparison (handle root "/" and exact matches)
  const getActiveSection = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="flex items-center justify-between lg:max-w-xl w-full px-5 py-3 bg-background/20 max-lg:backdrop-blur-xl max-lg:fixed max-lg:bottom-0 max-lg:left-0 lg:absolute lg:-top-px lg:-right-px lg:rounded-bl-[20px] max-lg:rounded-tl-[20px] rounded-tr-[20px] border border-gray-800 z-10">
      <div className="w-full px-5 flex items-center justify-center lg:justify-between">
        {navbarConfig.map((item) => {
          const isActive = getActiveSection(item.href);
          return (
            <Link key={item.title} href={item.href} prefetch={true}>
              <Title
                text={item.title}
                className={cn(
                  "text-xs lg:text-base px-2 py-2 cursor-pointer transition-colors",
                  isActive
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400/80"
                )}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
