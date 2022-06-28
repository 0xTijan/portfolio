import React from "react";
import { Button, HStack, Heading, Text, Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { projects, Project } from "./config";
import { AiFillGithub } from "react-icons/ai"
import "./Projects.css";
import { Skill } from "../skills/config";

const Projects = () => {
  return(
    <div className="bg-projects">
      <p className="heading">Projects</p>
      <p className="text">Take a look at my blockchain projects here:</p>
      <div className="projects-grid">
        {projects.map((project: Project) => {
          return(
            <div className="project">
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
                      <a href={tech.url} target="_blank">
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
      <p className="text soon"> . . . more coming soon!</p>
    </div>
  )
}

export default Projects;