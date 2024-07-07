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
        <img
          src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
          alt="Academy Logo"
          className="w-[37%]"
        />
        <div className="mt-4 text-center flex flex-col items-center justify-center">
          <p className="text-[#ffffffca] mix-blend-plus-lighter md:text-[20px] text-[15px] font-medium text-center">
            Intract users{" "}
            <span className="text-[#4F4C4E]">have together made more than</span>{" "}
            $100 million
            <span>in web3.</span>
          </p>
          <p className="text-[#ffffffca] mix-blend-plus-lighter md:text-[20px] text-[15px] font-medium text-center">
            <span className="text-[#4F4C4E]">Join them </span>and learn how to
            earn crypto!
          </p>
          <button className="mt-[3rem] py-[7px] px-[52px] rounded-lg border border-[#ffffff1b] bg-[#6435e9] cursor-pointer flex justify-center items-center gap-1 text-sm text-[#ffffffe2] ">
            Get Started
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
