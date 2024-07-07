import React from "react";
import styles from "@/styles/hero.module.css";
import Path1 from "./PathsComponents/Path1";
import Path2 from "./PathsComponents/Path2";
import Path3 from "./PathsComponents/Path3";

const EssentialPath = () => {
  return (
    <div className="relative mt-8 md:mt-[-165px]">
      <Path1 />
      <Path2 />
      <Path3 />
    </div>
  );
};

export default EssentialPath;
