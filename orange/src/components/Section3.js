import React from "react";
import frame from "../icons/Frame.svg";
import vector from "../icons/Vector.svg";
import x3C from "../icons/_x3C_Layer_x3E_.svg";
import Capa_1 from "../icons/Capa_1.svg";
import bgTopLeft from "../photos/Vector 2099.svg";
import bgBottomRight from "../photos/Vector 2097.svg";
import Noise from "../photos/noise.svg";
import Noise2 from "../photos/New.svg"

function Section3() {
  return (
    <div className="relative flex justify-center items-center min-h-screen p-4 overflow-hidden font-clash z-10">
      {/* Background Images */}
      <img src={bgTopLeft} alt="Top Left" className="absolute -top-96 left-0 -z-10 w-1/4 h-auto" />
      <img src={bgBottomRight} alt="Bottom Right" className="absolute -bottom-80 right-0 -z-10 w-1/4 h-auto" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="flex justify-center mb-6 max-sm:mb-0 max-sm:text-sm">
          <div className="w-full max-w-3xl text-center ">
            <h1 className="text-4xl font-semibold text-black max-sm:text-2xl">
              Discover <span className="text-orange-500">Our Services</span> to Suit Your Every Need. We're Your Partners in Success!
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-8 md:mx-auto">
            <div className="flex flex-col space-y-8 mt-[50px] max-sm:gap-y-6 max-sm:p-4 max-sm:mt-[0px] ">
              <div
                className="order-1 w-[360px] max-sm:w-full lg:w-[450px] max-sm:h-auto h-[265px] bg-[#000000] text-white rounded-lg max-sm:order-2 p-2"
                style={{ backgroundImage: `url(${Noise})` }}
              >
                <div className="mt-[32px] mb-[32px] mx-[28px] max-sm:mx-[16px]">
                  <img src={frame} alt="E-commerce" className="mb-[10px] max-sm:w-2/12" />
                  <h2 className="text-lg font-bold w-auto max-sm:text-md">
                    Website Design & Development
                  </h2>
                  <p className="max-sm:text-sm">
                    Crafting digital experiences that captivate and inspire through expert website design and development.
                  </p>
                </div>
              </div>
              <div
                className="order-2 w-[350px] max-sm:w-full lg:w-[450px] h-[265px] max-sm:h-auto bg-[#FF7E00] text-white rounded-lg max-sm:order-1 p-2"
                style={{ backgroundImage: `url(${Noise})` }}
              >
                <div className="mt-[32px] mb-[32px] mx-[28px] max-sm:mx-[16px]">
                  <img src={vector} alt="E-commerce" className="mb-[28px] max-sm:w-2/12" />
                  <h2 className="text-xl font-bold max-sm:text-lg">E-commerce (App + Web)</h2>
                  <p className="max-sm:text-sm">
                    Driving growth with integrated e-commerce solutions across apps and web.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 mt-[42px] max-sm:p-4 max-sm:mt-[0px]">
              <div
                className="order-1 w-[360px] max-sm:w-full lg:w-[450px] h-[265px] max-sm:h-auto bg-[#FF7E00] text-white rounded-lg p-1"
                style={{ backgroundImage: `url(${Noise})` }}
              >
                <div className="mt-[32px] mb-[32px] mx-[28px] max-sm:mx-[16px]">
                  <img src={x3C} alt="E-commerce" className="mb-[20px] max-sm:w-2/12" />
                  <h2 className="text-xl font-bold max-sm:text-lg">Mobile App Development</h2>
                  <p className="max-sm:text-sm">
                    Empowering ideas with seamless mobile app development solutions.
                  </p>
                </div>
              </div>
      <div
  className="order-2 w-[360px] max-sm:w-full lg:w-[450px] h-[265px] max-sm:h-auto bg-custom-gray text-black rounded-lg p-1"
  style={{ 
    background: `url(${Noise2})  center center`,
    backgroundSize: 'cover'
  }}
>
  <div className="mt-[32px] mb-[32px] mx-[28px] max-sm:mx-[16px]">
    <img src={Capa_1} alt="Shopify/WordPress" className="mb-[20px] max-sm:w-1/6" />
    <h2 className="text-xl font-bold max-sm:text-lg">
      Shopify/WordPress Development
    </h2>
    <p className="max-sm:text-sm">
      Tailoring your digital presence with specialized Shopify and WordPress development.
    </p>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
