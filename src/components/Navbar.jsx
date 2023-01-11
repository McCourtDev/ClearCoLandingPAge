import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/ClearCoLogo.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text=white">
      <img className=" w-40  mt-[1rem]" src={Logo} alt="/" />
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#Hero">Home</a>
        </li>
        <li className="p-4">
          <a href="#About">About</a>
        </li>
        <li className="p-4">
          <a href="#Services">Services</a>
        </li>
        <li className="p-4">
          <a href="#Clients">Clients</a>
        </li>
        <li className="p-4">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#c2c5c4] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className=" uppercase p-4">
          <img className=" w-40  mt-[1rem]" src={Logo} alt="/" />
          <li className="p-4 border-b border-gray-600 text-black">
            <a href="#Hero">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600 text-black">
            <a href="#About">About</a>
          </li>
          <li className="p-4 border-b border-gray-600 text-black">
            <a href="#Services">Services</a>
          </li>
          <li className="p-4 border-b border-gray-600 text-black">
            <a href="#Clients">Clients</a>
          </li>
          <li className="p-4  text-black">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
