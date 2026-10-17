import type { ComponentType } from "react";
import { SiJavascript, SiHtml5, SiCss, SiReact, SiNextdotjs, SiSolidity, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { BlockchainIcon, FoundryIcon } from "@/components/Icons";

export type Logo = {
  name: string;
  Icon: ComponentType<{ className?: string }>;
  /** Tailwind classes that colour the logo. Logos that are black by brand use text-ink so they work in dark mode. */
  color: string;
};

export const logos: Logo[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", Icon: SiCss, color: "text-[#1572B6]" },
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-ink" },
  { name: "Solidity", Icon: SiSolidity, color: "text-ink" },
  { name: "Blockchain", Icon: BlockchainIcon, color: "text-accent" },
  { name: "Foundry", Icon: FoundryIcon, color: "text-[#E8590C]" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-[#06B6D4]" },
  { name: "Express", Icon: SiExpress, color: "text-[#06B6D4]" },
  { name: "Mongo Db", Icon: SiMongodb, color: "text-[#06B6D4]" },

];

export const skillGroups = [
  {
    title: "Web3",
    text: "Writing Solidity contracts, testing them properly, and thinking about security before gas.",
    items: ["Solidity", "Foundry", "Remix", "ERC-20 / ERC-721", "Fuzz testing"],
  },
  {
    title: "Web2",
    text: "Fast, accessible interfaces and apps that feel the same on a phone and on a desktop.",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Mongo DB", "Node Js", "Express"],
  },
];
