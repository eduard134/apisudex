import React, { useState, useEffect } from "react";
import facebook from "../pages/images/facebook1.png";
import instagram from "../pages/images/instagram1.png";
import viber from "../pages/images/viber.png";
import whatsapp from "../pages/images/whatsapp.png";
import Image from "next/image";
import Footer from "./components/Footer";
import EmailForm from "./components/EmailForm";

const ComponentName = () => {
  return (
    <>
      <p className="font-recoleta text-4xl text-center">Contactați-ne</p>
      <div className="flex p-16 ">
        <div className="left">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2191.6413154079637!2d28.62833713850771!3d46.303605006470754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDE4JzEyLjciTiAyOMKwMzcnNDIuMyJF!5e0!3m2!1sen!2s!4v1692481297652!5m2!1sen!2s"
              width="650"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="mt-12">
            <ul className="wrapper flex items-center justify-center h-12 w-full">
              <li className="icon relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out">
                <span className="tooltip_f absolute -top-10 text-sm bg-white text-white font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                  Facebook
                </span>
                <Image src={facebook} alt="" className="" />
              </li>
              <li className="icon instagram relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out     ">
                <span className="tooltip_i absolute -top-10 text-sm bg-white text-white font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                  Instagram
                </span>
                <Image src={instagram} alt="" className="" />
              </li>
              <li className="icon instagram relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out     ">
                <span className="tooltip_v absolute -top-10 text-sm bg-white text-white font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                  Viber
                </span>
                <Image src={viber} alt="" className="" />
              </li>
              <li className="icon instagram relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out     ">
                <span className="tooltip_w absolute -top-10 text-sm bg-white text-white font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                  WhatsApp
                </span>
                <Image src={whatsapp} alt="" className="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="right font-varela w-full">
          <EmailForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComponentName;
