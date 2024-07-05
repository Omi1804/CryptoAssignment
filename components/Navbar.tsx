import React from "react";

const Navbar = () => {
  return (
    <nav className="border top-0 left-0 w-full px-[5rem] flex items-center">
      <div className=" w-[7rem] h-auto object-contain">
        <img
          src="/svgs/logo.svg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mx-6">
        <ul className="flex justify-center items-cente">
          <li className="mx-5 text-[#ffffffb3] text-lg font-normal py-7 cursor-pointer">
            Compass
          </li>
          <li className="mx-5 text-[#ffffffb3] text-lg font-normal py-7 cursor-pointer">
            Explore
          </li>
          <li className="mx-5 text-[#ffffffb3] text-lg font-normal py-7 cursor-pointer">
            Academy
            <span className="bg-[#6434E9] rounded-3xl text-white px-2 py-1 text-sm mx-2">
              New
            </span>
          </li>
          <li className="mx-5 text-[#ffffffb3] text-lg font-normal py-7 cursor-pointer">
            NFTs
          </li>
          <li className="mx-5 text-[#ffffffb3] text-lg font-normal py-7 cursor-pointer">
            For Projects
          </li>
        </ul>
      </div>

      <div className="bg-[#181818] py-3 px-4 flex items-center justify-center rounded-3xl w-[33%] mx-1">
        <span className="material-symbols-outlined text-[#fff6]">search</span>
        <input
          type="text"
          placeholder="Search for ecosystems, trending quests etc."
          className="bg-transparent outline-none border-none w-full h-full placeholder:text-[#fff6] mx-3"
        />
      </div>

      <div className="border-2 border-[#fa8922] w-[3rem] h-[3rem] rounded-full object-cover flex items-center justify-center p-3 mx-3">
        <img
          src="/svgs/tvicon.svg"
          alt="tc"
          className="object-cover h-full w-full"
        />
      </div>

      <div>
        <button className="bg-white text-black rounded-md py-[7px] px-[24px]  text-[17px] font-medium cursor-pointer">
          Sing In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
