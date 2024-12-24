import React, { forwardRef, useEffect, useRef } from "react";
import "../Hero.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { motion } from "motion/react";
import v1 from "../assets/videos/galaxy.mp4";

const Hero = ({heroRef}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Configure AOS options

    playSlowly();
  }, []); // Runs only once

  const videoRef = useRef(null);
  console.log(videoRef);

  const playSlowly = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Play at half speed
      videoRef.current.play();
    }
  };

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center font-montserrat relative overflow-hidden" ref={heroRef}>
      {/* Background Video */}
      <div className="absolute inset-0" >
        <video
          ref={videoRef}
          src={v1}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* Overlay Content */}
      <div className="z-10 text-white text-center" >
        <motion.h1
          className="text-6xl p-2 font-semibold bg-gradient-to-r from-black via-blue-50 to-white bg-clip-text text-transparent"
          initial={{
            scale: 5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          Best PhotoEditor
        </motion.h1>
        <motion.h2
          className="text-6xl p-2 font-semibold bg-gradient-to-r from-blue-50 to-white bg-clip-text text-transparent"
          initial={{
            scale: 5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          You can ever find on the Internet
        </motion.h2>
      </div>
    </div>
  );
};

export default Hero;
