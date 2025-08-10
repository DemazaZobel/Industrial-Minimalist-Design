import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Import both logos
import logoDark from "../assets/logo_only.png"; // for light background (dark logo)
import logoLight from "../assets/logoInitial.png"; // for dark background (light logo)

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Manufacture", path: "/manufacture" },
  { name: "Import-Export", path: "/cargo" },
  { name: "Construction", path: "/construction" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkBackground, setDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setDarkBackground(true);
      } else {
        setDarkBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-10 z-[9999]
        lg:w-[83%] lg:left-[8.8%]
        md:w-[90%] md:left-[6%]
        sm:w-[90%]
        w-[90%] left-[5%]
        rounded-2xl border
        transition-colors duration-500
        ${
          darkBackground
            ? "bg-gray-900/90 border-gray-700 text-white shadow-lg"
            : "bg-white/30 border-gray-200 text-gray-900 shadow-md"
        }
      `}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-2 h-[72px]">
        {/* Logo */}
        <div className="h-full flex items-center">
          <NavLink
            to="/"
            className={`hover:text-orange-400 flex items-center h-full ${
              darkBackground ? "text-white" : "text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={darkBackground ? logoLight : logoDark}
              alt="logo"
              className="h-full object-contain max-h-[60px] w-auto"
              draggable="false"
            />
            <h1
              className={`font-bold text-lg tracking-wide ${
                darkBackground ? "text-white -ml-12" : "text-gray-900"
              }`}
            >
              DANKAL{" "}
              <span className="text-secondary">INDUSTRIAL PLC</span>
            </h1>
          </NavLink>
        </div>

        {/* Desktop Navigation visible only on laptops and above */}
        <nav>
          <ul className="hidden lg:flex space-x-6">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary font-semibold"
                      : `${
                          darkBackground
                            ? "text-gray-300 hover:text-secondary"
                            : "text-gray-900 hover:text-secondary"
                        } transition`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger menu visible on tablets and smaller (below lg) */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              className={`w-6 h-6 ${
                darkBackground ? "text-yellow-400" : "text-primary"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile dropdown nav visible below lg */}
          {menuOpen && (
            <ul
              className={`absolute top-full left-0 w-full text-center z-40 lg:hidden ${
                darkBackground ? "bg-gray-800" : "bg-white"
              }`}
            >
              {navItems.map(({ name, path }) => (
                <li
                  key={name}
                  className={`border-b ${
                    darkBackground ? "border-gray-700" : "border-gray-300"
                  } py-3`}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-semibold"
                        : `hover:text-secondary transition ${
                            darkBackground ? "text-gray-300" : "text-gray-900"
                          }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
