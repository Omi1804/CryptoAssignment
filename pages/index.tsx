import AlphaPath from "@/components/AlphaPath";
import CryptoDict from "@/components/CryptoDict";
import EssentialPath from "@/components/EssentialPath";
import HeroComponent from "@/components/HeroComponent";
import SectionalBtn from "@/components/SectionalBtn";
import TopCreatorSec from "@/components/TopCreatorSec";
import { useState } from "react";

const index = () => {
  const [isActive, setIsActive] = useState("essentials");

  return (
    <div className={`relative mt-[4.25rem]`}>
      <HeroComponent />
      {isActive === "essentials" ? <EssentialPath /> : <AlphaPath />}
      <TopCreatorSec />
      <CryptoDict />
      <SectionalBtn isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default index;
