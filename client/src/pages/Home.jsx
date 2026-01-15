import { Link } from "react-router-dom";
import heroBgDesktop from "../assets/home/Desktop.png";
import heroBgMobile from "../assets/home/Mobile.png";
import labImg from "../assets/home/lab.jpg";
import pcbImg from "../assets/home/pcb.png";
import embeddedImg from "../assets/home/embedded.avif";
import embeddedProgramming from "../assets/home/Testimonials/embedded_Programming.svg";
import pcbSignalFlow from "../assets/home/Testimonials/pcb-signal-flow-css.svg";
import productDevelopment from "../assets/home/Testimonials/product_development.svg";
import productionAnimation from "../assets/home/Testimonials/production-animation.svg";
import testingPrototyping from "../assets/home/Testimonials/testing-prototyping.svg";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

import {
  Lightbulb,
  Fan,
  Wind,
  Plug,
  Power,
  ToggleLeft,
  Droplets,
  Flame,
  ShieldCheck,
  WashingMachine,
  BatteryCharging,
  Battery,
  Refrigerator,
  Snowflake,
  Home as HomeIcon,
  Microwave,
  CookingPot,
  Heater,
  Coffee,
  Lock,
  Blinds,
  DoorClosed,
  Siren,
  Camera,
  Video,
  Watch,
  Headphones,
  Cpu,
  Wifi,
  Code,
  Cloud,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Home() {
  const heroDesktopRef = useRef(null);
  const heroMobileRef = useRef(null);
  const [animateHero, setAnimateHero] = useState(false);

  const headingRef = useRef(null);
  const [animateHeading, setAnimateHeading] = useState(false);

  const typeRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const imageRefs = useRef([]);
  const [visibleImages, setVisibleImages] = useState([false, false, false]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showSvgs, setShowSvgs] = useState(false);
  const svgSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSvgs(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -120px 0px" }
    );

    if (svgSectionRef.current) observer.observe(svgSectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 🔥 Trigger immediately on first render
    const timeout = setTimeout(() => {
      setAnimateHero(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleImages((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
              observer.unobserve(entry.target); // run once
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fullText =
      "Your single-source partner for seamless electronic hardware development, firmware, connectivity, applications, and cloud integration.";

    let index = 0;
    let currentText = "";
    let intervalId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        intervalId = setInterval(() => {
          currentText += fullText[index];
          setTypedText(currentText);
          index++;

          if (index >= fullText.length) {
            clearInterval(intervalId);
            setTypingDone(true);
          }
        }, 15);

        observer.disconnect(); // ✅ ensures it runs only once
      },
      { threshold: 0.5 }
    );

    if (typeRef.current) observer.observe(typeRef.current);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateHeading(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      icon: embeddedProgramming,
      title: "Embedded Firmware",
      desc: "Real-time device intelligence",
    },
    {
      icon: pcbSignalFlow,
      title: "PCB Design",
      desc: "Signal & power integrity",
    },
    {
      icon: productDevelopment,
      title: "Product Development",
      desc: "Concept to market-ready",
    },
    {
      icon: productionAnimation,
      title: "Production Ready",
      desc: "Scalable & manufacturing-safe",
    },
    {
      icon: testingPrototyping,
      title: "Testing & Prototyping",
      desc: "Verified before deployment",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800 overflow-hidden">
      <section className="relative w-full overflow-hidden">
        {/* ================= DESKTOP HERO ================= */}
        <div className="relative hidden md:block h-screen">
          <img
            src={heroBgDesktop}
            alt="Electronics Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-8 w-full">
              <div
                ref={heroDesktopRef}
                className="max-w-3xl text-white text-left"
              >
                {/* HEADING */}
                <h1
                  className={`
      text-5xl lg:text-6xl font-extrabold mb-6 leading-tight
      transition-all duration-700 ease-out
      ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}
    `}
                >
                  Cutting-edge <br /> Electronics Solutions
                </h1>

                {/* SUBTEXT */}
                <p
                  className={`
      text-lg text-gray-200 mb-8
      transition-all duration-700 delay-150 ease-out
      ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}
    `}
                >
                  Empowering your business with innovative electronic and
                  embedded systems
                </p>

                {/* BUTTON */}
                <Link
                  to="/contact"
                  className={`
    inline-block
    px-6 py-3
    rounded-md
    border
    text-sm font-semibold
    bg-transparent

    transition-all duration-300 ease-out

    ${
      scrolled
        ? "border-blue-600 text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white"
        : "border-white text-white hover:bg-white hover:border-white hover:text-black"
    }

    ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}
  `}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE HERO ================= */}
        <div className="relative md:hidden h-[90vh]">
          {/* IMAGE */}
          <img
            src={heroBgMobile}
            alt="Electronics PCB"
            className="
        absolute inset-0
        w-full h-full
        object-cover
        object-[center_top]
      "
          />

          {/* GRADIENT FOR READABILITY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

          {/* TEXT ON IMAGE — BELOW PCB */}
          <div
            ref={heroMobileRef}
            className="absolute bottom-20 left-0 right-0 px-6 text-center text-white"
          >
            <h1
              className={`
    text-2xl sm:text-3xl font-extrabold leading-tight mb-4
    transition-all duration-700 ease-out
    ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
  `}
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.7)" }}
            >
              Cutting-edge <br />
              <span className="text-white">Electronics Solutions</span>
            </h1>

            {/* SUBTEXT — SAME ANIMATION */}
            <p
              className={`
    text-xs text-gray-200 leading-relaxed mb-5
    transition-all duration-700 delay-150 ease-out
    ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
  `}
            >
              Empowering your business with innovative electronic and embedded
              systems
            </p>

            {/* BUTTON */}
            <Link
              to="/contact"
              className={`
    inline-block
    px-6 py-3
    rounded-md
    border
    text-sm font-semibold
    bg-transparent

    transition-all duration-300 ease-out

    ${scrolled ? "border-blue-600 text-white" : "border-white text-white"}

    ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}
  `}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ================= END-TO-END IOT STACK ================= */}
      <section className="relative py-28 px-8 bg-gray-900 text-white overflow-hidden">
        {/* animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-gradient-x"></div>

        {/* blinking data particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-blink-soft"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-500 rounded-full animate-blink-soft"></div>
        <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-blink-soft"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* ===== END-TO-END CAPABILITIES (SVGs) ===== */}
          <div ref={svgSectionRef} className="mb-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 text-center">
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className={`
      flex flex-col items-center group
      transition-all duration-700 ease-out
      ${showSvgs ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
    `}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="
        w-16 h-16
        sm:w-20 sm:h-20
        md:w-24 md:h-24
        mb-4
        object-contain
        transition-all duration-300
        group-hover:scale-110
        group-hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.6)]
      "
                  />
                  <p
                    className="
  text-sm
  sm:text-base
  md:text-lg
  font-semibold
  text-white
  mt-2
"
                  >
                    {item.title}
                  </p>

                  <p
                    className="
  text-xs
  sm:text-sm
  md:text-base
  text-gray-300
  mt-1
"
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-extrabold text-center mb-6"
          >
            <span
              className={`
      inline-block
      ${
        animateHeading
          ? "animate-slide-left [animation-delay:0.06s]"
          : "opacity-0 -translate-x-20"
      }
    `}
            >
              End-to-End
            </span>{" "}
            <span
              className={`
      inline-block
      ${
        animateHeading
          ? "animate-slide-right [animation-delay:0.2s]"
          : "opacity-0 translate-x-20"
      }
    `}
            >
              Electronic Hardware Design
            </span>
          </h2>

          <p
            ref={typeRef}
            className="text-center text-gray-300 max-w-4xl mx-auto mb-20 text-lg leading-relaxed"
          >
            {typedText}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center">
            {/* LEFT */}
            <div className="space-y-12">
              <div
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                        hover:-translate-y-2 transition
                        animate-float-slow"
              >
                <Cpu className="w-10 h-10 text-blue-500 mb-4 animate-led" />
                <h3 className="text-xl font-bold mb-2">
                  Hardware & Sensor Integration
                </h3>
                <p className="text-gray-400 text-sm">
                  Custom PCB design, sensor integration, and production-grade
                  hardware.
                </p>
              </div>

              <div
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                        hover:-translate-y-2 transition
                        animate-float-reverse"
              >
                <Code className="w-10 h-10 text-purple-500 mb-4 animate-led" />
                <h3 className="text-xl font-bold mb-2">
                  User Applications (Mobile / Web)
                </h3>
                <p className="text-gray-400 text-sm">
                  Custom mobile apps and dashboards for control & monitoring.
                </p>
              </div>
            </div>

            {/* CENTER CORE */}
            <div className="flex justify-center">
              <div
                className="relative bg-gradient-to-r from-blue-600 to-purple-600
                        p-12 rounded-3xl shadow-2xl text-center
                        animate-float-slow animate-led"
              >
                <h3 className="text-3xl font-extrabold mb-2">Firmware</h3>
                <p className="text-sm text-gray-200 max-w-xs mx-auto">
                  Embedded logic, RTOS, real-time control & device intelligence
                </p>

                {/* blinking connectors */}
                <span className="absolute -left-3 top-1/2 w-5 h-5 bg-blue-500 rounded-full animate-signal"></span>
                <span className="absolute -right-3 top-1/2 w-5 h-5 bg-purple-500 rounded-full animate-signal"></span>
                <span className="absolute left-1/2 -top-3 w-5 h-5 bg-blue-500 rounded-full animate-signal"></span>
                <span className="absolute left-1/2 -bottom-3 w-5 h-5 bg-purple-500 rounded-full animate-signal"></span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-12">
              <div
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                        hover:-translate-y-2 transition
                        animate-float-reverse"
              >
                <Wifi className="w-10 h-10 text-blue-500 mb-4 animate-signal" />
                <h3 className="text-xl font-bold mb-2">
                  Connectivity Solutions
                </h3>
                <p className="text-gray-400 text-sm">
                  Wi-Fi, BLE, Zigbee, LoRa, LTE with secure communication.
                </p>
              </div>

              <div
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                        hover:-translate-y-2 transition
                        animate-float-slow"
              >
                <Cloud className="w-10 h-10 text-purple-500 mb-4 animate-led" />
                <h3 className="text-xl font-bold mb-2">
                  Cloud Data Processing
                </h3>
                <p className="text-gray-400 text-sm">
                  Cloud based analytics, remote monitoring, and data processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE SHOWCASE ================= */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[labImg, pcbImg, embeddedImg].map((img, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
                e.currentTarget.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translate(0px, 0px) scale(1)";
              }}
              className={`
          relative rounded-2xl overflow-hidden
          transition-all duration-700 ease-out
          animate-float-slow
          ${
            visibleImages[index]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }
        `}
            >
              <img src={img} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-24 bg-gray-100 px-8">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">
          Why Choose Navni ElectroTech?
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Hardware-First Engineering",
              desc: "Deep expertise in electronics, embedded systems, and firmware development.",
              back: "Designed for performance, reliability, and real-world hardware constraints.",
            },
            {
              title: "End-to-End Ownership",
              desc: "From design and prototyping to manufacturing and deployment.",
              back: "One partner responsible from concept to production scale.",
            },
            {
              title: "Production-Ready Solutions",
              desc: "Optimized for reliability, scalability, and mass production.",
              back: "Built to survive manufacturing, certification, and long-term use.",
            },
          ].map((item, index) => (
            <div key={index} className="group perspective">
              <div
                className="
    relative
    bg-white
    p-10
    rounded-xl
    shadow-lg
    text-center
    transition-transform duration-700
    transform-style-preserve-3d
    group-hover:[transform:rotateY(180deg)]
    min-h-[200px]
    flex items-center justify-center
  "
              >
                {/* FRONT */}
                <div className="backface-hidden">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>

                {/* BACK */}
                <div
                  className="
              absolute inset-0
              flex items-center justify-center
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white
              rounded-xl
              backface-hidden
              rotate-y-180
              p-8
            "
                >
                  <p className="font-semibold">{item.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUPPORTED PRODUCT CATEGORIES ================= */}
      <section className="py-24 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">
          Supported Product Categories
        </h2>

        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
          Our chip-to-cloud IoT & AI ecosystem adds smart control and monitoring
          capabilities to a wide range of consumer and industrial products.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {[
            ["Smart Lighting", Lightbulb],
            ["Smart Fan", Fan],
            ["Smart Air Cooler", Wind],
            ["Smart Plug", Plug],
            ["Smart Powerstrip", Power],
            ["Smart Switch Set", ToggleLeft],
            ["Smart Water Purifier", Droplets],
            ["Smart Geyser", Flame],
            ["Smart Air Purifier", ShieldCheck],
            ["Smart Washing Machine", WashingMachine],
            ["Smart Inverters", BatteryCharging],
            ["Smart Battery", Battery],
            ["Smart Refrigerator", Refrigerator],
            ["Smart Air Conditioner", Snowflake],
            ["Smart Chimney", HomeIcon],
            ["Smart Microwave", Microwave],
            ["Smart Cooker", CookingPot],
            ["Smart Room Heater", Heater],
            ["Smart Kettle", Coffee],
            ["Smart Lock", Lock],
            ["Smart Curtain", Blinds],
            ["Smart Door Sensor", DoorClosed],
            ["SOS Button", Siren],
            ["Smart Camera", Camera],
            ["Video Door Phone", Video],
            ["Smart Band", Watch],
            ["Smart Headphone", Headphones],
            ["Small Appliances", Cpu],
          ].map(([name, Icon], index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4" />
              <p className="font-semibold text-sm">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REQUEST A QUOTE ================= */}
      <section className="relative py-28 px-8 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-x"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-up">
            Request a Quote
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-up delay-200">
            Have an IoT or electronic hardware project in mind? Share your
            requirements with our experts and receive a customized, transparent
            quotation.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 rounded-lg font-bold text-white shadow-xl hover:scale-105 transition-transform animate-fade-up delay-400"
          >
            Request a Quote
          </Link>
        </div>
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
