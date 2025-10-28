import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconCalendar from "@/assets/icons/IconCalendar.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "Calendar",
    href: "https://cal.com/jamesweng",
    linkTitle: `Schedule a meeting with ${SITE.author}`,
    icon: IconCalendar,
  },
  {
    name: "GitHub",
    href: "https://github.com/wengj9",
    linkTitle: `${SITE.author} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wengjames/",
    linkTitle: `${SITE.author} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:me@jamesweng.com",
    linkTitle: `Send an email to ${SITE.author}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
