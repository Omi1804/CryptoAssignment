import styles from "@/styles/hero.module.css";

const TopCreatorSec = () => {
  return (
    <div className="py-[3rem] px-[9rem] my-4 border-t border-[rgba(255,255,255,.15)] flex justify-center items-center flex-col">
      <h1 className="text-white font-medium text-[1.75rem] ">
        Top Crypto Creators and Projects to Follow
      </h1>
      <p className="text-[#ffffff74] my-2 text-lg tracking-wide">
        Answers to your crypto doubts, straight from the experts
      </p>

      <div className="w-full grid grid-cols-4 justify-items-center content-center gap-8 mt-8">
        <div
          className={`border relative w-full rounded-2xl border-[#ffffff3f] overflow-hidden ${styles.creatorCont} cursor-pointer `}
        >
          <img
            src="/creator1.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute top-4 right-4 z-50 w-[3rem] h-[3rem] flex items-center justify-center bg-[#0000008c] rounded-full border border-[rgba(255,255,255,.55)]">
            <span className="material-symbols-outlined">slideshow</span>
          </div>
          <p className="absolute bottom-0 w-full z-50 text-[#fff9] text-2xl font-medium py-2 px-4 tracking-wide">
            How to plan your retirement with crypto?
          </p>
        </div>

        <div
          className={`border relative w-full rounded-2xl border-[#ffffff3f] overflow-hidden ${styles.creatorCont} cursor-pointer `}
        >
          <img
            src="/creator2.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute top-4 right-4 z-50 w-[3rem] h-[3rem] flex items-center justify-center bg-[#0000008c] rounded-full border border-[rgba(255,255,255,.55)]">
            <span className="material-symbols-outlined">slideshow</span>
          </div>
          <p className="absolute bottom-0 w-full z-50 text-[#fff9] text-2xl font-medium py-2 px-4 tracking-wide">
            Why are there limited Bitcoin?
          </p>
        </div>
        <div
          className={`border relative w-full rounded-2xl border-[#ffffff3f] overflow-hidden ${styles.creatorCont} cursor-pointer `}
        >
          <img
            src="/creator3.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute top-4 right-4 z-50 w-[3rem] h-[3rem] flex items-center justify-center bg-[#0000008c] rounded-full border border-[rgba(255,255,255,.55)]">
            <span className="material-symbols-outlined">slideshow</span>
          </div>
          <p className="absolute bottom-0 w-full z-50 text-[#fff9] text-2xl font-medium py-2 px-4 tracking-wide">
            How does Uniswap actually work?
          </p>
        </div>
        <div
          className={`border relative w-full rounded-2xl border-[#ffffff3f] overflow-hidden ${styles.creatorCont} cursor-pointer `}
        >
          <img
            src="/creator4.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute top-4 right-4 z-50 w-[3rem] h-[3rem] flex items-center justify-center bg-[#0000008c] rounded-full border border-[rgba(255,255,255,.55)]">
            <span className="material-symbols-outlined">slideshow</span>
          </div>
          <p className="absolute bottom-0 w-full z-50 text-[#fff9] text-2xl font-medium py-2 px-4 tracking-wide">
            How to spot crypto projects to invest in?
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCreatorSec;
