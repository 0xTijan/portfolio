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

SwiperCore.use([Pagination, EffectCoverflow]);

const Background = () => {
  return (
    <div className="bg-certificats">
      <p className="heading">Who I Am </p>
      <p className="text">A short spiel on my life, I supose ...</p>
      <br></br>
      <UnorderedList>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              Born and brought up in New Delhi, India. My father is a
              Thermofluids engineer, and my mother a marketing professional who
              sacrificed her career early on to focus on her childer. I also
              have a younger brother who has somehow managed to grow taller than
              me :(
            </Text>
          </div>
        </ListItem>
        <br></br>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              Went to D.P.S RK Puram - one of South Asia's most competitive
              schools. Through it's unforgiving rigor, I was able to recognise
              I'm good with all things logic and not wonderful with most things
              that need memorisation. I also love to think about new ideas and
              build them into reality. This informed my entry to the world of
              software and Tech.
            </Text>
          </div>
        </ListItem>
        <br></br>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              Came to Duke in 2018 as an undergrad, also marking my first visit
              to the US. Duke is, and will always be, my first American family.
              Here, I was able to explore who I was and come into myself as a
              thinker and builder. I studied Computer Science, and
              Entrepenruship, and did blockchain research under Dr Campbell R.
              Harvey at the Fuqua School of Business. Through college, I started
              Duke's Sikh Society, learned Krav Maga and grew the Duke
              Blockchain Lab.
            </Text>
          </div>
        </ListItem>
        <br></br>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              For some time, I grew up on a farm. But it was only during
              college, and particularly through the COVID pandemic, that I
              realised my love for the outdoors. Most of it came when I realised
              the just how much I had been taking everything and everyone around
              me for granted. I love to hike ... or it's more outlandish cousing
              ... ruck. So if you ever want to strap on 70 lbs of wieght and
              hike for 10 miles, hmu.
            </Text>
          </div>
        </ListItem>
        <br></br>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              Since graduating, I have been working with the most wonderful team
              of people at DMA labs to build a DeFi liquidity management service
              we call ICHI. The DMA team and I met at a talk in '21, and I
              joined their team just a month later (without ever even applying
              to FAANG or consulting). I work as a backend and Solidity testing
              engineer, but being in a startup - I wear all kinds of hats (or
              turbans in my case) depending on the occassion.
            </Text>
          </div>
        </ListItem>
        <br></br>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              I thnk of myself as a lifelong learner, and have been researching
              the bleeding edge of technology in web3 as well. To that end, I am
              grateful to be a part of Outliers DAO, and for the enlightening
              fellowship I was able to do at Floodgate Fund under Ann and Tyler.
              I am currently diving deep into the world of ZK proofs.
            </Text>
          </div>
        </ListItem>
        <br></br>
      </UnorderedList>
    </div>
  );
};

export default Background;
