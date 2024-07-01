import React from "react";
import { Skill, SkillsType } from "./config";
import { v4 as uuidv4 } from "uuid";
import "./Skills.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { text } from "../../helpers/text";

const Skills = () => {

  const { language } = useLanguage();

  return(
    <div className="bg-skills" id="more">
      <p className="heading">{text[language].skillsetHeading}</p>
      <p className="text">{text[language].skillsetDescription}</p>
      <div>
        {text[language].skills.map((skills: SkillsType) => {
          return(
            <div key={skills.type} className="skills-type">
              <div className="texts">
                <p className="text"><b>{skills.type}</b></p>
              </div>
              <div className="skill-icons-gird">
                {skills.skills.map((skill: Skill) => {
                  return(
                    <a key={uuidv4()} href={skill.url} target="_blank" rel="noreferrer">
                      <div className="skill">
                        <img src={skill.img} alt="Skill logo image" />
                      </div>
                      <p>{skill.name}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;