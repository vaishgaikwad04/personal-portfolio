import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Footer from "./components/Footer.jsx";
import "./App.css";

// Shared nav items
const navItems = [
<<<<<<< HEAD
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
=======
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },

]
>>>>>>> 94df060a43a482b32f474f2cabfeb6e66934a9eb

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-black sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-4 flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl text-gray-100 sm:text-2xl md:text-3xl font-semibold tracking-wide hover:scale-105 transition-transform duration-300"
          >
            My <span className="text-gray-400">Space</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative group text-white/80 hover:text-white transition-colors ${
                    isActive ? "text-white" : ""
                  }`
                }
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
            <div className="flex items-center gap-4 text-xl ml-4">
              <SocialIcons />
            </div>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Main Routes */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<HomeLazy />} />
          <Route path="/portfolio" element={<PortfolioLazy />} />
          <Route path="/about" element={<AboutLazy />} />
         
          <Route path="/project/:slug" element={<ProjectLazy />} />
          <Route path="*" element={<PortfolioLazy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

// Mobile Menu Component
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="p-2 rounded hover:bg-white/10 transition"
      >
        {open ? (
          <svg
            className="h-7 w-7 text-red-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.12 5.7A1 1 0 0 0 5.7 7.12L10.59 12l-4.9 4.88a1 1 0 0 0 1.42 1.42L12 13.41l4.88 4.9a1 1 0 0 0 1.42-1.42L13.41 12l4.9-4.88a1 1 0 0 0-.01-1.41z" />
          </svg>
        ) : (
          <svg
            className="h-7 w-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
          </svg>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-zinc-900 border-l border-white/10 p-6 rounded-l-lg flex flex-col gap-3 z-50 shadow-lg">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="self-end mb-4 p-2 rounded hover:bg-white/10 transition"
            >
              <svg
                className="h-6 w-6 text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.12 5.7A1 1 0 0 0 5.7 7.12L10.59 12l-4.9 4.88a1 1 0 0 0 1.42 1.42L12 13.41l4.88 4.9a1 1 0 0 0 1.42-1.42L13.41 12l4.9-4.88a1 1 0 0 0-.01-1.41z" />
              </svg>
            </button>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block py-2 text-white text-lg font-medium hover:text-gray-300 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex gap-6 pt-2 text-xl">
              <SocialIcons />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Social Icons Component
function SocialIcons() {
  return (
    <>
<<<<<<< HEAD
      <a
        href="https://github.com/vaishgaikwad04"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
        title="GitHub"
      >
=======
      {/* <a href="https://github.com/vaishgaikwad19" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" title="GitHub">
>>>>>>> 94df060a43a482b32f474f2cabfeb6e66934a9eb
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/vaishnavi-gaikwad-772205307/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
        title="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.instagram.com/vaishgaikwad_4/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
        title="Instagram"
      >
        <FaInstagram />
      </a> */}
    </>
  );
}

// Lazy-loaded pages
import Portfolio from "./pages/Portfolio.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";

<<<<<<< HEAD
const PortfolioLazy = () => <Portfolio />;
const HomeLazy = () => <Home />;
const AboutLazy = () => <About />;
const ContactLazy = () => <Contact />;
const ProjectLazy = () => <Project />;
=======
// Lazy Pages
import Portfolio from './pages/Portfolio.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

import Project from './pages/Project.jsx'

const PortfolioLazy = () => <Portfolio />
const HomeLazy = () => <Home />
const AboutLazy = () => <About />

const ProjectLazy = () => <Project />
>>>>>>> 94df060a43a482b32f474f2cabfeb6e66934a9eb
