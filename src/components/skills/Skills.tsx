import React from "react";
import { Heading } from "@chakra-ui/react";
import { skills, Skill } from "./config";
import "./Skills.css";

const Skills = () => {
  return(
    <div className="bg-skills">
      <p className="heading">Skillset</p>
      <p className="text">Technologies I use in my development:</p>
      <div className="skill-icons-gird">
        {skills.map((skill: Skill) => {
          return(
            <div>
              <div className="skill">
                <img src={skill.img} alt="Skill logo image" />
              </div>
              <p>{skill.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;