import {
  GithubLogoIcon,
  GlobeIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

import type { MenuConfig } from "../components/menu";

export const menuItems: MenuConfig[] = [
  {
    key: "portfolio",
    label: "Portfolio",
    iconColorClassName: "text-primary",
    expandedWidth: 132,
    labelWidth: 78,
    icon: GlobeIcon,
    onClick: () => { window.open("https://diip3sh.xyz", "_blank") },
  },
  {
    key: "x",
    label: "X",
    iconColorClassName: "text-[#036aef]",
    expandedWidth: 92,
    labelWidth: 48,
    icon: XLogoIcon,
    onClick: () => { window.open("https://x.com/diip3sh", "_blank") },
  },
  {
    key: "github",
    label: "GitHub",
    iconColorClassName: "text-green-700",
    expandedWidth: 128,
    labelWidth: 64,
    icon: GithubLogoIcon,
    onClick: () => { window.open("https://github.com/diip3sh", "_blank") },
  },
];
