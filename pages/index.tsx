import AlphaPath from "@/components/AlphaPath";
import CryptoDict from "@/components/CryptoDict";
import EssentialPath from "@/components/EssentialPath";
import HeroComponent from "@/components/HeroComponent";
import SectionalBtn from "@/components/SectionalBtn";
import TopCreatorSec from "@/components/TopCreatorSec";
import { useState } from "react";
import styles from "@/styles/hero.module.css";

const index = () => {
  const [isActive, setIsActive] = useState("essentials");

  return (
    <div className={`relative lg:mt-[4rem] mt-[3.3rem] ${styles.homepage}`}>
      <HeroComponent isActive={isActive} />
      {isActive === "essentials" ? <EssentialPath /> : <AlphaPath />}
      <TopCreatorSec />
      <CryptoDict />
      <SectionalBtn isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default index;
