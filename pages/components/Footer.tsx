import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import insta from "../images/instagram.png";
import facebook from "../images/facebook.png";
import viber from "../images/viber1.png";
import whatsapp from "../images/whatsapp1.png";
import insta_hover from "../images/instagram_hover.png";
import face_hover from "../images/facebook_hover.png";
import viber_hover from "../images/viber1_hover.png";
import whatsapp_hover from "../images/whatsapp1_hover.png";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverStates, setHoverStates] = useState([false, false, false, false]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleIconHover = (index: number, isHovered: boolean) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = isHovered;
    setHoverStates(newHoverStates);
  };

  const { language } = useLanguage();
  const content = getTranslatedContent(language);

  return (
    <>
      <hr className="bg-yellow-500 h-[3px] mr-6 ml-8 mt-10" />
      <div className="bottom-0 flex flex-col sm:flex-row justify-between text-[#2b2c3d] sm:py-6 py-5 lg:p-10 items-center">
        <div className="flex justify-center items-center flex-col sm:ml-10">
          <h1 className="mb-4 flex justify-center text-2xl sm:text-xl lg:text-2xl font-semibold uppercase md:justify-start font-volkron">
            {content.Social}
          </h1>
          <div className="flex gap-4 ml-2">
            <Link href="https://www.instagram.com/apisudex.md/">
              <Image
                src={hoverStates[0] ? insta_hover : insta}
                alt="instagram"
                width={30}
                height={30}
                className="mb-2 transform hover:scale-110 transition-all duration-150 linear"
                onMouseEnter={() => handleIconHover(0, true)}
                onMouseLeave={() => handleIconHover(0, false)}
              />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61550100853168&mibextid=ZbWKwL">
              <Image
                src={hoverStates[1] ? face_hover : facebook}
                alt="facebook"
                width={30}
                height={30}
                className="filter transform hover:scale-110 transition-all duration-150 linear"
                onMouseEnter={() => handleIconHover(1, true)}
                onMouseLeave={() => handleIconHover(1, false)}
              />
            </Link>
            <Link href="https://msng.link/o?37376723462=vi">
              <Image
                src={hoverStates[2] ? viber_hover : viber}
                alt="viber"
                width={30}
                height={30}
                className="filter transform hover:scale-110 transition-all duration-150 linear"
                onMouseEnter={() => handleIconHover(2, true)}
                onMouseLeave={() => handleIconHover(2, false)}
              />
            </Link>
            <Link href="https://msng.link/o?37376723462=wa">
              <Image
                src={hoverStates[3] ? whatsapp_hover : whatsapp}
                alt="facebook"
                width={30}
                height={30}
                className="filter transform hover:scale-110 transition-all duration-150 linear"
                onMouseEnter={() => handleIconHover(3, true)}
                onMouseLeave={() => handleIconHover(3, false)}
              />
            </Link>
          </div>
        </div>
        <div className={isMobile ? "mt-10 sm:mt-0" : "mt-0 sm:ml-10"}>
          <h1 className="mb-3 text-2xl sm:text-xl lg:text-2xl flex justify-center font-semibold uppercase font-volkron">
            {content.Menu}
          </h1>
          <div className="relative text-center lg:text-start font-nunito font-semibold mb-1 sm:mb-3">
            <Link href="/" className="hover:text-yellow-400 group">
              {content.Nav1}
              <div className="hover-circle bg-yello"></div>
            </Link>
          </div>
          <div className="relative text-center lg:text-start font-nunito font-semibold mb-1 sm:mb-3">
            <Link href="/shop" className="hover:text-yellow-400 group">
              {content.Nav2}
              <div className="hover-circle bg-yello"></div>
            </Link>
          </div>
          <div className="relative text-center lg:text-start font-nunito font-semibold mb-1 sm:mb-3">
            <Link href="/about" className="hover:text-yellow-400 group">
              {content.Nav3}
              <div className="hover-circle bg-yello"></div>
            </Link>
          </div>
          <div className="relative text-center lg:text-start font-nunito font-semibold ">
            <Link href="/contacte" className="hover:text-yellow-400 group">
              {content.Nav4}
              <div className="hover-circle bg-yello"></div>
            </Link>
          </div>
        </div>
        <div className={isMobile ? "mt-10 sm:mt-0" : "mt-0 sm:ml-10"}>
          <h6 className="mb-4 text-2xl sm:text-xl lg:text-2xl flex justify-center font-semibold uppercase md:justify-start font-volkron">
            {content.Contact}
          </h6>
          <div className="mr-10">
            {/* adress */}
            <p className="mb-2 sm:mb-4 ml-2 sm:ml-0 flex items-center justify-center md:justify-start font-nunito font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Tretiacova 129, Comrat, Moldova
            </p>
            {/* mail */}
            <p className="mb-2 sm:mb-4 ml-2 sm:ml-0 flex items-center justify-center md:justify-start font-nunito font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              apisudex@gmail.com
            </p>
            {/* tel */}
            <p className="mb-2 sm:mb-4 flex ml-2 sm:ml-0 items-center justify-center md:justify-start font-nunito font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              + 373 767 234 62
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-yellow-500 h-[3px] mr-6 ml-8 " />
      <div className="p-6 text-center flex-col flex sm:flex-row sm:justify-between">
        <p className="font-semibold ml-2 text-gray-500 font-nunito">
          {content.Copyright}
        </p>
        <Link
          href="/"
          className="flex items-center justify-center mt-3 sm:mt-0 sm:p-0"
        >
          <Image src="/logo.png" alt="ApiSudex" width={40} height={70} />
        </Link>
      </div>
    </>
  );
};

export default Footer;
