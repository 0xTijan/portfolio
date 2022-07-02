import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, HStack, Heading, Text, Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { projects, Project } from "./config";
import { AiFillGithub } from "react-icons/ai"
import { Skill } from "../skills/config";
import "./Projects.css";

const Projects = () => {
  return(
    <div className="bg-projects">
      <p className="heading">Projects</p>
      <p className="text">Take a look at my blockchain projects:</p>
      <div className="projects-grid">
        {projects.map((project: Project) => {
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
                      <a key={uuidv4()} href={tech.url} target="_blank">
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
                    )
                  })}
                </div>
                <HStack>
                  <a href={project.github} target="_blank">
                    <Button size='md' leftIcon={<AiFillGithub />} colorScheme='blue' variant='solid'>GitHub</Button>
                  </a>
                  <a href={project.url} target="_blank">
                    <Button size='md' colorScheme='blue' variant='outline'>Demo</Button>
                  </a>
                </HStack>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <p className="git-hub-text">You can find my other projects on my GitHub</p>
        <a href="https://github.com/0xTijan?tab=repositories" target="_blank">
          <button className="git-hub-btn">GitHub</button>
        </a>
      </div>
      <p className="text soon"> . . . more coming soon!</p>
    </div>
  )
}

export default Projects;