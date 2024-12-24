import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import AOS from "aos";
import "aos/dist/aos.css";
import b1 from "../assets/Images/arrow_left.png";
import b2 from "../assets/Images/arrow_right.png";

const Reviews = ({reviewsRef}) => {
  const filledArray = new Array(10).fill(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600; // Adjust this value for the amount to scroll

      if (direction == "left") {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className="relative">
      <div className="flex text-white flex-col text-center my-32">
        <h1 className="text-5xl font-semibold" ref={reviewsRef}> Reviews that Speaks Volums</h1>
        <p className="text-lg">Customer Reviews</p>
      </div>

      {/* left scroll button */}
      <button
        onClick={() => handleScroll("left")}
        className="text-4xl bg-[rgba(0,0,0,0.3)] h-[8%] px-4 absolute bottom-[28%] left-2 rounded-lg z-10"
      >
        <img className="size-8" src={b1}></img>
      </button>

      {/* scroll container */}
      <div
        data-aos="fade-in"
        className="flex overflow-x-scroll no-scrollbar scroll-smooth"
        ref={scrollContainerRef}
      >
        <div className="flex">
          {filledArray.map((element) => {
            return <ReviewCard></ReviewCard>;
          })}
        </div>
      </div>
      {/* Right Scroll Button */}
      <button
        onClick={() => handleScroll("right")}
        className="text-4xl bg-[rgba(0,0,0,0.3)] h-[8%] px-4 absolute bottom-[28%] right-1 rounded-lg"
      >
        <img className="size-8" src={b2}></img>
      </button>
    </div>
  );
};

export default Reviews;
