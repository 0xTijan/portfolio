import { getSkill, Skill, skills } from "../skills/config"
import SimpleChat from "./../../images/simple-chat.png";
import Portfolio from "./../../images/portfolio.png";
import Avatar from "./../../images/hardhat-logo.png";

export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: "My developer portfolio showing my blockchain projects, skillset and certificates",
    image: Portfolio,
    url: "https://tijan.dev/",
    github: "https://github.com/0xTijan/simple-crypto-chat",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  {
    name: "Simple Chat",
    description: "Simple chat groups with limitations on your token balances, built in Moralis 7-day challenge (more on Github).",
    image: SimpleChat,
    url: "https://simplechat.tijan.dev/",
    github: "https://github.com/0xTijan/simple-crypto-chat",
    technologies: getSkill(["html", "css", "javascript", "moralis"])
  },
  {
    name: "Coin Flip",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2], skills[0], skills[5], skills[7], skills[1]]
  },
  {
    name: "Diamond Hands 💎",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Crypto Tracker",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "DAO",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Multisig",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Simple DEX",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
]