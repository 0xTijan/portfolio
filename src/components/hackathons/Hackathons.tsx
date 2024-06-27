import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, HStack, Heading, Text, Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { Hackathon } from "./config";
import "./Hackathons.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { text } from "../../helpers/text";

const Hackathons = () => {

  const { language } = useLanguage();

  return(
    <div className="bg-hackathons">
      <p className="heading">{text[language].hackathonsHeading}</p>
      <p className="text">{text[language].hackathonsDescription}</p>
      <div className="hackathons-grid">
        {text[language].hackathons.map((hackathon: Hackathon) => {
          return(
            <div key={uuidv4()} className="hackathon">
              <img src={hackathon.image} alt="Hackathon Image" />
              <div className="hackathon-info">
                <a href={hackathon.hackathonUrl} target="_blank" rel="noreferrer" className="hack-link">
                  <Heading as='h4' size='lg'>
                    {hackathon.name}
                  </Heading>
                </a>
                <Text fontSize='xl'>
                  {hackathon.description}
                </Text>
                <Text fontSize='xl' style={{ marginTop: "3px" }}>
                  {text[language].hackathonsProjectText} <b>{hackathon.project}</b>
                </Text>
                <div className="hackathon-tags">
                  {hackathon.prizes.map((tech: {name: string}) => {
                    return(
                      <Tag key={uuidv4()} size='lg' colorScheme='cyan' borderRadius='full' className="tech-tag">
                        <Avatar
                          size='xs'
                          name={tech.name}
                          ml={-1}
                          mr={2}
                        />
                        <TagLabel>{tech.name}</TagLabel>
                      </Tag>
                    );
                  })}
                </div>
                <HStack>
                  <a href={hackathon.hackathonUrl} target="_blank" rel="noreferrer">
                    <Button size='md' colorScheme='blue' variant='solid'>{text[language].hackathonViewHackathon}</Button>
                  </a>
                  {hackathon.url.length>0 ? (
                    <a href={hackathon.url} target="_blank" rel="noreferrer">
                      <Button size='md' colorScheme='blue' variant='outline'>Demo</Button>
                    </a>
                  ):null}
                </HStack>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hackathons;