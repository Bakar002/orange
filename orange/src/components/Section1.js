import React from "react";

import mylogo from "../photos/MV LOGO -01.svg";
import DMW from "../photos/DMW-Elements-01.svg";
import Dolanto from "../photos/Dolanto-dp.svg";
import layer1 from "../photos/Layer_1.svg";
import newlogo from "../photos/New logo.svg";

function Section1() {
  return (
    <div className="w-full  p-16 flex items-center flex-col lg:flex-row px-4 md:px-[104px]">
      <div className="w-full md:w-[50%] text-center md:text-left mt-[45px] 2xl:mt-10 sec-1">
      <h1 className="w-full text-black font-clash leading-normal 
              text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[52px] 2xl:text-7xl 
              font-semibold mb-[20px]">
  Ready to shake up your online presence?
</h1>


        <p className="w-full  mb-5 text-black font-aeonik text-[18px] 2xl:text-[20px] leading-[29px]">
          We specialize in transforming ideas into engaging digital experiences.
          Whether you're looking to launch a stunning website, develop a
          cutting-edge mobile app, or expand your e-commerce presence, we have
          the tools and expertise to make it happen.
        </p>
        <p className="mb-5 text-black font-aeonik text-[18px] font-bold">
          Brands we boast about
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <img src={mylogo} alt="Brand Logo 1" className="h-7  sm:h-12" />
          <img src={DMW} alt="Brand Logo 2" className="h-7  sm:h-12" />
          <img src={newlogo} alt="Brand Logo 3" className="h-7  sm:h-12" />
          <img src={layer1} alt="Brand Logo 4" className="h-7  sm:h-12" />
          <img src={Dolanto} alt="Brand Logo 5" className="h-7  sm:h-12" />
        </div>
      </div>

      <div className=" w-full lg:w-[50%]  mt-[-85px] max-md:mt-[15px] max-lg:mt-[20px] 2xl:mt-0 " id="quoteForm" >
        <div className="w-full md:pl-[37px] md:mt-[50px]  ">
          <div className="absolute top-0 left-0 w-full  bg-black rounded-[20px] z-0 transform translate-x-2 translate-y-2  "></div>
          <div className="bg-white p-8 shadow-dark rounded-3xl relative z-10 w-full ">
            <h2 className="text-2xl font-bold text-orange-500 mb-4" >
              Kickstart <span className="text-black"> your business!! </span>
            </h2>
            <p className="mb-4 text-gray-700">
              Fill in the details below and our team will get back to you in no
              time
            </p>
            <form >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="What should we call you?"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Don't worry, we won't spam!"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Company</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Share your company name!"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Number</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Your number for a quick call?"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold">Services</label>
                  <select className="w-full p-2 border border-gray-300 rounded mt-1">
                    <option>
                      Pick your upgrades! Which of our services excites you?
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded  mt-4"
              >
                Get a Quote
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
