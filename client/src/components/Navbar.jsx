import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

// Logos
import blue_logo from "../assets/Blue-Logo.svg";
import white_logo from "../assets/White-Logo.svg";

export default function Navbar() {
  const location = useLocation();
  const menuRef = useRef(null);

  // ✅ IMPORTANT: initialize correctly on first paint
  const [scrolled, setScrolled] = useState(() => window.scrollY > 50);
  const [open, setOpen] = useState(false);

  // ✅ hydration flag to prevent transparent flash
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  /* ================= SCROLL HANDLER ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Close mobile menu on scroll
      if (open) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  /* ================= CLOSE ON ROUTE CHANGE ================= */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ================= CLOSE ON OUTSIDE TOUCH ================= */
  useEffect(() => {
    if (!open) return;

    const handleTouch = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("touchstart", handleTouch);
    return () => document.removeEventListener("touchstart", handleTouch);
  }, [open]);

  // Hide navbar on privacy page (if needed)
  if (location.pathname === "/privacy-policy") return null;

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
          !hydrated
            ? "fixed bg-white"
            : !scrolled
            ? "absolute bg-transparent"
            : "fixed bg-white/90 backdrop-blur shadow-md"
        }
      `}
    >
      <nav
  className={`max-w-7xl mx-auto px-8 flex items-center transition-all duration-300
    ${scrolled ? "py-2 md:py-4" : "py-3 md:py-6"}
  `}
>

        {/* LOGO */}
        <Link to="/" className="flex items-center z-10">
          <img
    src={!scrolled ? white_logo : blue_logo}
    alt="Navni ElectroTech"
    className="h-9 md:h-12 w-auto"
  />
        </Link>

        {/* DESKTOP MENU */}
        <div className="flex-1 flex justify-center">
          <ul
            className={`hidden md:flex items-center space-x-12 font-medium text-lg
              ${!scrolled ? "text-white" : "text-gray-700"}
            `}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full" />
              </NavLink>
            ))}
          </ul>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`md:hidden text-3xl ${
            !scrolled ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          ref={menuRef}
          className={`
            md:hidden transition-all duration-300
            ${
              scrolled
                ? "bg-white shadow-lg"
                : "bg-gray-900/60 backdrop-blur-xl"
            }
          `}
        >
          <ul
            className={`flex flex-col px-8 py-6 space-y-6 font-medium text-lg
              ${!scrolled ? "text-white" : "text-gray-700"}
            `}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="hover:text-blue-500 transition"
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
