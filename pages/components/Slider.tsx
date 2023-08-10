import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import beebanner from "./images/components/bee-banner.jpg";
import beebanner1 from "./images/components/bee-banner1.jpg";
import beebanner2 from "./images/components/bee-banner2.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export default function Shop() {
  return (
    <div className="h-1/2 mt-5">
      <Swiper
        spaceBetween={30}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide className="bg-center bg-cover">
          <div className="w-full h-full">
            <Image
              src={beebanner}
              alt=""
              layout="responsive"
              className="block"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          <div className="w-full h-full">
            <Image
              src={beebanner1}
              alt=""
              layout="responsive"
              className="block"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          <div className="w-full h-full">
            <Image
              src={beebanner2}
              alt=""
              layout="responsive"
              className="block"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
