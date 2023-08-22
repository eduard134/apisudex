/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import beeing from "./images/beeing.jpg";
import { useRouter } from "next/router";
import relation from "./images/handshake.png";
import high_quality from "./images/high-quality.png";
import innovation from "./images/innovation.png";
import quality from "./images/quality.png";
import Footer from "./components/Footer";
import { getTranslatedContent } from "./components/TranslateRoToRu";
import { useLanguage } from "./components/LanguageContext";

const about = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contacte");
  };

  const { language } = useLanguage();
  const content = getTranslatedContent(language);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-4xl font-recoleta">{content.Nav3}</p>
        <p className="text-center text-md font-varela mt-6 leading-5 lg:px-0 px-4">
          {content.Desc_about1} <br /> {content.Desc_about2}
        </p>
        <div className="w-[80%] lg:flex justify-center items-center mt-4 lg:mt-10 block">
          <div className="mb-4 lg:mb-4 h-[80%]  ">
            <Image src={beeing} alt="" className="rounded-xl" />
          </div>
          <div className="px-8">
            <div className="font-varela lg:w-[70%] w-[full] lg:text-start text-center">
              <p className="mb-4">{content.Desc_about3}</p>{" "}
              <p>{content.Desc_about4}</p>
            </div>
            <div className="flex justify-center lg:block">
              <button
                onClick={handleContactClick}
                className="font-varela hover:bg-gradient-to-br hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-500 text-black border-2 border-orange-500 rounded-lg transition duration-300 hover:shadow-md hover:text-white mt-6"
              >
                <p className="px-5 py-3">{content.Btn_about}</p>
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-4xl font-recoleta mt-32 sm:mt-14">
          {content.why}
        </p>
        <div className="lg:flex lg:flex-wrap block justify-center font-varela mt-2 sm:mt-10">
          <div className="bg-[#F9E9B8] lg:w-[34%] h-[full] m-2 mt-10 rounded-xl p-4">
            <div className="lg:w-[3%] w-[17.5%] sm:w-[7.5%] absolute -mt-12 bg-yellow-400 p-3 rounded-xl ml-2">
              <Image src={quality} alt="" />
            </div>
            <div className="mt-4 text-lg font-semibold">
              {content.title_about1}
            </div>
            <div className="mt-4 text-[#475569]">
              {content.data_about1}
            </div>
          </div>
          <div className="bg-[#F9E9B8] lg:w-[34%] h-[full] m-2 mt-10 rounded-xl p-4">
            <div className="lg:w-[3%] w-[17.5%] sm:w-[7.5%] absolute -mt-12 bg-yellow-400 p-3 rounded-xl ml-2">
              <Image src={high_quality} alt="" />
            </div>
            <div className="mt-4 text-lg font-semibold">
              {content.title_about2}
            </div>
            <div className="mt-4 text-[#475569]">
              {content.data_about2}
            </div>
          </div>
          <div className="bg-[#F9E9B8] lg:w-[34%] h-[full] mx-2 mt-10 rounded-xl p-4">
            <div className="lg:w-[3%] w-[17.5%] sm:w-[7.5%] absolute -mt-12 bg-yellow-400 p-3 rounded-xl ml-2">
              <Image src={innovation} alt="" />
            </div>
            <div className="mt-4 text-lg font-semibold">
              {content.title_about3}
            </div>
            <div className="mt-4 text-[#475569]">
              {content.data_about3}
            </div>
          </div>
          <div className="bg-[#F9E9B8] lg:w-[34%] h-[full] mx-2 mt-10 rounded-xl p-4">
            <div className="lg:w-[3%] w-[17.5%] sm:w-[7.5%] absolute -mt-12 bg-yellow-400 p-3 rounded-xl ml-2">
              <Image src={relation} alt="" />
            </div>
            <div className="mt-4 text-lg font-semibold">
              {content.title_about4}
            </div>
            <div className="mt-4 text-[#475569]">
              {content.data_about4}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
