import React, { useEffect } from "react";
import Card from "./card";
import AOS from "aos";
import "aos/dist/aos.css";
import CardV2 from "./CardV2";
import MoreSection from "./MoreSection";
import QnA from "./QnA";
import Reviews from "./Reviews";

const Body = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-white text-5xl m-4 text-center">
        Some of my Best Edits
      </h1>

      {/* card components */}
      <div className="my-30">
        <Card></Card>
        <CardV2></CardV2>
        <Card></Card>
        <CardV2></CardV2>
        <Card></Card>
        <CardV2></CardV2>
      </div>

      <div className="my-30">
        <MoreSection></MoreSection>
      </div>

      <div className="w-[83%] mx-auto">
        <Reviews></Reviews>
      </div>

      <div className="my-32">
        <h1 className="text-5xl font-semibold text-white text-center">
          Questions & Answers
        </h1>
        <p className="text-gray-400 text-center">
          If you have any other questions - please get in touch
        </p>
      </div>
      <div className="my-28">
        <QnA></QnA>
        <QnA></QnA>
        <QnA></QnA>
        <QnA></QnA>
        <QnA></QnA>
        <QnA></QnA>
      </div>

      
    </div>
  );
};

export default Body;
