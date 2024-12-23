import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer_End from "./components/Footer_End";

function App() {
  return (
    <div className="bg-[#10131b] h-full w-full p-2">
      <Header></Header>
      <Hero></Hero>
      <Body></Body>
      <Footer_End></Footer_End>
    </div>
  );
}

export default App;
