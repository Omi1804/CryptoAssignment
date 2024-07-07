import React from "react";
import styles from "@/styles/paths.module.css";

const Path3 = () => {
  return (
    <div className=" px-7 pb-10 max-w-[1350px] mx-auto relative">
      {/* Svgs  */}
      <div className=" w-[60rem] top-[-22rem] left-[-14rem] absolute hidden md:block ">
        <img src="/svgs/path3.svg" alt="" className="w-full h-full " />
      </div>
      <div className={`w-[800px] ml-auto relative flex`}>
        <div className="w-[350px] ">
          <div className="py-2 px-4 border  border-[#ffffff17] rounded-xl bg-[#ffffff1b]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#fa8922] font-light text-xl">
                pace
              </span>
              <p className="text-[#ffffff52] tracking-wide font-medium text-lg">
                Reward unlocks in
              </p>
            </div>

            <div className="w-full border-t border-dashed border-[#ffffff80] my-4"></div>

            <div
              className={`border  p-2 rounded-xl relative  ${styles.dottedBg}`}
            >
              <img src="/dottedbg.png" alt="" className="w-full h-full" />
              <div className="absolute w-full h-full top-0 left-0 p-2 flex justify-around items-center">
                <p className="flex flex-col justify-center items-center">
                  <span className="text-4xl text-[#ffffff5b] font-medium">
                    00
                  </span>
                  <span className="text-[#ffffff21] text-lg font-medium">
                    Days
                  </span>
                </p>
                <p className="flex flex-col justify-center items-center">
                  <span className="text-4xl text-[#ffffff5b] font-medium">
                    12
                  </span>
                  <span className="text-[#ffffff21] text-lg font-medium">
                    Hours
                  </span>
                </p>
                <p className="flex flex-col justify-center items-center">
                  <span className="text-4xl text-[#ffffff5b] font-medium">
                    06
                  </span>
                  <span className="text-[#ffffff21] text-lg font-medium">
                    Mins
                  </span>
                </p>
                <p className="flex flex-col justify-center items-center">
                  <span className="text-4xl text-[#ffffff5b] font-medium">
                    32
                  </span>
                  <span className="text-[#ffffff21] text-lg font-medium">
                    Secs
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 p-3 border  border-[#ffffff17] rounded-xl bg-[#ffffff0b] ">
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
                <p className="text-[#ffffff52]">
                  Complete all Essential quests
                </p>
                <p className="w-6 h-6 rounded-full bg-[#ffffff20] flex justify-center items-center p-1">
                  <span className="material-symbols-outlined text-xl">
                    check
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between my-4">
                <p className="text-[#ffffff52]">
                  Complete at least 1 Alpha Hub quest
                </p>
                <p className="w-6 h-6 rounded-full bg-[#ffffff20] flex justify-center items-center p-1">
                  <span className="material-symbols-outlined text-xl">
                    check
                  </span>
                </p>
              </div>
            </div>

            <button
              className={`flex justify-center items-center w-full p-4 ${styles.pathBtn} text-lg font-medium`}
            >
              Claim Now<span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        <div className=" w-[16rem] top-[27.5rem] left-[22rem] absolute z-[-1] hidden md:block">
          <img src="/svgs/line.svg" alt="" className="w-full h-full " />
        </div>
        <div className="w-[350px] ml-[5rem] z-10">
          <div className="border border-[#ffffff39] rounded-lg my-14 bg-[#ffffff10]">
            <div className="flex items-center gap-2 py-3 px-4">
              <p className="text-[0.9rem] font-medium text-[#ffffff5b]">
                Reward info
              </p>
              <span className="material-symbols-outlined text-[#ffffff5b] text-xl">
                info
              </span>
            </div>

            <div className="border border-[#ffffff0e] w-full mb-3"></div>

            <div className="py-2 px-4">
              <h3 className="text-[#ffffffa2] mb-3">
                Free access to paid KOL (crypto earning) communities!
              </h3>
              <p className="my-4 text-[#ffffff59]">
                Win access to exclusive earning communities of some of the the
                greatest earners in crypto for a month, every 24 hours. Get
                access to unmatched insights, a close-knit community of the best
                airdrop earners, and more.
              </p>
              <p className="text-[#ffffff59] mb-2">
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
