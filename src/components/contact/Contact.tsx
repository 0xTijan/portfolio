import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "Instagram:",
    info: "@man_meat_singh",
    icon: <AiFillInstagram className="contact-icon" />,
    url: "https://www.instagram.com/?hl=en",
  },
  {
    name: "TWITTER:",
    info: "@man_meat_singh",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://twitter.com/man_meat_singh",
  },
  {
    name: "TELEGRAM:",
    info: "@money_singh01",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/money_singh01",
  },
  {
    name: "DISCORD:",
    info: "money_singh#6494",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.com/login",
  },
  {
    name: "GitHub:",
    info: "@SupremeSingh",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/SupremeSingh",
  },
  {
    name: "LOCATION & ZONE:",
    info: "US-East, UTC+5",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/usa/durham",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contact Me</p>
        <p className="text">If you have any questions or want to colab, reach out to me here:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank">
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                    <p className="contact-details">{contact.info}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Contact;