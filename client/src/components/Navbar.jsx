import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

// Logos
import logo from "../assets/logo.png";             // Dark logo (white navbar)
import white_logo from "../assets/White_Logo.png"; // White logo (transparent navbar)

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection (for ALL pages)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // run once on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`
        top-0 left-0 w-full z-50 transition-all duration-300
        ${
          !scrolled
            ? "absolute bg-transparent"
            : "fixed bg-white/90 backdrop-blur shadow-md"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={!scrolled ? white_logo : logo}
            alt="Navni ElectroTech"
            className={`transition-all duration-300 ${
              !scrolled ? "h-9 drop-shadow-lg" : "h-8"
            } w-auto`}
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul
          className={`hidden md:flex items-center space-x-12 font-medium text-lg
            ${!scrolled ? "text-white" : "text-gray-700"}
          `}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition ${
                  isActive && scrolled ? "text-blue-600" : ""
                }`
              }
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full w-0"></span>
            </NavLink>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600
                       text-white px-8 py-3 rounded-lg
                       font-semibold text-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`md:hidden text-3xl ${
            !scrolled ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col px-8 py-6 space-y-6 font-medium text-lg text-gray-700">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
