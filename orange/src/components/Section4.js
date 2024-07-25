import React from "react";
import Right from "../photos/right2.svg";

function Section4() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-custom text-white py-20 px-8 sm:px-28 text-center w-full h-auto font-clash">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-lg mx-auto">
        <h2 className="text-white text-3xl md:text-[46px] font-semibold font-clash mb-5">
          Get Groovin' Today
        </h2>
        <p className="w-full text-center text-white text-lg md:text-3xl sm:text-xl font-normal font-clash mx-auto mb-14 px-4">
          Ready to rock the digital world? Fill out the form to schedule your free
          consultation and let's get started on your next big idea!
        </p>
        <div className="flex flex-col gap-5">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-md py-3 px-8 rounded-[10px] flex items-center mx-auto whitespace-nowrap">
            <p className="mr-2">Get a Quote</p>
            <img src={Right} alt="Next" className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section4;
