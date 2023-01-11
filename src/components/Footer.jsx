import React from "react";
import Logo from "../assets/ClearCoLogo.png";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      id="Contact"
      className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8"
    >
      <div>
        <img className=" w-40  mt-[1rem]" src={Logo} alt="/" />
        <div className="flex md:w-[75%] my-6 gap-2">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium ">Address:</h6>
          <ul>
            <li className="py-2 text-sm">Clearco Cleaning Services Ltd </li>
            <li className="py-2 text-sm">Enterprise House 2-4 Balloo Ave </li>
            <li className="py-2 text-sm">Bangor</li>
            <li className="py-2 text-sm">BT19 7QT</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium ">Contact:</h6>
          <ul>
            <li className="py-2 text-sm">Phone:</li>
            <li className="py-2 text-sm">07889491073</li>
            <li className="py-2 text-sm">Email:</li>
            <li className="py-2 text-sm">info@clearcocleaningservices.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
