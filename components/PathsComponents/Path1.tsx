import styles from "@/styles/paths.module.css";

const Path1 = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto ">
      <div className="">
        <div
          className={`border border-[#ffffff17] rounded-3xl w-[600px] flex items-center gap-2 justify-center p-7 relative ${styles.pathCont} cursor-pointer`}
        >
          <div className="h-[180px] flex-shrink-0 mx-3 w-[170px] border border-[#ffffff64] bg-[#222021] rounded-2xl p-2 bg-[rgba(255, 255, 255, .05)]">
            <img
              src="/pathImg1.png"
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

              <span className="material-symbols-outlined absolute top-4 right-4 text-[1.9rem] text-[#fff6]">
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
      </div>
      <div className=""></div>
    </div>
  );
};

export default Path1;
