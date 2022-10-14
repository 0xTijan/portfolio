import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import {
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
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

const Background = () => {
  return (
    <div className="bg-certificats">
      <p className="heading">Who I Am</p>
      <p className="text">More like what we can most likely bond over ...</p>
      <br></br>
      <UnorderedList>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              If we ever meet and I do not use the word{" "}
              <span className="name">Blockchain</span> at least once, we never
              met. As a Sikh, I believe in the teaching of{" "}
              <span className="name">ik Oankar</span> and{" "}
              <span className="name">"Sarbat Da Bhalla"</span>. Sure - the world
              isn't perfect and no 2 people are created equal. But I am
              convinced life can be better, replete with more happiness and
              success, if we build communities with aligned incentives that
              empower each other. I think this translates rather well to the
              concept of <span className="name">Mutualism</span>, and should be
              a building block of society - especially a digital one.
            </Text>
          </div>
        </ListItem>
        <br></br>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              Have you ever felt the need to put on a 75 lb backpack and hike
              for 10 miles on a mountain? If yes, we should be friends. For some
              part, I grew up on a farm in the rugedness of Indian{" "}
              <span className="name">Punjab</span>. But I only realised my love
              for <span className="name">the outdoors</span> during college,
              particularly during the COVID pandemic. Today, you'll only find my
              alone in a room when I'm either coding or sleeping. I love to
              travel, explore nature and learn from people of different cultures
              and life experiences. And btw - that first thing is a real sport
              called <span className="name">Rucking</span> :)
            </Text>
          </div>
        </ListItem>
        <br></br>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              How long do you think an idea lives? I believe most of them die no
              sooner than they are born. But the ideas that survive generations,
              millenia even - those ideas are worth learning. These ideas,
              stories and legends <span className="name">- our History - </span>
              , they stay with us and are passed on from generation to
              generation just like our DNA. But unlike DNA, there is no limit to
              who we can them from. Throughout history, there have been ideas
              that are still <span className="name">relevant today</span> - and
              we can learn them from people all around us, and for as long as we
              wish.
            </Text>
          </div>
        </ListItem>
      </UnorderedList>
    </div>
  );
};

export default Background;
