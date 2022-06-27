import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import "./Contact.css";


export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "tijan.nartnik@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "",
  },
  {
    name: "TWITTER:",
    info: "@0xTijan",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "",
  },
  {
    name: "TELEGRAM:",
    info: "@TijanWeb3",
    icon: <BsTelegram className="contact-icon" />,
    url: "",
  },
  {
    name: "DISCORD:",
    info: "Tijan#6804",
    icon: <FaDiscord className="contact-icon" />,
    url: "",
  },
  {
    name: "GitHub:",
    info: "@0xTijan",
    icon: <AiFillGithub className="contact-icon" />,
    url: "",
  },
  {
    name: "LOCATION & ZONE:",
    info: "Slovenia, UTC+1",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <p className="heading">Contacte Me</p>
      <p className="text">If you have any questions or want to hire me, please contact me</p>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <div className="contact-section">
              {contact.icon}
              <div className="contact-text-div">
                <p className="contact-title">{contact.name}</p>
                <p className="contact-details">{contact.info}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="button-container">
        <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
          Contact Me
        </Button>
      </div>
    </div>
  )
}

export default Contact;