import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
import "./Certificates.css";


SwiperCore.use([Pagination, EffectCoverflow]);

const Certificates = () => {
  return(
    <div className="bg-certificats">
      <p className="heading">Certificates</p>
      <p className="text">My certificates from one of the biggest blockchain academies - Moralis Academy.</p>

      <div className="slideshow">
        <Swiper
          grabCursor={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 75,
            modifier: 6,
            slideShadows: false,
          }}
          pagination={{
            clickable: true, 
            type: "fraction",
          }}
        >
          <SwiperSlide>
            <img src={contract2} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={js} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={react} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={link} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dapp} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={block} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bit} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={beg} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={defi} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dot} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={eth} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contract1} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={security} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Certificates;