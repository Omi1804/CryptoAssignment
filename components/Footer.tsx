import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(255,255,255,.15)] my-10 px-[6rem] py-[1rem]">
      <div className="flex border-b border-[rgba(255,255,255,.15)] py-5 mb-3">
        <div className="w-[33%] py-3">
          <div className=" w-[7rem] h-auto object-contain my-4">
            <img
              src="/svgs/logo.svg"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[#7d7d7d] my-7 font-medium text-base w-[80%]">
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </div>
        </div>
        <div className="w-[15%]  p-3">
          <h2 className="text-lg font-medium">INTRACT</h2>
          <ul>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Explore Quests
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Comunities
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Alpha Hub
            </li>
          </ul>
        </div>
        <div className="w-[15%]  p-3">
          <h2 className="text-lg font-medium">Earn</h2>
          <ul>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Refer & Earn
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Leaderboard
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Achievements
            </li>
          </ul>
        </div>
        <div className="w-[15%]  p-3">
          <h2 className="text-lg font-medium">About</h2>
          <ul>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Product Roadmap
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Affiliate Program
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Sign up Program
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Growth Community
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Blogs
            </li>
          </ul>
        </div>
        <div className="w-[20%]  p-3">
          <h2 className="text-lg font-medium">Support</h2>
          <ul>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Help Center
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Create your quest
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Terms of Service
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Privacy Policy
            </li>
            <li className="text-[#7d7d7d] text-base font-medium my-3 cursor-pointer hover:text-white duration-300">
              Community Guidelines
            </li>
          </ul>
        </div>
      </div>

      <div className="py-10 border-b border-[rgba(255,255,255,.15)] mb-3">
        <p className="w-[95%] text-[#7d7d7d]  font-medium text-[1.03rem]">
          <span className="text-[#ffffffbe] ">Disclaimer: </span>
          Crypto Products, Virtual Digital Assets, and NFTs are unregulated and
          can be highly risky. There may be no regulatory recourse for any loss
          from such transactions. We advise the viewer to proceed with caution.
          Nothing in this website or any communication published by us amounts
          to, is intended to be, or should be construed as investment or
          purchase advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </p>
      </div>

      <div className="mt-14 mb-7 flex items-center justify-between">
        <div className="text-lg font-medium text-white">
          CREATED BY
          <span className="underline hover:text-[#7d7d7d] duration-300 cursor-pointer mx-1">
            INTRACT
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-[2.7rem] h-[2.7rem] bg-[#1a1a1a] rounded-lg cursor-pointer"></div>
          <div className="w-[2.7rem] h-[2.7rem] bg-[#1a1a1a] rounded-lg cursor-pointer"></div>
          <div className="w-[2.7rem] h-[2.7rem] bg-[#1a1a1a] rounded-lg cursor-pointer"></div>
          <div className="w-[2.7rem] h-[2.7rem] bg-[#1a1a1a] rounded-lg cursor-pointer"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
