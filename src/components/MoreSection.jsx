import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import More_Img from "./More_Img";

const MoreSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <h1 className="text-5xl font-semibold text-white text-center">
        And More...
      </h1>

      <div className="flex flex-wrap justify-evenly my-20">
        <More_Img></More_Img>
        <More_Img></More_Img>
        <More_Img></More_Img>
        <More_Img></More_Img>
        <More_Img></More_Img>
        <More_Img></More_Img>
      </div>
    </div>
  );
};

export default MoreSection;
