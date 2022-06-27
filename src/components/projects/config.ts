import { Skill, skills } from "../skills/config"
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
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2], skills[0], skills[5], skills[7], skills[1]]
  },
  {
    name: "Portfolio",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Portfolio",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Portfolio",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Portfolio",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Portfolio",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Portfolio",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
  {
    name: "Portfolio",
    description: "Developer portfolio ",
    image: Avatar,
    url: "",
    github: "",
    technologies: [skills[2]]
  },
]