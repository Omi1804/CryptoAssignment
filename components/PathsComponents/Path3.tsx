import React from "react";
import styles from "@/styles/paths.module.css";

const Path3 = () => {
  return (
    <div className="my-10 border px-7 py-10 max-w-[1350px] mx-auto relative">
      <div className={`w-[800px] ml-auto   relative  flex`}>
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
          <div className="mt-5 py-2 px-4 border  border-[#ffffff17] rounded-xl bg-[#ffffff1b] ">
            div
          </div>
        </div>
        <div className="w-[350px]"></div>
      </div>
    </div>
  );
};

export default Path3;
