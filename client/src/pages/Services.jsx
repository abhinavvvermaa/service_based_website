import {
  Cpu,
  CircuitBoard,
  Code2,
  Hammer,
  TestTube2,
  Factory,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
// Images
import hardwareImg from "../assets/services/hardware.avif";
import pcbImg from "../assets/services/pcb.avif";
import firmwareImg from "../assets/services/firmware.avif";
import prototypeImg from "../assets/services/prototyping.avif";
import testingImg from "../assets/services/testing.jpg";
import manufacturingImg from "../assets/services/production.jpg";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Services() {
  useEffect(() => {
    document.title = "Services – Navni ElectroTech";
  }, []);
  const services = [
    {
      title: "Electronic Hardware Design",
      desc: "Complete electronic hardware design including schematics, component selection, power optimization, and system architecture for scalable products.",
      icon: <Cpu className="w-10 h-10 text-blue-600 animate-float-soft" />,
      img: hardwareImg,
    },
    {
      title: "PCB Design & Layout",
      desc: "High-quality multi-layer PCB design ensuring signal integrity, EMI/EMC compliance, and manufacturability for production readiness.",
      icon: (
        <CircuitBoard className="w-10 h-10 text-purple-600 animate-float-soft" />
      ),
      img: pcbImg,
    },
    {
      title: "Firmware / Embedded Systems",
      desc: "Robust embedded firmware development for microcontrollers and SoCs with real-time performance and seamless hardware interaction.",
      icon: <Code2 className="w-10 h-10 text-blue-600 animate-float-soft" />,
      img: firmwareImg,
    },
    {
      title: "Prototyping",
      desc: "Rapid prototyping to validate designs, minimize risks, and accelerate time-to-market with functional hardware units.",
      icon: <Hammer className="w-10 h-10 text-purple-600 animate-float-soft" />,
      img: prototypeImg,
    },
    {
      title: "Testing & Validation",
      desc: "Comprehensive functional, environmental, and stress testing to ensure reliability, compliance, and long-term product performance.",
      icon: (
        <TestTube2 className="w-10 h-10 text-blue-600 animate-float-soft" />
      ),
      img: testingImg,
    },
    {
      title: "Production & Manufacturing",
      desc: "Smooth transition from prototype to mass production with manufacturing support, quality assurance, and supply chain coordination.",
      icon: (
        <Factory className="w-10 h-10 text-purple-600 animate-float-soft" />
      ),
      img: manufacturingImg,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO */}
      {/* ================= HERO (ABOUT STYLE) ================= */}
      <section className="relative overflow-hidden text-white">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500" />

        {/* Wave Layer 1 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.14)"
            d="M0,220 C240,320 480,120 720,180 960,240 1200,340 1440,200 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wave Layer 2 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,320 C300,240 600,380 900,300 1200,220 1380,300 1440,340 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wave Layer 3 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.07)"
            d="M0,420 C260,380 520,420 780,400 1040,380 1200,420 1440,390 L1440,0 L0,0 Z"
          />
        </svg>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-up">
            Our Services
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/90 animate-fade-up delay-200">
            End-to-end electronics and embedded engineering services — from
            concept to large-scale manufacturing.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 animate-fade-up">
          Engineering Excellence Under One Roof
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden
                         transition transform hover:-translate-y-3 hover:shadow-2xl
                         animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }} // stagger
            >
              {/* IMAGE ZOOM */}
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-48 w-full object-cover
                             transition-transform duration-700
                             hover:scale-110"
                />
              </div>

              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 animate-fade-up">
            Why Clients Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "End-to-end product ownership",
              "Industry-experienced engineers",
              "Faster time-to-market",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl shadow-md
                           animate-fade-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <p className="font-semibold text-lg text-blue-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fade-up">
          Ready to Build Your Product?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg animate-fade-up delay-200">
          Partner with our expert engineering team to transform your idea into a
          production-ready solution.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg
                     font-bold hover:scale-105 transition-transform
                     animate-fade-up delay-400"
        >
          Talk to Our Experts
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 1 }}
        className="bg-black text-gray-400 pt-20 pb-10 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COMPANY INFO */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              Navni ElectroTech
            </h3>
            <p className="text-sm mb-6">
              Transforming ideas into production-ready electronic solutions.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1BnPRozJaw/"
                className="hover:text-blue-500 transition"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/navnielectrotech?igsh=bmIzM3c0ODV1bThm"
                className="hover:text-pink-500 transition"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Electronic Hardware Design</li>
              <li>PCB Design Services</li>
              <li>Embedded Firmware</li>
              <li>IoT Product Development</li>
              <li>Cloud Integration</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <div className="flex items-start gap-3 mb-3">
              <Phone size={18} />
              <a
                href="tel:+919315612790"
                className="text-sm hover:text-white transition"
              >
                +91-9315612790
              </a>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3 mb-3">
              <Mail size={18} />
              <a
                href="mailto:contact@navnielectrotech.com"
                className="text-sm hover:text-white transition"
              >
                contact@navnielectrotech.com
              </a>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <MapPin size={18} />
              <span className="text-sm">
                Sector-70,
                <br />
                Noida, Uttar Pradesh
              </span>
            </div>

            {/* MAP */}
            <a
              href="https://www.google.com/maps?q=Sector+70,+Noida,+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
            >
              <iframe
                title="Navni ElectroTech Location"
                src="https://www.google.com/maps?q=Sector+70,+Noida,+Uttar+Pradesh&output=embed"
                className="w-full h-32 rounded-xl border border-gray-700 hover:opacity-90 transition"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          <p className="text-gray-500">
            © 2026 Navni ElectroTech. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 mt-3">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link
              to="/terms&conditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
