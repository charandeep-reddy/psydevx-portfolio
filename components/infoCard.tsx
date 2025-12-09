import { type LucideIcon } from "lucide-react";

export const InfoCard = ({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: LucideIcon;
}) => {
  return (
    <div className="flex gap-5 items-center overflow-hidden">
      <div className="bg-gray-900 p-4 rounded-xl flex items-center justify-center shrink-0 border border-gray-800">
        <Icon className="w-4 h-4 text-blue-500" />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-white/60 text-xs font-bold uppercase">{title}</h2>
        <p className="text-white text-sm">{value}</p>
      </div>
    </div>
  );
};