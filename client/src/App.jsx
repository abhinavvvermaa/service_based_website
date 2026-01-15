import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import BlogDetail from "./pages/BlogDetail";

import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import PageTransitionLayout from "./components/PageTransitionLayout";
import PageTracker from "./ga/PageTracker";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTracker /> 
      <Navbar />

      {/* 🔥 SINGLE persistent animated layout */}
      <PageTransitionLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
        </Routes>
      </PageTransitionLayout>

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
