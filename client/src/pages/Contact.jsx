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

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Share your idea with us. Our experts will help you turn it into a
          scalable and reliable product.
        </p>
      </section>

      {/* ================= TRUST INDICATORS ================= */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-gray-50 shadow-md">
            <ShieldCheck className="w-8 h-8 mx-auto text-blue-600" />
            <p className="mt-3 font-semibold">NDA Protected Discussion</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 shadow-md">
            <Users className="w-8 h-8 mx-auto text-purple-600" />
            <p className="mt-3 font-semibold">Industry Expert Engineers</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 shadow-md">
            <Clock className="w-8 h-8 mx-auto text-blue-600" />
            <p className="mt-3 font-semibold">Fast Response Time</p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: FORM */}
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

          {/* RIGHT: CONTACT DETAILS */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Business Enquiry</h4>
                <p>+91-9634624084</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <Mail className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>contact@navnielectrotech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Head Office</h4>
                <p>
                  6c/21-c, Azad Nagar Gali No-3
                  <br />
                  Agra, UP, India
                </p>
              </div>
            </div>

            {/* MAP */}
            <a
              href="https://www.google.com/maps?q=6c/21-c,+Azad+Nagar+Gali+No-3,+Agra,+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <iframe
                title="Navni ElectroTech Location"
                src="https://www.google.com/maps?q=6c/21-c,+Azad+Nagar+Gali+No-3,+Agra,+Uttar+Pradesh&output=embed"
                className="w-full h-72 md:h-80 rounded-xl border border-gray-200 shadow-md hover:opacity-95 transition"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-400 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COMPANY INFO */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              Navni ElectroTech
            </h3>
            <p className="text-sm mb-6">
              Transforming ideas into production-ready electronic solutions.
            </p>

            {/* SOCIAL ICONS */}
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
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms&conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
