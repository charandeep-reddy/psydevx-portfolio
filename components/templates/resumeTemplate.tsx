interface ResumeConfig {
  title: string;
  sections: Array<{
    type: string;
    title: string;
    items: Array<{
      role?: string;
      company?: string;
      period?: string;
      description?: string;
      degree?: string;
      institution?: string;
      skills?: string[];
      cgpa?: string;
    }>;
  }>;
}

interface ResumeTemplateProps {
  config: ResumeConfig;
}

export const ResumeTemplate = ({ config }: ResumeTemplateProps) => {
  return (
    <>
      {config.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-white">{section.title}</h2>

          {section.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex flex-col gap-2 border-l-2 border-white/20 pl-5"
            >
              {item.role && (
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
              )}
              {item.degree && (
                <h3 className="text-xl font-semibold text-white">
                  {item.degree}
                </h3>
              )}
              {item.company && <p className="text-blue-400">{item.company}</p>}
              {item.institution && (
                <p className="text-blue-400">{item.institution}</p>
              )}
              {item.period && (
                <p className="text-white/60 text-sm">{item.period}</p>
              )}
              {item.description && (
                <p className="text-white/80 leading-[1.4]">
                  {item.description}
                </p>
              )}
              {item.skills && (
                <p className="text-white/80 leading-[1.4]">
                  {item.skills.join(", ")}
                </p>
              )}
              {item.cgpa && (
                <p className="text-white/80 leading-[1.4]">{item.cgpa}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
