import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import b1 from "../assets/Images/arrow_left.png";
import b2 from "../assets/Images/arrow_right.png";

const CardV2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="w-full my-20 p-4 px-20 flex h-[450px] "
    >
      {/* text */}
      <div className="w-1/2 text-white p-4">
        <h1 className="text-4xl p-2 font-semibold font-mono ">Image 1 </h1>
        <p className="text-lg p-2 font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          cumque placeat impedit similique officia doloribus iure dolores animi
          eligendi autem inventore, possimus eveniet explicabo vitae laboriosam
          sit. Velit, ex ipsum!
        </p>
      </div>

      {/* image */}
      <div className="w-1/2 p-4 flex text-white">
        <img className="size-8 text-4xl my-auto mr-2 cursor-pointer" src={b1}></img>
        <img
          className="h-[100%] w-full p-4 bg-gray-500 rounded-3xl shadow-violet-300 shadow-2xl"
          src=""
          alt="image-1"
        ></img>
        <img className="size-8 text-4xl my-auto mr-2 cursor-pointer" src={b2}></img>
      </div>
    </div>
  );
};

export default CardV2;
