import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import arrow_down_black from "../assets/Images/arrow_down_black.png";

const QnA = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col w-full h-full items-center my-10 font-mono">
        <div
          data-aos="fade-in"
          data-aos-once="true"
          className="bg-gray-200 px-10 w-[70%] flex flex-col "
        >
          <div className="flex">
            <div className="bg-slate-300 px-6 py-2 my-2 w-full">
              Question -1 : what is the averge time for delivery ?
            </div>
            <img
              className="w-[6%] px-2 my-auto cursor-pointer size-8"
              onClick={() => setToggle(!toggle)}
              src={arrow_down_black}
            ></img>
          </div>

          {/* toggle container */}
          {toggle ? (
            <div data-aos="fade-in" className="h-24 transition-transform">
              Answer : Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis cumque placeat impedit similique officia doloribus iure
              dolores animi eligendi autem inventore, possimus eveniet explicabo
              vitae laboriosam sit. Velit, ex ipsum!
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default QnA;
