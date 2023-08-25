"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";
import TranslationRoToRu from "./TranslateRoToRu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: React.SetStateAction<string>) => {
    setLanguage(newLanguage);
  };

  const content = getTranslatedContent(language);

  return (
    <div className="left-0 top-0 w-full z-10 mt-5">
      <div className="max-w-[1240px] m-auto sm:mt-4  sm:w-full flex justify-between items-center sm:p-0 p-5 text-dark_purple font-semibold text-lg font-nunito ">
        <Link href="/" className="flex items-center justify-center sm:p-4">
          <Image src="/logo.png" alt="ApiSudex" width={70} height={70} />
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <div
              className={
                router.pathname === "/"
                  ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                  : ""
              }
            >
              <Link href="/">{content.Nav1}</Link>
            </div>
          </li>
          <li className="p-4">
            <div
              className={
                router.pathname === "/shop"
                  ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                  : ""
              }
            >
              <Link href="/shop">{content.Nav2}</Link>
            </div>
          </li>
          <li className="p-4">
            <div
              className={
                router.pathname === "/about"
                  ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                  : ""
              }
            >
              <Link href="/about">{content.Nav3}</Link>
            </div>
          </li>
          <li className="p-4 mr-3">
            <div
              className={
                router.pathname === "/contacte"
                  ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                  : ""
              }
            >
              <Link href="/contacte">{content.Nav4}</Link>
            </div>
          </li>
          <li className=" mr-3">
            <TranslationRoToRu />
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-20">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white z-10 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white z-10 text-center ease-in duration-300"
          }
          onClick={() => setNav(false)}
        >
          <ul>
            <li className="p-4 text-3xl">
              <div
                className={
                  router.pathname === "/"
                    ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                    : ""
                }
              >
                <Link href="/">{content.Nav1}</Link>
              </div>
            </li>
            <li className="p-4 text-3xl">
              <div
                className={
                  router.pathname === "/shop"
                    ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                    : ""
                }
              >
                <Link href="/shop">{content.Nav2}</Link>
              </div>
            </li>
            <li className="p-4 text-3xl">
              <div
                className={
                  router.pathname === "/about"
                    ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                    : ""
                }
              >
                <Link href="/about">{content.Nav3}</Link>
              </div>
            </li>
            <li className="p-4 text-3xl">
              <div
                className={
                  router.pathname === "/contacte"
                    ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                    : ""
                }
              >
                <Link href="/contacte">{content.Nav4}</Link>
              </div>
            </li>
            <li className="ml-14">
              <TranslationRoToRu />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
