import React from "react";
import { motion } from "framer-motion";

const Header = ({
  scrollToSection,
  photosRef,
  reviewsRef,
  qnaRef,
  contactRef,
  heroRef,
}) => {
  return (
    <div className="flex sticky top-0 z-20 bg-gradient-to-b from-[rgba(0,0,0,0.95)] to-[rgba(30,37,51,0.8)]">
      <div className="py-2 px-4 m-4 text-white" >
        <span className="text-4xl font-semibold cursor-pointer" onClick={()=>scrollToSection(heroRef)}>PixelBloom </span>
        <span className="text-sm">by devesh</span>
      </div>
      <ul className="text-white flex justify-evenly w-[55%] items-center font-sans text-lg right-0 absolute top-7">
        <motion.li
          className="cursor-pointer"
          onClick={() => scrollToSection(photosRef)}
          whileTap={{scale :0.85 , color:"rgba(61, 131, 242)"}}
        >
          Photos
        </motion.li>
        <motion.li
          className="cursor-pointer"
          onClick={() => scrollToSection(reviewsRef)}
          whileTap={{scale :0.85 , color:"rgba(61, 131, 242)"}}
        >
          Reviews
        </motion.li>
        <motion.li
          className="cursor-pointer"
          onClick={() => scrollToSection(qnaRef)}
          whileTap={{scale :0.85 , color:"rgba(61, 131, 242)"}}
        >
          QnA
        </motion.li>
        <motion.li
          className="cursor-pointer"
          onClick={() => scrollToSection(contactRef)}
          whileTap={{scale :0.85 , color:"rgba(61, 131, 242)"}}
        >
          Contact
        </motion.li>
      </ul>
    </div>
  );
};

export default Header;
