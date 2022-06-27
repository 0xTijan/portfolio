import React from "react";
import { Heading, Text, Button } from '@chakra-ui/react';
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
import avatar from "./../../images/hi.png";
import "./About.css";

const About = () => {

  const getColor = () => {
    let ele = document.querySelector(':root');
    let color = "blue";
    let cs;
    if(ele) {
      cs = getComputedStyle(ele);
      color = cs.getPropertyValue('--text-secpndary');
    }
    console.log(color);
    return color;     
  }

  return(
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading fontSize='8rem' as='h1' size='4xl'>
              Hi! 👋
            </Heading>
            <Heading fontSize='8rem' as='h1' size='4xl'>
              I'm <span className="name">Tijan</span>
            </Heading>
          </div>
          <Text fontSize='3xl'>BLOCKCHAIN DEVELOPER</Text>

          <div className="icons">
            <a href="https://github.com/0xTijan" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://twitter.com/0xTijan" target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://t.me/TijanWeb3" target="_blank">
              <BsTelegram className="icon" />
            </a>
          </div>

          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
            Contact Me
          </Button>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" />
        </div>
      </div>
      <div className="bottom-icon">
        <BsChevronDown />
      </div>
    </div>
  )  
}

export default About;