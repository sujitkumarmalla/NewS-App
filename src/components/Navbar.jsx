import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const categories = [
      "about",
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ];

    return (
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">

            {/* Left Logo */}
            <div className="text-white text-2xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300">
              mrsonu18
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-6 text-white font-medium">
              {categories.map((item) => (
  <NavLink
    key={item}
    to={item === "about" ? "/about" : `/${item}`}
    className={({ isActive }) =>
      `relative group transition duration-300 capitalize ${
        isActive ? "text-yellow-300 font-bold" : "text-white"
      }`
    }
  >
    {item}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>
))}

            </div>

          </div>
        </div>
      </nav>
    );
  }
}
