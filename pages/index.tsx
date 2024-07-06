import CryptoDict from "@/components/CryptoDict";
import HeroComponent from "@/components/HeroComponent";
import ToggleBtn from "@/components/toggleBtn";
import TopCreatorSec from "@/components/TopCreatorSec";
import { useState } from "react";

const index = () => {
  const [sec1, setSec1] = useState(false);

  return (
    <div className={`relative mt-[4.25rem]`}>
      <HeroComponent />
      <TopCreatorSec />
      <CryptoDict />
      <ToggleBtn />
    </div>
  );
};

export default index;
