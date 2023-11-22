import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-3 items-center border">
      <div className="flex items-center space-x-2">
        <img className="w-10 h-10" src="directright.svg" alt="Logo" />
        <span className="text-2xl font-bold text-[#7E22CE]">LAMA.</span>
      </div>

      <div className="flex items-center">
        <div className="px-2">
          <img className="w-9 h-9" src="Icon.svg" alt="Logo" />
        </div>
        <div className="px-2">
          <img className="w-9 h-9" src="notifications.svg" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
