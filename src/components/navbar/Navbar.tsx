// src/Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Heading, Text } from "@chakra-ui/react";
import English from "../../images/english.png";
import Slovenian from "../../images/slovenscina.svg";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const { language } = useLanguage();

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight*0.4) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${showNavbar ? "show" : ""}`}>
      <div>
        <div className="navbarText">
          <Heading as="h2">
            Tijan
          </Heading>
          <Text fontSize="2xl" className="name">
            BLOCKCHAIN & WEB
          </Text>
        </div>
      </div>
      <div className="navbarRight">
        <div className="icons">
          <a href="https://github.com/0xTijan" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
          </a>
          <a href="https://twitter.com/0xTijan" target="_blank" rel="noreferrer">
            <AiFillTwitterCircle className="icon" />
          </a>
          <a href="https://t.me/TijanWeb3" target="_blank" rel="noreferrer">
            <BsTelegram className="icon" />
          </a>
          <a href="mailto:tijan@tijan.dev" target="_blank" rel="noreferrer">
            <AiOutlineMail className="icon" />
          </a>
        </div>
        {language === "en" ? (
          <a href="/?l=sl">
            <img src={Slovenian} className="language" alt="Slovenian" />
          </a>
        ):(
          <a href="/?l=en">
            <img src={English} className="language" alt="English" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
