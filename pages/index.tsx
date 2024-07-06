import CryptoDict from "@/components/CryptoDict";
import EssentialPath from "@/components/EssentialPath";
import HeroComponent from "@/components/HeroComponent";
import SectionalBtn from "@/components/SectionalBtn";
import TopCreatorSec from "@/components/TopCreatorSec";
import { useState } from "react";

const index = () => {
  const [sec1, setSec1] = useState(false);

  return (
    <div className={`relative mt-[4.25rem]`}>
      <HeroComponent />
      <EssentialPath />
      <TopCreatorSec />
      <CryptoDict />
      <SectionalBtn />
    </div>
  );
};

export default index;
