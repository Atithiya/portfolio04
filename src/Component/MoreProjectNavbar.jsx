import React from "react";
import { Link } from "react-router-dom";

function MoreProjectNavbar() {
  return (
    <div id="" className="w-full">
      <div className="navbar text-white fixed z-10 bg-opacity-20 backdrop-blur-lg backdrop-filter bg-gray-900 ">
        <div className="flex-1">
          <div className="w-full font-bold text-2xl lg:text-3xl text-white ">
            <Link to={"/"} className="logoname ms-5 text-lg ">
              ATITHIYA I.
            </Link>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 lg:text-xl  ">
            {/* Desktop Navbar */}
            <li className="hidden lg:block dt-navbar  ">
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MoreProjectNavbar;
