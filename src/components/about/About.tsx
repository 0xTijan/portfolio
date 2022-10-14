import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
import avatar from "../../images/avatar.jpg";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>{"   "}<a href="mailto:manmit.singh@duke.edu" className="contact-link">Working on ZK STARKs? Let's Talk!</a></Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      )
    }else{
      return null
    }
  }

  return(
    <>
    <Alert />
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hi! 👋
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              I'm <span className="name">Manmit</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>a passionate <span className="name">buidler</span> with a focus on <span className="name">ZK Proofs, ReFi and DeSci</span>. I'm based out of Durham, North Carolina and have now been in the web3 space since 2018. 
            I'm always eager to meet and learn from other people building the future of the web.</Text>
          </div>

          <div className="icons">
            <a href="https://github.com/SupremeSingh" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://twitter.com/man_meat_singh" target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/manmit-singh99/" target="_blank">
              <AiFillLinkedin className="icon" />
            </a>
            <a href="https://t.me/money_singh01" target="_blank">
              <BsTelegram className="icon" />
            </a>
          </div>

          <a href="mailto:manmit.singh@duke.edu">
            <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              Contact Me
            </Button>
          </a>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="Manmit Avatar" />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;