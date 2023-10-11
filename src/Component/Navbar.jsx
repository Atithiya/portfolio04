import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div id="">
      <div className="navbar text-white fixed z-10 bg-opacity-5 backdrop-blur-lg backdrop-filter bg-gray-900 ">
        <div className="flex-1">
          <div className="w-full font-bold text-2xl lg:text-3xl text-white ">
            <h2 className="logoname ms-5 text-lg ">ATITHIYA I.</h2>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 lg:text-xl  ">
            {/* Desktop Navbar */}
            <li className="hidden lg:block dt-navbar  ">
              <a href="#home">Home</a>
            </li>
            <li className="hidden lg:block  dt-navbar ">
              <a href="#about">About</a>
            </li>
            <li className="hidden lg:block  dt-navbar ">
              <a href="#skills">Skills</a>
            </li>
            <li className="hidden lg:block  dt-navbar ">
              <a href="#projects">Projects</a>
            </li>
            <li className="hidden lg:block  dt-navbar ">
              <a href="#contact">Contact</a>
            </li>
            <li>
              {/* Mobile Navbar */}
              <details>
                <summary className="text-sm bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full lg:hidden text-bold">
                  Menu
                </summary>
                <ul className="p-2 text-black  bg-white ">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
