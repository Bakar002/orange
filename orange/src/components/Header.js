import React from "react";

import digilligent from "../icons/Digilligent.svg";
import whatsapp from "../icons/whatsapp.svg";
import "./Header.css"
function Header() {
  
  return (
    <div className="flex justify-between items-center pt-2 px-4 md:px-[83px]">
      <div className="flex items-center">
        <img src={digilligent} alt="App Logo" className="h-18" />
      </div>
      <div className="flex space-x-4">
        
      <a href="#quoteForm" class="button ">
  Get a Quote
</a>


        <button className="rounded-[6px] bg-[#5BF877] w-10 h-10 flex items-center justify-center">
          <img src={whatsapp} alt="WhatsApp Logo" />
        </button>
      </div>
    </div>
  );
}

export default Header;
