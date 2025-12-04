"use client";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { motion } from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface PortfolioLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function PortfolioLayout({ children, title }: PortfolioLayoutProps) {
  const isMobile = useIsMobile();
  return (
    <div className="lg:my-15 mt-5 mb-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-7 w-full min-h-screen relative px-5 lg:px-0">
      <Sidebar className="lg:col-span-1 lg:sticky lg:top-15" />

      <Card className="lg:col-span-3 max-h-fit p-7.5 relative w-full rounded-[20px]">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col gap-10"
        >
          {title && (
            <div className="relative pb-7">
              <h1 className="text-4xl font-bold text-white">{title}</h1>
              <div className="absolute bottom-0 left-0 h-1.5 w-10 rounded-full bg-blue-400"></div>
            </div>
          )}
          {children}
        </motion.div>
      </Card>
    </div>
  );
}
