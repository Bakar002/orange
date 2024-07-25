import React from "react";

import digilligent from "../icons/Digilligent.svg";
import whatsapp from "../icons/whatsapp.svg";

function Header() {
  return (
    <div className="flex justify-between items-center pt-6 px-4 md:px-[83px]">
      <div className="flex items-center">
        <img src={digilligent} alt="App Logo" className="h-12" />
      </div>
      <div className="flex space-x-4">
        <button className="bg-orange-500 text-white py-2 px-4 rounded">
          Get a Quote
        </button>
        <button className="rounded-[6px] bg-[#5BF877] w-10 h-10 flex items-center justify-center">
          <img src={whatsapp} alt="WhatsApp Logo" />
        </button>
      </div>
    </div>
  );
}

export default Header;
