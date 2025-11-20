"use client";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";

interface PortfolioLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function PortfolioLayout({ children, title }: PortfolioLayoutProps) {

  return (
    <div className="lg:my-15 mt-5 mb-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-7 w-full min-h-screen relative px-5 lg:px-0">
      <Sidebar className="lg:col-span-1 lg:sticky lg:top-15" />

      <Card className="lg:col-span-3 min-h-screen p-7.5 relative w-full flex flex-col gap-10 rounded-[20px]">
        <Navbar />
        {title && (
            <div className="relative pb-7">
              <h1 className="text-4xl font-bold text-white">{title}</h1>
              <div className="absolute bottom-0 left-0 h-1.5 w-10 rounded-full bg-white"></div>
            </div>
        )}
        {children}
      </Card>
    </div>
  );
}

