import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import insta from "../images/instagram.png";
import facebook from "../images/facebook.png";
import viber from "../images/viber1.png";
import whatsapp from "../images/whatsapp1.png";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <hr className="bg-yellow-500 h-[3px] mr-6 ml-8 mt-10" />
      <div className="bottom-0 flex flex-col sm:flex-row justify-between text-[#2b2c3d] p-5 sm:p-10 items-center">
        <div className="flex justify-center items-center flex-col sm:ml-10">
          <h1 className="mb-4 flex justify-center text-2xl font-semibold uppercase md:justify-start font-recoleta">
            SOCIAL
          </h1>
          <div className="flex gap-2 ml-2">
            <Link href="/">
              <Image
                src={insta}
                alt="instagram"
                width={30}
                height={30}
                className="mb-2 filter hover:invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] hover:invert-[55%] hover:saturate-[5963%] hover:hue-rotate-[179deg] hover:brightness-[92%] hover:contrast-[73%] transform hover:scale-110 transition-all duration-150 linear"
              />
            </Link>
            <Link href="/">
              <Image
                src={facebook}
                alt="facebook"
                width={30}
                height={30}
                className="filter hover:invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] hover:invert-[55%] hover:saturate-[5963%] hover:hue-rotate-[179deg] hover:brightness-[92%] hover:contrast-[73%] transform hover:scale-110 transition-all duration-150 linear"
              />
            </Link>
            <Link href="/">
              <Image
                src={viber}
                alt="facebook"
                width={30}
                height={30}
                className="filter hover:invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] hover:invert-[55%] hover:saturate-[5963%] hover:hue-rotate-[179deg] hover:brightness-[92%] hover:contrast-[73%] transform hover:scale-110 transition-all duration-150 linear"
              />
            </Link>
            <Link href="/">
              <Image
                src={whatsapp}
                alt="facebook"
                width={30}
                height={30}
                className="filter hover:invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] hover:invert-[55%] hover:saturate-[5963%] hover:hue-rotate-[179deg] hover:brightness-[92%] hover:contrast-[73%] transform hover:scale-110 transition-all duration-150 linear"
              />
            </Link>
          </div>
        </div>
        <div className={isMobile ? "mt-5 sm:mt-0" : "mt-0 sm:ml-10"}>
          <h1 className="mb-4 flex justify-center text-2xl font-semibold uppercase md:justify-start font-recoleta">
            Menu
          </h1>
          <div className="relative font-varela mb-2 sm:mb-3">
            <Link href="/" className="hover:text-yellow-400 group">
              Acasă
              <div className="hover-circle bg-yello"></div>
            </Link>
          </div>
          <div className="relative font-varela mb-2 sm:mb-3">
            <Link href="/shop" className="hover:text-yellow-400 group">
              Shop
              <div className="hover-circle bg-yello"></div>
            </Link>
          </div>
          <div className="relative font-varela mb-2 sm:mb-3">
            <Link href="/about" className="hover:text-yellow-400 group">
              Despre Noi
              <div className="hover-circle bg-yello"></div>
            </Link>
          </div>
          <div className="relative font-varela ">
            <Link href="/contacte" className="hover:text-yellow-400 group">
              Contacte
              <div className="hover-circle bg-yello"></div>
            </Link>
          </div>
        </div>
        <div className={isMobile ? "mt-5 sm:mt-0" : "mt-0 sm:ml-10"}>
          {/* contact title */}
          <h6 className="mb-4 flex justify-center text-2xl font-semibold uppercase md:justify-start font-recoleta">
            Contact
          </h6>
          <div className="mr-10">
            {/* adress */}
            <p className="mb-4 flex items-center justify-center md:justify-start font-varela">
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
            <p className="mb-4 flex items-center justify-center md:justify-start font-varela">
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
            <p className="mb-4 flex items-center justify-center md:justify-start font-varela">
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
      <div className=" p-6 text-center  flex justify-between">
        <p className="font-semibold ml-2 text-gray-500 font-varela">
          © 2023 ApiSudex eCommerce Group, All Rights Reserved
        </p>
        <Link href="/" className="flex items-center sm:p-0">
          <Image src="/logo.png" alt="ApiSudex" width={30} height={30} />
          <p className="bg-cover bg-clip-text text-transparent font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 font-varela">
            ApiSudex
          </p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
