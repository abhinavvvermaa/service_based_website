import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" }, 
    { name: "Career", path: "/career" }, 
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          XYZ
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              {item.name}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300
                ${"group-hover:w-full"} w-0`}
              ></span>
            </NavLink>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
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

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold text-center"
            >
              Get Started
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
