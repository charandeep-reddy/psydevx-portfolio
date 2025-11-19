import {
  Card,
  CardTitle
} from "@/components/ui/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Button } from "./ui/button";

import { InfoCard } from "./infoCard";
import { cn } from "@/lib/utils";
import { infoConfig } from "./infoConfig";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SidebarProps {
    className?: string;
}

const sidebarConfig = {
  name: "Example Name",
  title: "Example Title",
  info: infoConfig
}

const socialConfig = [
  {
    title: "Facebook",
    icon: faFacebook,
    href: "https://www.facebook.com/example"
  },
  {
    title: "Twitter",
    icon: faTwitter,
    href: "https://www.twitter.com/example"
  },
  {
    title: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/example"
  },
  {
    title: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/example"
  },
]

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <Card className={cn("flex flex-col gap-8 px-7.5 pb-7.5 pt-15 rounded-2xl text-white h-fit", className)}>
      <div className="flex flex-col gap-5 items-center justify-between">
        <div className="w-[150px] aspect-square rounded-3xl bg-white shadow-md"></div>

        <CardTitle className="text-2xl font-bold">{sidebarConfig.name}</CardTitle>

        <Button className="bg-gray-800 hover:bg-red-500">{sidebarConfig.title}</Button>
      </div>

      <div className="h-px w-full bg-gray-500"></div>

      <div className="flex flex-col gap-4 text-white px-2">
        {sidebarConfig.info.map((info: { title: string; value: string }) => (
          <InfoCard key={info.title} title={info.title} value={info.value} />
        ))}
      </div>

      <div className="flex gap-4 items-center justify-center">
        {socialConfig.map((social: { title: string; href: string; icon: IconProp }) => (
          <Link href={social.href} key={social.title} className="flex items-center gap-2">
            <FontAwesomeIcon icon={social.icon} className="w-4" />
          </Link>
        ))}
      </div>
    </Card>
  );
}
