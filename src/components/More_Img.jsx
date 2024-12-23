import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const More_Img = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="h-[230px] w-[360px] bg-gray-300 rounded-xl p-4 m-2 my-5 shadow-gray-500 shadow-xl"
    >
      img-1
    </div>
  );
};

export default More_Img;
