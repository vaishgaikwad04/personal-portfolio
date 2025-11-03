import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans mx-6 sm:mx-10 lg:mx-14">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-10 lg:px-20 py-20 lg:py-28 gap-12">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-lg sm:text-xl italic text-gray-400 tracking-wide">
            Hi, I'm <span className="text-white">Vaishnavi</span>
          </h1>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Full Stack Web Developer
          </h2>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-lg lg:max-w-xl leading-relaxed">
            I specialize in building{" "}
            <span className="text-white font-semibold">
              modern, scalable, and efficient web applications
            </span>
            . With strong expertise in the MERN stack, I focus on writing clean,
            optimized code and creating seamless digital experiences.
=======
import About from "./About";

import Portfolio from "./Portfolio";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-24 lg:py-28 gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <h1 className="text-lg sm:text-xl italic text-gray-300">
            Hi, I'm Om
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-400 leading-snug">
            I’M A GRAPHIC DESIGNER & VISUAL ARTIST
          </h2>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-lg lg:max-w-xl">
            I specialize in crafting{" "}
            <span className="text-white font-semibold">
              bold, creative, and visually stunning designs
            </span>{" "}
            that bring ideas to life. From digital art and brand identities to
            social media graphics — my goal is to create visuals that connect,
            inspire, and leave a lasting impression.
>>>>>>> 94df060a43a482b32f474f2cabfeb6e66934a9eb
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <Link
              to="/portfolio"
<<<<<<< HEAD
              className="px-6 py-3 text-sm sm:text-base rounded-xl font-semibold bg-white text-black hover:bg-gray-200 transition-transform transform hover:scale-105"
            >
              View Work
=======
              className="px-6 py-3 text-sm sm:text-base rounded-xl font-semibold bg-pink-500 text-white hover:bg-pink-600 transition transform hover:scale-105"
            >
              View Portfolio
>>>>>>> 94df060a43a482b32f474f2cabfeb6e66934a9eb
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="px-6 py-3 text-sm sm:text-base rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-400 transition-transform transform hover:scale-105"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image (Developer Illustration Inside Circle) */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Circle Container */}
          <div className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.15)] overflow-hidden">
            {/* Developer Illustration Inside Circle */}
            <motion.img
              src="https://i.pinimg.com/1200x/23/49/a3/2349a3428e7c29663b6d0f9dc1475628.jpg"
              alt="Female Developer Illustration"
              className="w-[100%] h-[110%] object-cover object-center"
              style={{
                filter: "contrast(1.1) saturate(1.05)",
              }}
             
            />
          </div>
        </motion.div>
      </section>
=======
              className="border border-pink-400 px-6 py-3 text-sm sm:text-base rounded-xl text-pink-400 hover:bg-pink-500 hover:text-white transition transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end items-center relative">
          <div className="relative flex items-center justify-center">
            {/* Circular Accent Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full blur-2xl opacity-40"></div>

            <div className="relative flex items-center justify-center w-52 sm:w-64 md:w-72 lg:w-96 aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-pink-400">
              <div className="p-2 sm:p-4 rounded-full overflow-hidden w-full h-full">
                <img
                  src="/designer-profile.png" // <-- replace with your image path
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional content sections */}
      {/* Uncomment if you want to show them on Home */}
      {/* 
      <main className="flex-1 flex flex-col">
        <section className="max-w-6xl mx-auto w-full my-12 px-5 sm:px-8">
          <Portfolio />
        </section>

        <section className="max-w-6xl mx-auto w-full my-12 px-5 sm:px-8">
          <About />
        </section>

        <section className="max-w-6xl mx-auto w-full my-12 px-5 sm:px-8">
          <Contact />
        </section>
      </main>
      */}
>>>>>>> 94df060a43a482b32f474f2cabfeb6e66934a9eb
    </div>
  );
}

export default Home;
