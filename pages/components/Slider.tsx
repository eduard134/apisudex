import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import beebanner from "../images/bee banner.jpg";
import beebanner1 from "../images/bee banner1.jpg";
import beebanner2 from "../images/bee banner2.jpg";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export default function Shop() {
  const { language } = useLanguage();
  const content = getTranslatedContent(language);

  return (
    <div className="h-1/2 mt-5">
      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className=" relative invisible sm:visible sm:w-full sm:h-full"
      >
        <SwiperSlide className="bg-center bg-cover ">
          <div className="w-full h-full relative">
            <Image
              src={beebanner}
              alt=""
              layout="responsive"
              className="block  "
            />
            <div className="text-white absolute top-[60%] sm:top-1/2 left-1/2 transform translate-x-1/4 font-volkron drop-shadow-2xl fade-in">
              <h1 className=" text-xl sm:text-[100px] text-[#EEEEEE] font-bold leading-none sm:leading-snug">
                ApiSudex
              </h1>
              <span className="text-[10px] sm:text-[20px] text-[#ffda05] sm:leading-6 font-nunito font-semibold">
                {content.Slide0} <br /> {content.Slide1}
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
            <div className="text-white absolute top-1/4 float-left ml-5  font-volkron drop-shadow-2xl fade-in">
              <h1 className="text-[60px] text-[#ffae00] font-bold leading-sm">
                {content.Slide2}{" "}
              </h1>
              <span className="text-[22px] text-[#ffffff] font-nunito font-semibold">
                {content.Slide3}
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
            <div className="text-white absolute top-4 right-8 text-right font-volkron drop-shadow-2xl fade-in">
              <h1 className="text-[40px] text-[#A15E00] font-bold leading-sm">
                {content.Slide4}{" "}
              </h1>
              <span className="text-[22px] text-white font-nunito font-semibold">
                {" "}
                {content.Slide6}
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
