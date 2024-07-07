import React from "react";

const PathCards = ({ imgUrl, heading, tasks }: any) => {
  return (
    <div className="p-2 rounded-2xl my-3 bg-[#ffffff0a] flex  items-center w-full hover:bg-[#ffffff0e]">
      <img
        src={imgUrl}
        alt="memeIcon"
        className="w-[10rem] h-[6.3rem] rounded-2xl"
      />
      <div className="py-2 px-4 w-full">
        <h3 className="text-[1.4rem] text-[#ffffffc1] ">{heading}</h3>
        <div className="border border-dashed border-[#ffffff3d] my-3"></div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg text-[#ffffff49]">{tasks} Tasks</p>
          <div className="w-[12rem] h-[.7rem] border border-[#ffffff4e] rounded-2xl shadow-lg bg-[#ffffff0f] "></div>
          <span className="material-symbols-outlined text-[2.1rem] font-extralight text-[#ffffff42]">
            check_circle
          </span>
        </div>
      </div>
    </div>
  );
};

export default PathCards;
