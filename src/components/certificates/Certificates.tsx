import React, { useEffect, useRef, useState } from "react";
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


SwiperCore.use([Pagination, EffectCoverflow]);

import "./Certificates.css";


const Certificates = () => {

  const [certificates, setCertificates] = useState<any[]>([]);

  const importAll = (r: any) => {
    return r.keys().map(r);
  }

  useEffect(() => {
    let certs = importAll(require.context('./images/', false, /\.(png|jpe?g|svg|pdf)$/));
    setCertificates(certs);
    console.log(certs)
  }, [])

  return(
    <div className="bg-certificats">
      <p className="heading">Certificates</p>
      <p className="text">My certificates from one of the biggest blockchain academies Moralis Academy.</p>

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
          {certificates.map((img: any) => {
            return(
              <SwiperSlide>
                <img src={img} alt="Certificate" className="certificate-img" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

    </div>
  )
}

export default Certificates;