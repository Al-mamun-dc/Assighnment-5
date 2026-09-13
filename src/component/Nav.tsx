import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">


        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700 md:hidden">
          ☰
        </button>

      
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#home" className="text-sm text-pink-500">
            Home
          </a>

          <a href="#technologies" className="text-sm text-gray-600">
            Technologies
          </a>

          <a href="#projects" className="text-sm text-gray-600">
            Projects
          </a>

          <a href="#about" className="text-sm text-gray-600">
            About
          </a>

          <a href="#contact" className="text-sm text-gray-600">
            Contact
          </a>
        </div>
        <div className="hidden gap-4 md:flex">
          <button className="text-sm text-gray-700">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm text-white">
            Sign Up
          </button>
        </div>

      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            <a href="" onClick={() => setMenuOpen(false)} className="text-sm text-pink-500">
              Home
            </a>

            <a href="" onClick={() => setMenuOpen(false)}className="text-sm text-gray-600">
              Technologies
            </a>

            <a href=""onClick={() => setMenuOpen(false)} className="text-sm text-gray-600">
              Projects
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600" >
              About
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}className="text-sm text-gray-600">
              Contact
            </a>

            <button className="text-left text-sm text-gray-700">
              Sign In
            </button>

            <button className="rounded-full bg-pink-500 px-5 py-2 text-sm text-white">
              Sign Up
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;