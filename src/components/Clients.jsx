import React from "react";

export const Clients = () => {
  return (
    <div
      id="Clients"
      className="md:h-[500px] w-full py-{10rem] px-4 md:py-16 bg-white pt-4"
    >
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 my-4 flex justify-center">
        Types Of Clients
      </h1>
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-4 gap-6 font-medium text-center mb-4 pb-12">
        <div className="w-full shadow-xl  flex flex-col p-4 md:my-4 rounded-lg bg-[#b5b7b6]">
          <h3 className="p-4 border-b border-gray-600">Retail (various)</h3>
          <h3 className="p-4 border-b border-gray-600">Large Offices</h3>
          <h3 className="p-4">Stadiums</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-[#b5b7b6]">
          <h3 className="p-4 border-b border-gray-600">Apartment Blocks</h3>
          <h3 className="p-4 border-b border-gray-600">Manufacturing</h3>
          <h3 className="p-4">Property Management</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-[#b5b7b6]">
          <h3 className="p-4 border-b border-gray-600">Hotels</h3>
          <h3 className="p-4 border-b border-gray-600">Concert Venue's</h3>
          <h3 className="p-4">Insurance Companies</h3>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg bg-[#b5b7b6]">
          <h3 className="p-4 border-b border-gray-600">Schools</h3>
          <h3 className="p-4 border-b border-gray-600">Construction</h3>
          <h3 className="p-4">Nursing Homes</h3>
        </div>
      </div>
    </div>
  );
};
