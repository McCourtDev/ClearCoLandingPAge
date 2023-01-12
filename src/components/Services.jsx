import React from "react";

export const Services = () => {
  return (
    <div
      id="Services"
      className=" md:h-[50%] w-full py-{10rem] px-4 md:py-16 pb-4"
    >
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 my-4 flex justify-center">
        Our Services
      </h1>
      <div className="flex justify-center md:w-[50%] text-center mx-auto">
        <p className="py-2 my-4 flex justify-center font-medium">
          At ClearCo Cleaning Services, we specialize in providing top-notch
          commercial window cleaning and general cleaning services. Our team of
          experienced and skilled professionals use the latest techniques and
          equipment to ensure that your windows and facilities are left
          sparkling clean. Whether you need one-time service or ongoing
          maintenance, we have a solution to meet your needs. We also offer
          customized cleaning plans to fit the unique requirements of your
          business. Trust us to keep your commercial space looking its best, and
          enhance the image of your company. Contact us today to schedule your
          next cleaning service.
        </p>
      </div>
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
