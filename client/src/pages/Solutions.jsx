import {
  Power,
  Clock,
  Mic,
  Palette,
  Gauge,
  Smartphone,
  Sparkles,
  Lightbulb,
  Fan,
  Thermometer,
  Settings,
  Droplets,
  AlertTriangle,
  Wind,
  Filter,
  Bell,
  ShieldCheck,
  Waves,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
/* IMAGES */
import bulbImg from "../assets/solutions/bulb.jpg";
import switchImg from "../assets/solutions/switch.webp";
import coolerImg from "../assets/solutions/cooler.jpg";
import chimneyImg from "../assets/solutions/chimney.avif";
import acImg from "../assets/solutions/conditioner.avif";
import heaterImg from "../assets/solutions/heater.avif";
import purifierImg from "../assets/solutions/water_purifier1.avif";
import airPurifierImg from "../assets/solutions/air_purifier.avif";
import fanImg from "../assets/solutions/fan.avif";
import { motion } from "framer-motion";
import { useEffect } from "react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

/* FEATURE */
function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-white/95 p-4 rounded-xl shadow">
      <Icon className="w-5 h-5 text-blue-600" />
      <span className="text-gray-800 font-medium">{text}</span>
    </div>
  );
}

/* PRODUCT CARD */
function ProductCard({ icon: Icon, title, features, bgImage }) {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/30" />

      <div className="relative z-10 p-10 text-white">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white/25 backdrop-blur-sm">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold drop-shadow-lg">{title}</h2>
        </div>

        <h3 className="text-xl font-semibold mb-6 drop-shadow">
          Product Features
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Feature key={i} icon={f.icon} text={f.text} />
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/40 flex items-center gap-4 text-gray-100">
          <Smartphone className="w-5 h-5 text-purple-300" />
          <span className="font-medium">
            Compatible Platforms: Mobile App & Voice Assistants
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  useEffect(() => {
  document.title = "Solutions – Navni ElectroTech";
}, []);
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ================= WAVY HERO BACKGROUND ================= */}
      <section className="relative overflow-hidden text-white">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500" />

        {/* Wavy Shape 1 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.12)"
            d="M0,200 C240,300 480,100 720,160 960,220 1200,320 1440,180 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wavy Shape 2 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.08)"
            d="M0,300 C300,200 600,350 900,260 1200,170 1380,260 1440,300 L1440,0 L0,0 Z"
          />
        </svg>

        {/* Wavy Shape 3 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.06)"
            d="M0,420 C260,360 520,420 780,390 1040,360 1200,420 1440,380 L1440,0 L0,0 Z"
          />
        </svg>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Smart Appliance IoT Solutions
            </h1>

            <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/90">
              Super powering appliances, consumer durable and consumer
              electronics brands by providing truly end-to-end IoT solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-24 px-8 max-w-7xl mx-auto space-y-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Lightbulb}
            title="Smart Bulbs"
            bgImage={bulbImg}
            features={[
              { icon: Power, text: "Power On / Off" },
              { icon: Sparkles, text: "Mood Lighting Setup" },
              { icon: Gauge, text: "White Gradient & Intensity" },
              { icon: Clock, text: "Scheduling" },
              { icon: Palette, text: "Change Colors" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Power}
            title="Smart Switches & Plugs"
            bgImage={switchImg}
            features={[
              { icon: Power, text: "Power On / Off" },
              { icon: Clock, text: "Scheduling" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Fan}
            title="Smart Air Coolers"
            bgImage={coolerImg}
            features={[
              { icon: Power, text: "Power On / Off" },
              { icon: Fan, text: "Fan Speed & Swing Control" },
              { icon: Thermometer, text: "Indoor Temperature" },
              { icon: Settings, text: "Mode Selection" },
              { icon: Droplets, text: "Water Level Indication" },
              { icon: Clock, text: "Scheduling" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Wind}
            title="Smart Chimneys"
            bgImage={chimneyImg}
            features={[
              { icon: Power, text: "Power On / Off" },
              { icon: Wind, text: "Air Flow Control" },
              { icon: Clock, text: "Scheduling" },
              { icon: Bell, text: "Service Booking" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Thermometer}
            title="Smart Air Conditioners"
            bgImage={acImg}
            features={[
              { icon: Power, text: "Power On / Off" },
              { icon: Thermometer, text: "Temperature Control" },
              { icon: Fan, text: "Fan Speed & Swing Control" },
              { icon: Settings, text: "Mode Selection" },
              { icon: Clock, text: "Scheduling" },
              { icon: Bell, text: "Service Booking" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Droplets}
            title="Smart Water Heater"
            bgImage={heaterImg}
            features={[
              { icon: Power, text: "Power On / Off" },
              { icon: Thermometer, text: "Temperature Control" },
              { icon: Clock, text: "Scheduling" },
              { icon: AlertTriangle, text: "Fault Alerts" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Filter}
            title="Smart Water Purifiers"
            bgImage={purifierImg}
            features={[
              { icon: Filter, text: "Filter Life Status" },
              { icon: Waves, text: "Input & Output TDS Sensors" },
              { icon: Gauge, text: "Pump Power & Flow Status" },
              { icon: AlertTriangle, text: "Filter Alerts" },
              { icon: Droplets, text: "Tank Water Level" },
              { icon: Clock, text: "Running Hours" },
              { icon: ShieldCheck, text: "RTC-based Warranty" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Wind}
            title="Smart Air Purifiers"
            bgImage={airPurifierImg}
            features={[
              { icon: Power, text: "Power On / Off" },
              { icon: Fan, text: "Fan Speed Control" },
              { icon: Gauge, text: "PM 2.5 Sensor" },
              { icon: Thermometer, text: "Indoor Temperature Sensor" },
              { icon: AlertTriangle, text: "Filter Alerts" },
              { icon: Settings, text: "Mode Selection" },
              { icon: Clock, text: "Scheduling" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={fadeUp}
        >
          <ProductCard
            icon={Fan}
            title="Smart Fans"
            bgImage={fanImg}
            features={[
              { icon: Power, text: "Power On / Off" },
              { icon: Fan, text: "Fan Speed Control" },
              { icon: Thermometer, text: "Indoor Temperature" },
              { icon: Settings, text: "Mode Selection" },
              { icon: Clock, text: "Scheduling" },
              { icon: Mic, text: "Voice Control" },
            ]}
          />
        </motion.div>
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
              <span className="text-sm">+91-9315612790</span>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Mail size={18} />
              <span className="text-sm">contact@navnielectrotech.com</span>
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
