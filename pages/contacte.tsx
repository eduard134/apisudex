import React, { useState, useEffect } from "react";
import facebook from "../pages/images/facebook1.png";
import instagram from "../pages/images/instagram1.png";
import viber from "../pages/images/viber.png";
import whatsapp from "../pages/images/whatsapp.png";
import Image from "next/image";
import Footer from "./components/Footer";
import EmailForm from "./components/EmailForm";
import Link from "next/link";
import { getTranslatedContent } from "./components/TranslateRoToRu";
import useLanguage from "../public/LanguageContext";

const ComponentName = () => {
  const { language } = useLanguage();
  const content = getTranslatedContent(language);
  return (
    <>
      <p className="font-volkron font-bold text-4xl text-center">
        {content.Btn_about}
      </p>
      <div className="lg:flex block lg:p-16 p-8">
        <div className="left lg:w-[80%] w-full">
          <div className="map w-full h-[80%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2191.6413154079637!2d28.62833713850771!3d46.303605006470754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDE4JzEyLjciTiAyOMKwMzcnNDIuMyJF!5e0!3m2!1sen!2s!4v1692481297652!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl w-full h-full"
            ></iframe>
          </div>
          <div className="mt-12">
            <ul className="wrapper flex items-center justify-center h-12 w-full">
              <Link href="https://www.facebook.com/profile.php?id=61550100853168&mibextid=ZbWKwL">
                <li className="icon relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out">
                  <span className="tooltip_f absolute -top-10 text-sm bg-white text-white font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                    Facebook
                  </span>
                  <Image src={facebook} alt="" className="" />
                </li>
              </Link>
              <Link href="https://www.instagram.com/apisudex.md/">
                <li className="icon instagram relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out     ">
                  <span className="tooltip_i absolute -top-10 text-sm bg-white text-white font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                    Instagram
                  </span>
                  <Image src={instagram} alt="" className="" />
                </li>
              </Link>
              <Link href="https://msng.link/o?37376723462=vi">
                <li className="icon instagram relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out     ">
                  <span className="tooltip_v absolute -top-10 text-sm bg-white text-white font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                    Viber
                  </span>
                  <Image src={viber} alt="" className="" />
                </li>
              </Link>
              <Link href="https://msng.link/o?37376723462=wa">
                <li className="icon instagram relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out     ">
                  <span className="tooltip_w absolute -top-10 text-sm bg-white text-white font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                    WhatsApp
                  </span>
                  <Image src={whatsapp} alt="" className="" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="right font-nunito font-semibold w-full">
          <EmailForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComponentName;
