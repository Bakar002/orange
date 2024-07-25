import React from "react";

function Section2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-center py-8 bg-white mx-4 md:mx-[229.5px]">
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-4xl font-bold text-orange-500">
          550+
        </span>
        <span className="text-sm md:text-lg text-gray-700">Happy Clients</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-4xl font-bold text-orange-500">
          550+
        </span>
        <span className="text-sm md:text-lg text-gray-700 text-center">
          Digital Masterpiece Crafted
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-4xl font-bold text-orange-500">
          15+
        </span>
        <span className="text-sm md:text-lg text-gray-700 text-center">
          Web design experts onboard
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-4xl font-bold text-orange-500">
          14+
        </span>
        <span className="text-sm md:text-lg text-gray-700 text-center">
          Years of industry experience
        </span>
      </div>
    </div>
  );
}

export default Section2;
