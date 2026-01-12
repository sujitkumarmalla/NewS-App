import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    mobileOpen: false,
  };

  toggleMenu = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  closeMenu = () => {
    this.setState({ mobileOpen: false });
  };

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

            {/* Logo */}
            <div className="text-white text-2xl font-extrabold tracking-wide cursor-pointer">
              @_mr._.sonu._18
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 text-white font-medium">
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

            {/* Hamburger Icon (Mobile) */}
            <div className="md:hidden">
              <button onClick={this.toggleMenu} className="text-white">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {this.state.mobileOpen && (
          <div className="md:hidden bg-indigo-700 px-6 py-4 space-y-3 text-white font-medium">
            {categories.map((item) => (
              <NavLink
                key={item}
                to={item === "about" ? "/about" : `/${item}`}
                onClick={this.closeMenu}
                className={({ isActive }) =>
                  `block capitalize ${
                    isActive ? "text-yellow-300 font-bold" : "text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    );
  }
}
