import React, { useState } from "react";
import styles from "@/styles/hero.module.css";

const CryptoDict = () => {
  return (
    <div className="pt-[4rem] px-[9rem] my-4 border-t border-[rgba(255,255,255,.15)] flex justify-center items-center flex-col">
      <h1 className="text-white font-medium text-[1.55rem] ">
        Crypto Dictionary
      </h1>
      <p className="text-[#ffffff74] my-1 text-base tracking-wide">
        Your one-stop to catch up on all crypto terms
      </p>

      <div
        className={`w-full my-6 border relative border-[#ffffff22] object-cover rounded-2xl ${styles.distImg}`}
      >
        <img
          src="/svgs/dict.svg"
          alt=""
          className="w-full h-full object-cover z-0"
        />
        <div
          className={`absolute bottom-0 flex justify-between w-full px-10 py-4`}
        >
          <div className={styles.distTexts}>
            <h2>Web3 + Degen Glossary</h2>
            <p className="mt-2">Your own crypto dictionary</p>
          </div>
          <div className="w-[4rem] h-[4rem] rounded-full  flex justify-center items-center z-50 backdrop-blur-3xl bg-[#52514845]">
            <span className="material-symbols-outlined text-[1.8rem] font-light">
              import_contacts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDict;
