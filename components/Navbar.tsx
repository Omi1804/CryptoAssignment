import React from "react";
import styles from "@/styles/headers.module.css";

const Navbar = () => {
  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full px-[5.5rem] flex items-center border-b border-b-[rgba(255,255,255,.15)] justify-center ${styles.navbar}`}
    >
      <div className=" w-[7rem] h-auto object-contain">
        <img
          src="/svgs/logo.svg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mx-6">
        <ul className="flex justify-center items-cente">
          <li className="mx-4 text-[#ffffffb3] text-[1.1rem] font-normal py-[1.3rem] cursor-pointer">
            Compass
          </li>
          <li className="mx-4 text-[#ffffffb3] text-[1.1rem] font-normal py-[1.3rem] cursor-pointer">
            Explore
          </li>
          <li className="mx-4 text-[#ffffffb3] text-[1.1rem] font-normal py-[1.3rem] cursor-pointer">
            Academy
            <span className="bg-[#6434E9] rounded-lg text-white px-2 py-1 text-sm mx-2">
              New
            </span>
          </li>
          <li className="mx-4 text-[#ffffffb3] text-[1.1rem] font-normal py-[1.3rem] cursor-pointer">
            NFTs
          </li>
          <li className="mx-4 text-[#ffffffb3] text-[1.1rem] font-normal py-[1.3rem] cursor-pointer">
            For Projects
          </li>
        </ul>
      </div>

      <div className="bg-[#181818] py-2 px-4 flex items-center justify-center rounded-3xl w-[35%] mx-1 border border-[rgba(255,255,255,.15)]">
        <span className="material-symbols-outlined text-[#fff6] font-light text-[1.7rem]">
          search
        </span>
        <input
          type="text"
          placeholder="Search for ecosystems, trending quests etc..."
          className="bg-transparent outline-none border-none w-full h-full placeholder:text-[#fff6] mx-3 text-[.9rem] font-medium tracking-wide"
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
        <button className="bg-white text-center text-black rounded-md py-[6px] shadow hover:bg-[#dddcdc] px-[24px]  text-[16px] font-medium cursor-pointer transition duration-300">
          Sing In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
