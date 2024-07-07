import React from "react";
import styles from "@/styles/paths.module.css";

const Path3 = () => {
  return (
    <div className=" px-7 pb-10 max-w-[1200px] mx-auto relative">
      {/* Svgs  */}
      <div className=" w-[55rem] top-[-43%] left-[-19%] absolute hidden lg:block ">
        <img src="/svgs/path3.svg" alt="" className="w-full h-full " />
      </div>
      <div className={`w-[730px]  lg:ml-auto relative lg:flex`}>
        <div className="w-[330px] mx-auto lg:mx-0">
          <div className="py-2 px-3 border  border-[#ffffff17] rounded-xl bg-[#ffffff11]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#fa8922] font-light text-lg">
                pace
              </span>
              <p className="text-[#ffffff52] tracking-wide font-medium text-sm">
                Reward unlocks in
              </p>
            </div>

            <div className="w-full border-t border-dashed border-[#ffffff80] my-4"></div>

            <div
              className={`border  px-2 py-1 rounded-xl relative  ${styles.dottedBg}`}
            >
              <img src="/dottedbg.png" alt="" className="w-full h-full" />
              <div className="absolute w-full h-full top-0 left-0 px-2 py-1 flex justify-around items-center">
                <p className="flex flex-col justify-center items-center">
                  <span className="text-3xl text-[#ffffff90] font-medium">
                    00
                  </span>
                  <span className="text-[#ffffff21] text-base font-medium">
                    Days
                  </span>
                </p>
                <p className="flex flex-col justify-center items-center">
                  <span className="text-3xl text-[#ffffff90] font-medium">
                    12
                  </span>
                  <span className="text-[#ffffff21] text-base font-medium">
                    Hours
                  </span>
                </p>
                <p className="flex flex-col justify-center items-center">
                  <span className="text-3xl text-[#ffffff90] font-medium">
                    06
                  </span>
                  <span className="text-[#ffffff21] text-base font-medium">
                    Mins
                  </span>
                </p>
                <p className="flex flex-col justify-center items-center">
                  <span className="text-3xl text-[#ffffff90] font-medium">
                    32
                  </span>
                  <span className="text-[#ffffff21] text-base font-medium">
                    Secs
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-2 border  border-[#ffffff17] rounded-xl bg-[#ffffff0b] ">
            <div className="border p-2 border-[#ffffff17] w-full bg-[#0000002d] rounded-xl overflow-hidden">
              <img
                src="/pathGif.gif"
                alt=""
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <div className="flex items-center justify-between my-1 p-1">
              <p className="text-[#ffffff52] font-medium text-lg">
                Exclusive Community
              </p>
              <p className="text-white text-lg">Earndrop</p>
            </div>

            <div className="w-full border-t border-dashed border-[#ffffff80] my-3"></div>

            <div>
              <div className="flex items-center justify-between">
                <p className="text-[#ffffff52] text-sm">
                  Complete all Essential quests
                </p>
                <p className="w-5 h-5 rounded-full bg-[#ffffff20] flex justify-center items-center p-1">
                  <span className="material-symbols-outlined text-xl">
                    check
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between my-2">
                <p className="text-[#ffffff52] text-sm">
                  Complete at least 1 Alpha Hub quest
                </p>
                <p className="w-5 h-5 rounded-full bg-[#ffffff20] flex justify-center items-center p-1">
                  <span className="material-symbols-outlined text-xl">
                    check
                  </span>
                </p>
              </div>
            </div>

            <button
              className={`flex justify-center items-center w-full p-4 ${styles.pathBtn} text-base font-medium`}
            >
              Claim Now<span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        {/* Svg container  */}
        <div className=" w-[15rem] top-[54%] left-[45%] absolute z-[-1] hidden lg:block">
          <img src="/svgs/line.svg" alt="" className="w-full h-full " />
        </div>

        <div className="w-[330px] lg:ml-[5rem] mx-auto z-10">
          <div className="border border-[#ffffff39] rounded-lg my-14 bg-[#ffffff0b]">
            <div className="flex items-center gap-2 py-2 px-3">
              <p className="text-[0.8rem] font-medium text-[#ffffff5b]">
                Reward info
              </p>
              <span className="material-symbols-outlined text-[#ffffff5b] text-xl">
                info
              </span>
            </div>

            <div className="border border-[#ffffff0e] w-full mb-1"></div>

            <div className="py-2 px-4">
              <h3 className="text-[#ffffffc3] text-sm tracking-wide mb-3">
                Free access to paid KOL (crypto earning) communities!
              </h3>
              <p className="my-4 text-[#ffffff59] text-sm tracking-wide">
                Win access to exclusive earning communities of some of the the
                greatest earners in crypto for a month, every 24 hours. Get
                access to unmatched insights, a close-knit community of the best
                airdrop earners, and more.
              </p>
              <p className="text-[#ffffff59] mb-1 text-sm tracking-wide">
                To win: make sure you've connected your Twitter and Discord
                accounts - and follow our criteria!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Path3;
