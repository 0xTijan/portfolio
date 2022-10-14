import outliers from "./../../images/outliers.jpeg";
import github from "./../../images/github.jpeg";
import ichi from "./../../images/ichi.jpeg";

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  let toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  })
  return toReturn;
}

export const skills: Skill[] = [
  {
    name: "ICHI by DMA Labs",
    url: "https://ichi.org/",
    img: ichi
  },
  {
    name: "Awesome-ZK",
    url: "https://github.com/SupremeSingh/Awesome-ZK",
    img: github
  },
  {
    name: "Outlier DAO",
    url: "https://twitter.com/outlierdao",
    img: outliers
  },
]