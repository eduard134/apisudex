import React from "react";
import facebook from "../pages/images/facebook.png";
import instagram from "../pages/images/instagram.png";
import Image from "next/image";

const ComponentName = () => {
  return (
    <>
      <p className="font-recoleta text-4xl text-center">Contactați-ne</p>
      <div className="flex p-16">
        <div className="left">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.409353302793!2d28.651426975908052!3d46.30170717717151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9df555fe6dec3%3A0xa392f947c29c702e!2sStradela%20Tretiacov%20129%2C%20Comrat%2C%20Moldova!5e0!3m2!1sen!2s!4v1692304649697!5m2!1sen!2s"
              width="650"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="mt-12">
            <ul className="wrapper flex items-center justify-center h-12 w-full">
              <li className="icon relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out">
                <span className="tooltip_f absolute -top-10 text-sm bg-white text-black font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                  Facebook
                </span>
                <Image src={facebook} alt="" className="p-3" />
              </li>
              <li className="icon instagram relative bg-white rounded-full m-2 w-12 h-12 text-center text-xl flex justify-center items-center flex-col shadow-md cursor-pointer transition-all duration-200 ease-in-out     ">
                <span className="tooltip_i absolute -top-10 text-sm bg-white text-black font-varela px-2 py-1 rounded-md shadow-md opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
                  Instagram
                </span>
                <Image src={instagram} alt="" className="p-3" />
              </li>
            </ul>
          </div>
        </div>
        <div className="right font-varela">
          <div className="px-8 flex-row">
            <p className="mb-2">Name:</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type now..."
              required
              className="py-2 px-6 border-solid border-2 border-black rounded-md w-[30vw]"
            />
            <p className="mb-2 mt-6">Email:</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your address..."
              required
              className="py-2 px-6 border-solid border-2 border-black rounded-md w-[30vw]"
            />
            <p className="mb-2 mt-6">Message:</p>
            <textarea
              id="message"
              name="message"
              placeholder="Type a text message..."
              required
              className="py-2 px-6 border-solid border-2 border-black rounded-md w-[30vw] h-[15vh]"
            />

            <button
              type="submit"
              className="py-2 px-6 border-solid border-2 border-black rounded-md w-[30vw] mt-4 bg-gradient-to-br from-orange-500 to-yellow-500 transition-shadow-transform duration-150 ease-linear hover:shadow-lg hover:scale-105
        "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentName;
