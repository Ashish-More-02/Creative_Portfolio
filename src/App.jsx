import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer_End from "./components/Footer_End";

function App() {
  // Create refs for each subsection
  const photosRef = useRef(null);
  const reviewsRef = useRef(null);
  const qnaRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" ,block:"start",inline:"center"});
  };

  return (
    <div className="bg-[#10131b] h-full w-full p-2">
      <Header
        scrollToSection={scrollToSection}
        photosRef={photosRef}
        reviewsRef={reviewsRef}
        qnaRef={qnaRef}
        contactRef={contactRef}
        heroRef={heroRef}
      />
      <Hero heroRef={heroRef}/>
      <Body
        photosRef={photosRef}
        reviewsRef={reviewsRef}
        qnaRef={qnaRef}
      />
      <Footer_End contactRef={contactRef} />
    </div>
  );
}

export default App;
