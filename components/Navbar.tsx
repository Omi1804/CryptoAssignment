import React from "react";
import styles from "@/styles/headers.module.css";

const Navbar = () => {
  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full px-[3rem] md:px-[5.5rem] flex items-center border-b border-b-[rgba(255,255,255,.15)] justify-between md:justify-center    ${styles.navbar}`}
    >
      <div className=" w-[6.4rem] mr-2 h-auto object-contain">
        <img
          src="/svgs/logo.svg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mx-6  hidden lg:block">
        <ul className="flex justify-center items-center gap-4">
          <li className="mx-1 flex-shrink-0  text-center text-[#ffffffb3] text-[1rem] font-medium py-[1.2rem] cursor-pointer">
            Compass
          </li>
          <li className="mx-1 flex-shrink-0  text-center text-[#ffffffb3] text-[1rem] font-medium py-[1.2rem] cursor-pointer">
            Explore
          </li>
          <li className="mx-1 flex-shrink-0 text-center text-[#fff] text-[1rem] font-medium py-[1.2rem] cursor-pointer">
            Academy
            <span className="bg-[#6434E9] rounded-lg text-white px-2 py-1 text-sm mx-2">
              New
            </span>
          </li>
          <li className="mx-1 flex-shrink-0  text-center text-[#ffffffb3] text-[1rem] font-medium py-[1.2rem] cursor-pointer">
            NFTs
          </li>
          <li className="mx-1 flex-shrink-0  text-center text-[#ffffffb3] text-[1rem] font-medium py-[1.2rem] cursor-pointer">
            For Projects
          </li>
        </ul>
      </div>

      <div className="bg-[#181818] my-1 py-2 px-3 flex items-center justify-center rounded-3xl lg:w-[35%] w-[70%] mx-5 lg:mx-1 border border-[#ffffff11]">
        <span className="material-symbols-outlined text-[#fff6] font-light text-[1.6rem]">
          search
        </span>
        <input
          type="text"
          placeholder="Search for ecosystems, trending quests etc..."
          className="bg-transparent outline-none border-none w-full h-full placeholder:text-[#fff6] mx-3 text-[.8rem] font-medium tracking-wide"
        />
      </div>

      <div className="border-2 flex-shrink-0  border-[#fa8a229f] w-[2.8rem] h-[2.8rem] rounded-full object-cover hidden lg:flex items-center justify-center p-3 mx-3">
        <img
          src="/svgs/tvicon.svg"
          alt="tc"
          className="object-cover h-full w-full"
        />
      </div>

      <div>
        <button className="bg-white text-center w-[6rem] text-black rounded-md py-[5px] shadow hover:bg-[#dddcdc]  text-[15px] font-semibold cursor-pointer transition duration-300 tracking-wide">
          Sing In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
