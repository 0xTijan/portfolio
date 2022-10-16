import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import {
  Text,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import block from "./images/bb101-1.png";
import bit from "./images/bsc.png";
import beg from "./images/cfb-1.png";
import defi from "./images/defi1.png";
import dapp from "./images/ed1.png";
import eth from "./images/eth1.png";
import js from "./images/js.png";
import link from "./images/link.png";
import dot from "./images/polkadot.png";
import react from "./images/react.png";
import contract1 from "./images/sc1.png";
import contract2 from "./images/sc2.png";
import security from "./images/scs.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Background.css";
import { MdStar } from "react-icons/md";

const Background = () => {
  return (
    <div className="bg-certificats">
      <p className="heading">Who I Am</p>
      <p className="text">More like what we can most likely bond over ...</p>
      <br></br>
          <div className="text">
            <Text fontSize="3xl">
              If we ever meet and I do not use the word <span className="name">Blockchain</span> at least
              once, we never met. As a Sikh, I believe in the ideas of <span className="name">Ik Oankar </span> 
              and <span className="name">Sarbat Da Bhalla</span>. Sure - the world isn't perfect and no 2
              people are created equal. But I am sure life can be better,
              replete with more happiness and success, if we build communities
              with aligned incentives that empower each other. I think a lot
              about the future of <span className="name">digital business, mutualistic network states,
              verifiably reproducible scientific research</span> and <span className="name">decentralized
              finance</span>.
            </Text>
          </div>
        <br></br>
          <div className="text">
            <Text fontSize="3xl">
              Have you ever felt the need to put on a 75 lb backpack and hike 10
              miles up a sharp rocky incline? If yes, we should be friends. For
              some part, I grew up on a farm in the ruggedness of <span className="name">Indian Punjab</span>.
              But I only realized my love for the <span className="name">outdoors</span> during college, with
              the COVID pandemic taking me that extra mile. Today, you'll only
              find me alone in a room when I'm either coding or sleeping. I love
              to travel, explore nature and learn from people of <span className="name">different
              cultures and life experiences</span>.
            </Text>
          </div>
        <br></br>
          <div className="text">
            <Text fontSize="3xl">
              How long do you think an <span className="name">idea</span> lives? I believe most of them die no
              sooner than they are born. But the ideas, and stories, that
              survive generations, millenia even - those are worth learning.
              These ideas, stories and legends - <span className="name"> our History </span> - they stay with
              us and are passed on from generation to generation just like our
              DNA. But unlike DNA, there is no limit to who we can get them
              from. Throughout history, there have been ideas that are still
              relevant today - and we can learn them from people all around us,
              and for as long as we wish.
            </Text>
          </div>
    </div>
  );
};

export default Background;
