import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
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

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ans4u4p", // ✅ EmailJS SERVICE ID
        "template_8lwj7cq", // ✅ EmailJS TEMPLATE ID
        formRef.current,
        "snDjN5aDpyFDX-FA_" // ❗ Replace with EmailJS PUBLIC KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };
  useEffect(() => {
    document.title = "Contact – Navni ElectroTech";
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ================= HERO ================= */}
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
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Contact Us
            </h1>

            <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/90">
              Share your idea with us. Our experts will help you turn it into a
              scalable and reliable product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST INDICATORS ================= */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              Icon: ShieldCheck,
              text: "NDA Protected Discussion",
              color: "text-blue-600",
            },
            {
              Icon: Users,
              text: "Industry Expert Engineers",
              color: "text-purple-600",
            },
            { Icon: Clock, text: "Fast Response Time", color: "text-blue-600" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={fadeUp}
              className="p-6 rounded-xl bg-gray-50 shadow-md"
            >
              <item.Icon className={`w-8 h-8 mx-auto ${item.color}`} />
              <p className="mt-3 font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={fadeUp}
          >
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Share Your Requirement
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  title="Please enter a valid email address"
                  className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  maxLength="10"
                  title="Please enter a valid 10-digit phone number"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Drop your message"
                  required
                  className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Submit Request"}
                </button>

                {/* STATUS */}
                {status === "success" && (
                  <p className="text-green-600 text-sm text-center">
                    ✅ Message sent successfully. We’ll contact you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">
                    ❌ Failed to send message. Please try again later.
                  </p>
                )}

                <p className="text-xs text-gray-500 text-center">
                  All information will be kept confidential.
                </p>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT DETAILS */}
          <div className="space-y-4">
            {/* PHONE */}

            <motion.a
              href="tel:+919315612790"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md
             hover:shadow-lg transition cursor-pointer"
            >
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Business Enquiry</h4>
                <p className="text-gray-700">+91-9315612790</p>
              </div>
            </motion.a>

            {/* EMAIL */}
            <motion.a
              href="mailto:contact@navnielectrotech.com"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md
             hover:shadow-lg transition cursor-pointer"
            >
              <Mail className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-700">contact@navnielectrotech.com</p>
              </div>
            </motion.a>

            {/* ADDRESS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
            >
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Office</h4>
                <p>
                  Sector-70
                  <br />
                  Noida, UP, India
                </p>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={fade}
              href="https://www.google.com/maps?q=Sector+70,+Noida,+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <iframe
                title="Navni ElectroTech Location"
                src="https://www.google.com/maps?q=Sector+70,+Noida,+Uttar+Pradesh&output=embed"
                className="w-full h-72 md:h-80 rounded-xl border border-gray-200 shadow-md hover:opacity-95 transition"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.a>
          </div>
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
