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
    <div className="left-0 top-0 w-full z-10 mt-5">
      <div className="max-w-[1240px] m-auto sm:mt-4  sm:w-full flex justify-between items-center sm:p-0 p-5 text-black  font-medium text-xl ">
        <Link href="/" className="flex items-center sm:p-4">
          <Image src="/logo.png" alt="ApiSudex" width={40} height={40} />
          <p className="bg-cover bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"> ApiSudex</p>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/" className="hover:border-b-4 rounded-lg  hover:border-yellow-500 hover:ease duration-150">Acasă</Link>
          </li>
          <li className="p-4">
            <Link href="/shop" className="hover:border-b-4 rounded-lg  hover:border-yellow-500 hover:ease duration-150">Shop</Link>
          </li>
          <li className="p-4">
            <Link href="/about" className="hover:border-b-4 rounded-lg  hover:border-yellow-500 hover:ease duration-150">Despre Noi</Link>
          </li>
          <li className="p-4 mr-3">
            <Link href="/contacte" className="hover:border-b-4 rounded-lg  hover:border-yellow-500 hover:ease duration-150">Contacte</Link>
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
              <Link href="/" className="hover:border-b-4 rounded-lg  hover:border-yellow-500 hover:ease duration-150">Acasă</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/shop" className="hover:border-b-4 rounded-lg  hover:border-yellow-500 hover:ease duration-150">Shop</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about" className="hover:border-b-4 rounded-lg  hover:border-yellow-500 hover:ease duration-150">Despre Noi</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contacte" className="hover:border-b-4 rounded-lg  hover:border-yellow-500 hover:ease duration-150">Contacte</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
