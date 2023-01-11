import React from "react";

export const Services = () => {
  return (
    <div
      id="Services"
      className=" md:h-[500px] w-full py-{10rem] px-4 md:py-16 pb-4"
    >
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 my-4 flex justify-center">
        Our Services
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-6 font-medium text-center mb-4">
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-white">
          <h3>Window Cleaning</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-white">
          <h3>High Level Cleaning</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-white">
          <h3>Power Washing</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-white">
          <h3>Roof and Gutter Cleaning</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-white">
          <h3>Builders Cleans</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-white">
          <h3>Pre Opening Cleans</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-white">
          <h3>Solar Panel Cleaning</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-white">
          <h3>Carpark Cleaning</h3>
        </div>
      </div>
    </div>
  );
};
