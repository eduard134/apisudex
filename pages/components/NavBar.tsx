"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="left-0 top-0 w-full z-10 ease-in duration-300 ">
      <div className=" max-w-[1240px] m-auto sm:mt-4 sm:w-8/12 flex justify-between items-center sm:p-0 p-5 text-black  font-medium text-xl  sm:border-2 border-solid border-[#e6e5e2]-400 rounded-[50px]">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="A&D" width={100} height={100} />
          <p> ApiSudex</p>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Acasă</Link>
          </li>
          <li className="p-4">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="p-4">
            <Link href="/about">Despre Noi</Link>
          </li>
          <li className="p-4">
            <Link href="/contacte">Contacte</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Acasă</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/shop">Shop</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about">Despre Noi</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contacte">Contacte</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
