"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface BlogConfig {
  title: string;
  sections: Array<{
    type: string;
    items: Array<{
      title: string;
      excerpt: string;
      date: string;
      readTime: string;
    }>;
  }>;
}

interface BlogTemplateProps {
  config: BlogConfig;
}

export const BlogTemplate = ({ config }: BlogTemplateProps) => {
  const router = useRouter();
  console.log(config);
  if (config.sections.length === 0) {
    return (
      <>
        <p className="text-white/80 leading-[1.4] text-center text-2xl font-bold">No Blogs Yet</p>
      </>
    );
  }
  return (
    <>
      {config.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {section.items.map((item, itemIndex) => (
            <Card onClick={() => router.push(`/blog/${item.title.toLowerCase().replace(/\s+/g, "-")}`)} key={itemIndex} className="hover:border-blue-400 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <CardDescription className="text-white/80 leading-[1.4]">
                  {item.excerpt}
                </CardDescription>
                <div className="flex gap-4 text-sm text-white/60 mt-2">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </>
  );
};

