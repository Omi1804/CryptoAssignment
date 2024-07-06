import React, { useState } from "react";
import styles from "@/styles/hero.module.css";

const SectionalBtn = ({ isActive, setIsActive }: any) => {
  return (
    <div
      className={`w-full flex items-center justify-center z-10 ${styles.toggleBtnCont}`}
    >
      <div
        className={`flex items-center my-[4rem] rounded-full cursor-pointer w-[340px] ${styles.toggleBtn}`}
      >
        <div
          className={`flex items-center justify-center text-base font-medium w-1/2 h-11 rounded-full transition-all duration-300 ${
            isActive === "essentials"
              ? "bg-[#3939397a] text-white border-t border-[#ffffff3c]"
              : "text-[#fff6]"
          }`}
          onClick={() => {
            setIsActive("essentials");
          }}
        >
          Essentials
        </div>
        <div
          className={`flex items-center justify-center text-base font-medium w-1/2 h-11 rounded-full transition-all duration-300 ${
            isActive === "alphaHub"
              ? "bg-[#3939397a] text-white border-t border-[#ffffff3c]"
              : "text-[#fff6]"
          }`}
          onClick={() => {
            setIsActive("alphaHub");
          }}
        >
          Alpha Hub
        </div>
      </div>
    </div>
  );
};

export default SectionalBtn;
