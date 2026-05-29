import React from "react";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Experience from "./Experience";
import useScrollAnimation from "../hooks/ScrollAnimation";

function Home() {
  const [imgRef, imgVisible] = useScrollAnimation();
  const [textRef, textVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans overflow-hidden mt-4 animate-fade-in ml-8">
      {/* IMAGE */}
      <img
        ref={imgRef}
        className={`w-60 h-auto ml-8 text-right brightness-90 hover:brightness-75 transition-all duration-700 ease-in-out ${
          imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        src="me.jpg"
        alt="me"
      />
      <p
        ref={textRef}
        className={`text-gray-400 mt-6 text-lg sm:text-2xl md:text-3xl 
  mb-2 text-center sm:text-left max-w-3xl mx-auto sm:mx-0 p-4
  transition-all duration-700 ease-in-out ${
    textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
      >
        I build full-stack web applications from frontend to backend, focusing
        on performance, scalability, and smooth user experience.
      </p>
      {/* SECTIONS */}
      <Portfolio />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default Home;
