import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import beebanner from "../images/bee banner.jpg";
import beebanner1 from "../images/bee banner1.jpg";
import beebanner2 from "../images/bee banner2.jpg";

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
        autoplay={{
          delay: 400000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide className="bg-center bg-cover">
          <div className="w-full h-full relative">
            <Image
              src={beebanner}
              alt=""
              layout="responsive"
              className="block  "
            />
            <div className="text-white absolute top-1/2 left-1/2 transform translate-x-1/4 font-recoleta drop-shadow-2xl fade-in">
              <h1 className="text-[100px] text-[#EEEEEE] font-bold leading-snug">
                ApiSudex
              </h1>
              <span className="text-[20px] text-[#ffda05] leading-6">
                Un producător de încredere <br /> pentru inventar apicol
              </span>
            </div>
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
            <div className="text-white absolute top-1/4 float-left ml-5  font-recoleta drop-shadow-2xl fade-in">
              <h1 className="text-[60px] text-[#ffae00] font-bold leading-sm">
                Descoperă acum{" "}
              </h1>
              <span className="text-[22px] text-[#ffffff]">
                bonusurile și ofertele speciale!
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          <div className="w-full h-full">
            <Image
              src={beebanner2}
              alt=""
              layout="responsive"
              className="block "
            />
            <div className="text-white absolute top-4 right-8 text-right font-recoleta drop-shadow-2xl fade-in">
              <h1 className="text-[40px] text-[#A15E00] font-bold leading-sm">
                Calitatea este fundamentul{" "}
              </h1>
              <span className="text-[22px] text-white">
                {" "}
                pe care ne construim relațiile <br /> de lungă durată cu
                clienții noștri
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
