import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <div className="text-black" id="Hero">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" uppercase font-bold p-2">
          Clearco Cleaning Services provides
        </p>
        <h1 className="md:text-5xl sm:text-4xl text-4xl font-bold mx-4 md:py-8">
          Commercial window cleaning and cleaning services throughout Northern
          Ireland.
        </h1>
        <div className="flex justify-center items-center">
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "Window Cleaning",
              "High Level Cleaning",
              "Power Washing",
              "Builders Cleans",
              "And More",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className="md:text-5xl sm:text-4xl text-xl font-bold md:py-6"></p>
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df98bb] shadow-lg">
          Contact
        </button>
      </div>
    </div>
  );
};
