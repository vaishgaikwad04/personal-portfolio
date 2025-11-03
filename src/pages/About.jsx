import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

function About() {
  const skills = [
    { name: "React", type: "frontend" },
    { name: "Tailwind CSS", type: "frontend" },
    { name: "Bootstrap", type: "frontend" },
    { name: "Node.js", type: "backend" },
    { name: "Express", type: "backend" },
    { name: "MongoDB", type: "backend" },
    { name: "SQL", type: "backend" },
    { name: "OpenAI API", type: "ai" },
    { name: "Git", type: "tool" },
    { name: "GitHub", type: "tool" },
  ];

  const badgeColors = {
    frontend: "bg-blue-700 border-blue-600 hover:bg-blue-600",
    backend: "bg-green-700 border-green-600 hover:bg-green-600",
    ai: "bg-pink-700 border-pink-600 hover:bg-pink-600",
    tool: "bg-gray-700 border-gray-600 hover:bg-gray-600",
  };

  return (
    <section className="text-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-3">
          About Me
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Full Stack Developer specializing in MERN stack and AI integration, creating responsive, scalable, and user-friendly web applications.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left Side */}
        <div className="space-y-5 text-center md:text-left">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            I’m a <strong>MERN Stack & AI Developer</strong> with <strong>6+ months of experience</strong>, building responsive, scalable, and user-friendly web applications. 
            I focus on writing clean, efficient code and creating solutions that are both functional and visually engaging.
          </p>

          <ul className="space-y-2 text-gray-400 list-disc list-inside text-sm sm:text-base">
            <li>Frontend: React, Tailwind CSS, Bootstrap</li>
            <li>Backend: Node.js, Express, MongoDB, SQL</li>
            <li>AI: OpenAI API</li>
            <li>Authentication: JWT, OAuth, Role-based Access</li>
            <li>Real-time Apps with APIs & Socket.io</li>
            <li>Version Control: Git & GitHub</li>
          </ul>

          {/* Tech Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-3">
  {skills.map((skill) => (
    <span
      key={skill.name}
      className="px-3 py-1 rounded-full text-xs sm:text-sm bg-gray-800 border border-gray-700"
    >
      {skill.name}
    </span>
  ))}
</div>


          <p className="text-gray-300 text-sm sm:text-base md:text-lg pt-3">
            I strive to create web applications that are practical, intuitive, and visually appealing.
          </p>
        </div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 mt-0 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <img
            src="./about.jpg"
            alt="Vaishnavi working on laptop"
            className="w-76 sm:w-72 md:w-80 lg:w-96 h-140 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
