import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, HStack, Heading, Text, Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { Project } from "./config";
import { AiFillGithub } from "react-icons/ai";
import { Skill } from "../skills/config";
import "./Projects.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { text } from "../../helpers/text";

const Projects = () => {

  const [amount, setAmount] = useState(8);

  const { language } = useLanguage();

  const viewMore = () => {
    const len = text[language].projects.length;
    if (len === amount) {
      setAmount(8);
    } else {
      setAmount(len);
    }
  };

  const viewMoreText = () => {
    if (amount === text[language].projects.length) {
      return text[language].projectsViewLess;
    } else {
      return text[language].projectsViewMore;
    }
  };

  return(
    <div className="bg-projects">
      <p className="heading">{text[language].projectsHeading}</p>
      <p className="text">{text[language].projectsDescription}</p>
      <div className="projects-grid">
        {text[language].projects.slice(0, amount).map((project: Project) => {
          return(
            <div key={uuidv4()} className="project">
              <img src={project.image} alt="Project Image" />
              <div className="project-info">
                <Heading as='h4' size='lg'>
                  {project.name}
                </Heading>
                <Text fontSize='xl'>
                  {project.description}
                </Text>
                <div className="project-tags">
                  {project.technologies.map((tech: Skill) => {
                    return(
                      <a key={uuidv4()} href={tech.url} target="_blank" rel="noreferrer">
                        <Tag size='lg' colorScheme='cyan' borderRadius='full' className="tech-tag">
                          <Avatar
                            src={tech.img}
                            size='xs'
                            name={tech.name}
                            ml={-1}
                            mr={2}
                          />
                          <TagLabel>{tech.name}</TagLabel>
                        </Tag>
                      </a>
                    );
                  })}
                </div>
                <HStack>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Button size='md' leftIcon={<AiFillGithub />} colorScheme='blue' variant='solid'>GitHub</Button>
                  </a>
                  {project.url.length>0 ? (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <Button size='md' colorScheme='blue' variant='outline'>Demo</Button>
                    </a>
                  ):null}
                </HStack>
              </div>
            </div>
          );
        })}
      </div>
      <button className="git-hub-btn viewMore" onClick={() => viewMore()}>
        {viewMoreText()}
      </button>
      <div>
        <p className="git-hub-text">{text[language].projectsGithubText}</p>
        <a href="https://github.com/0xTijan" target="_blank" rel="noreferrer">
          <button className="git-hub-btn">GitHub</button>
        </a>
      </div>
      <p className="text soon">{text[language].projectsMoreText}</p>
    </div>
  );
};

export default Projects;