import React from "react";
import clearCo1 from "../assets/clearCo1.jpg";
import clearCo2 from "../assets/clearCo2.jpg";
import clearCo3 from "../assets/clearCo3.jpg";
import clearCo4 from "../assets/clearCo4.jpg";

export const Staff = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="About">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="grid grid-cols-1 col-span-1 md:grid-cols-2 md:col-span-2">
          <div className="grid grid-cols-2 gap-2 lg:gap-2 ">
            <img
              src={clearCo1}
              alt=""
              className="w-[500px] mx-auto my-4  rounded-lg"
            />
            <img
              src={clearCo2}
              alt=""
              className="w-[500px] mx-auto my-4  rounded-lg"
            />
            <img
              src={clearCo3}
              alt=""
              className="w-[500px] mx-auto my-4 rounded-lg"
            />
            <img
              src={clearCo4}
              alt=""
              className="w-[500px] mx-auto my-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center lg:mx-4 ">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              About ClearCo
            </h1>
            <ul className="list-disc py-2 mx-4  font-medium">
              <li>
                All our staff are fully trained and dedicated in every aspect of
                their job roles and duties.
              </li>
            </ul>
            <ul className="list-disc py-2 mx-4  font-medium">
              <li> Health and Safety is at the core of our business</li>
            </ul>
            <ul className="list-disc py-2 mx-4  font-medium">
              <li>
                We apply the latest techniques and equipment to ensure best
                working practices.
              </li>
            </ul>
            <ul className="list-disc py-2 mx-4  font-medium">
              <li>
                Excellent communication and regular updates with both staff and
                clients.
              </li>
            </ul>
            <ul className="list-disc py-2 mx-4 font-medium">
              <li>Source and purchase from local businesses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
