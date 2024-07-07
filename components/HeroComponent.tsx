import styles from "@/styles/hero.module.css";

const HeroComponent = () => {
  return (
    <div className={`relative`}>
      <img
        src="/bgCover.png"
        alt="background"
        className="relative w-full  h-full object-cover"
      />
      <div
        className={`absolute mix-blend-screen flex flex-col items-center justify-center ${styles.heroContent}`}
      >
        <img src="/academyLogo.gif" alt="Academy Logo" className="w-[16rem]" />
        <div className="mt-6 text-center flex flex-col items-center justify-center">
          <p className="text-[#ffffffca] mix-blend-plus-lighter text-[22px] font-normal text-center">
            Intract users{" "}
            <span className="text-[#4F4C4E]">have together made more than</span>{" "}
            $100 million
            <span>in web3.</span>
          </p>
          <p className="text-[#ffffffca] mix-blend-plus-lighter text-[22px] font-normal text-center">
            <span className="text-[#4F4C4E]">Join them </span>and learn how to
            earn crypto!
          </p>
          <button className="mt-[3rem] py-[10px] px-[57px] rounded-lg border border-[#ffffff1b] bg-[#6435e9] cursor-pointer flex justify-center items-center gap-1 text-base text-[#ffffffe2] ">
            Get Started
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
