import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blog";
import { motion } from "framer-motion";

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


export default function About() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* ================= WAVY HERO SECTION ================= */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500" />

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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 py-28 px-8 text-center max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About Navni ElectroTech
          </h1>
        </motion.div>
      </section>

      {/* ================= MEANING SECTION ================= */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-12"
        >
          What Navni ElectroTech Means
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            Navni ElectroTech
          </h3>
          <p className="leading-relaxed">
            Navni ElectroTech comes from “Nav”, meaning new, symbolizing
            innovation and forward-thinking. It represents new technology and
            smart electronic solutions designed to solve real-world problems and
            shape the future.
          </p>
        </motion.div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: "2026", label: "Founded In" },
            { value: "10+", label: "Happy Clients" },
            { value: "30+", label: "Multi-Domain Projects" },
            { value: "5+", label: "Talented Team" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ ampunt: 0.2 }}
              variants={fadeUp}
              className="p-8 rounded-xl shadow-md bg-gray-50"
            >
              <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
              <p className="mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              Our Vision
            </h2>
            <p className="leading-relaxed">
              To become a globally trusted electronics and IoT innovation
              partner, shaping the future through intelligent engineering,
              reliable solutions, and future-ready technologies that empower
              industries, improve lives, and drive sustainable technological
              progress.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-600">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              Our mission is to design, develop, and deliver end-to-end
              electronic hardware and embedded solutions that bridge the gap
              between ideas and real-world products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="bg-gray-100 py-20 px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fade}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-10">Our Journey</h2>
          <p className="leading-relaxed text-gray-700">
            As a startup, Navni ElectroTech was founded to transform ideas into
            practical electronic solutions. Built by passionate engineers, we
            bridge the gap between hardware and software under one roof,
            delivering reliable and innovative products. We continue to grow
            with a strong focus on quality, technology, and real-world impact.
          </p>
        </motion.div>
      </section>

      {/* ================= BLOGS ================= */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-6"
          >
            Blogs & Articles
          </motion.h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            Insights, research, and expert perspectives from our engineers and
            IoT specialists.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <motion.div
                key={blog.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <span className="inline-block mb-3 text-sm font-semibold text-blue-600">
                  {blog.tag}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6">{blog.description}</p>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <span className="text-sm">+91-9634624084</span>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Mail size={18} />
              <span className="text-sm">contact@navnielectrotech.com</span>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <MapPin size={18} />
              <span className="text-sm">
                6c/21-c, Azad Nagar Gali No-3,
                <br />
                Agra, Uttar Pradesh
              </span>
            </div>

            {/* MAP */}
            <a
              href="https://www.google.com/maps?q=6c/21-c,+Azad+Nagar+Gali+No-3,+Agra,+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
            >
              <iframe
                title="Navni ElectroTech Location"
                src="https://www.google.com/maps?q=6c/21-c,+Azad+Nagar+Gali+No-3,+Agra,+Uttar+Pradesh&output=embed"
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
            © 2025 Navni ElectroTech. All rights reserved.
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
