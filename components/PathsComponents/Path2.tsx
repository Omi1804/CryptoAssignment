import React, { useState } from "react";
import styles from "@/styles/paths.module.css";
import PathCards from "./PathCards";

const pathData = [
  {
    id: 1,
    imgUrl: "/pathImg2.png",
    heading: "#1: But what is crypto and ...",
    tasks: 11,
  },
  {
    id: 2,
    imgUrl: "/pathImg3.jpg",
    heading: "#2: But what is crypto and ...",
    tasks: 11,
  },
  {
    id: 3,
    imgUrl: "/pathImg4.jpg",
    heading: "#3: But what is crypto and ...",
    tasks: 11,
  },
  {
    id: 4,
    imgUrl: "/pathImg5.jpg",
    heading: "#4: But what is crypto and ...",
    tasks: 11,
  },
  {
    id: 5,
    imgUrl: "/pathImg6.jpg",
    heading: "#5: But what is crypto and ...",
    tasks: 11,
  },
  {
    id: 6,
    imgUrl: "/pathImg7.jpg",
    heading: "#6: But what is crypto and ...",
    tasks: 11,
  },
];

const Path2 = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="my-10 px-7 py-10 max-w-[1350px] mx-auto relative">
      {/* Svg container */}
      <div className="absolute w-[55rem] top-[-19rem] left-[47rem] hidden lg:block">
        <img
          src="/svgs/path4.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Svg container  */}
      <div className="absolute w-[17rem] top-[5rem] left-[13rem] hidden lg:block">
        <img
          src="/svgs/path5.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      {/* 2nd container */}
      <div
        className={`w-[600px] lg:ml-auto lg:mr-[18rem] mx-auto  relative border border-[#ffffff17] rounded-3xl ${
          active ? "rounded-bl-none rounded-br-none" : ""
        }  ${styles.pathCont}`}
      >
        {/* 3rd level container */}

        <div
          className={`flex items-center gap-2 justify-center p-7 relative  cursor-pointer rounded-3xl hover:bg-[#ffffff0d] duration-300 `}
          onClick={() => setActive((prev) => !prev)}
        >
          <div className="h-[180px] flex-shrink-0 mx-3 w-[170px] border border-[#ffffff64] bg-[#222021] rounded-2xl p-2 bg-[rgba(255, 255, 255, .05)]">
            <img
              src="/pathImg9.png"
              alt="pathLogo"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="p-2">
            <div className="">
              <h3 className="text-white text-2xl font-medium">
                Basics of Crypto
              </h3>
              <p className="text-[#ffffff5b] text-lg tracking-wide font-medium py-2">
                The safest and easiest place to start your crypto journey!
              </p>

              <span
                className={`material-symbols-outlined absolute top-3 right-3 text-[2.5rem] text-[#fff6] duration-300 ${
                  active ? "rotate-180" : ""
                }`}
              >
                arrow_drop_down
              </span>
            </div>
            <div className="w-full border-t border-dashed border-[#ffffff80] my-2"></div>
            <div className=" justify-center items-center bg-[#ffffff15] mt-4 inline-flex px-3 py-1 rounded-3xl gap-1">
              <img src="/svgs/coin.svg" alt="coin" className="w-5 h-5" />
              <p className="text-base font-medium text-[#ffffffba]">1490 XPs</p>
            </div>
          </div>
        </div>

        {/* 3rd level container */}
        {active && (
          <div className="absolute max-h-[400px] bg-[#101010] rounded-bl-xl rounded-br-xl top-full left-0 px-7 py-4 border border-[#ffffff0f] w-full overflow-y-scroll">
            {pathData.map((data) => (
              <PathCards
                key={data.id}
                imgUrl={data.imgUrl}
                heading={data.heading}
                tasks={data.tasks}
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-[300px] lg:mr-auto lg:ml-[1rem] mx-auto z-10">
        {/* tick */}
        <div className=" my-4 ml-10 w-[3.5rem] h-[3.5rem] border border-[#ffffff49] rounded-full flex items-center justify-center bg-[#ffffff16] z-10">
          <span className="material-symbols-outlined text-[2rem] font-light text-[#ffffff49]">
            check
          </span>
        </div>

        <div className="relative border border-[#ffffff65] rounded-3xl  p-[.4rem] w-[10rem] h-[12rem] z-10">
          <img
            src="/pathImg10.png"
            alt=""
            className="w-full h-full object-cover rounded-3xl z-10"
          />
          <div className="absolute bottom-[-1rem]  border border-[#ffffff65] right-[-1rem] w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center bg-[#131313]">
            <span className="material-symbols-outlined text-[#ffffff9e]">
              lock
            </span>
          </div>
        </div>
        <div className="my-6">
          <h2 className="text-xl tracking-wide font-medium text-[#ffffffad]">
            Intract Certified: Earner NFT
          </h2>
          <p className="text-lg my-1 w-[90%] tracking-wide font-medium text-[#ffffff34]">
            Your proof of airdrop expertise
          </p>

          <button className="border cursor-not-allowed border-[#ffffff12] bg-[#ffffff0e] py-2 px-14 rounded-lg text-lg my-3 text-[#ffffff5f]">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Path2;
