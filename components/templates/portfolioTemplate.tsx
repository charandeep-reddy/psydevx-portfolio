"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface PortfolioConfig {
  title: string;
  sections: Array<{
    type: string;
    items: Array<{
      title: string;
      description: string;
      technologies: string[];
      image?: string | StaticImageData;
      url?: string;
    }>;
  }>;
}

interface PortfolioTemplateProps {
  config: PortfolioConfig;
}

export const PortfolioTemplate = ({ config }: PortfolioTemplateProps) => {
  const router = useRouter();
  return (
    <>
      {config.sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {section.items.map((item, itemIndex) => (
            <Card onClick={() => router.push(`${item.url}`)} key={itemIndex} className="flex flex-col gap-3 pt-0 cursor-pointer">
              {item.image && (
                <Image src={item.image} alt={item.title} unoptimized width={100} height={100} className="w-full h-60 object-cover object-top rounded-lg mb-2" />
              )}
              <CardContent className="flex flex-col gap-5">
                <CardTitle className="text-xl text-white">
                  {item.title}
                </CardTitle>
                <p className="text-white/80 leading-[1.4]">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </>
  );
};
