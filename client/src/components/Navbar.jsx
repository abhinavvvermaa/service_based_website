import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo2.png";

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
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO (BIGGER) */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Navni ElectroTech"
            className="h-8 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-12 font-medium text-lg">
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
              <span className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full w-0"></span>
            </NavLink>
          ))}
        </ul>

        {/* CTA BUTTON (BIGGER) */}
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
          className="md:hidden text-3xl text-gray-800"
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

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600
                         text-white py-3 rounded-lg font-semibold text-center"
            >
              Get Started
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
