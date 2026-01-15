import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
