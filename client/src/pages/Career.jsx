import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Facebook,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";

export default function Careers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const formRef = useRef();

  const jobs = [
    {
      title: "Trainee Electronic Engineer (Freshers)",
      type: "fresher",
      experience: "Fresher",
      location: "Noida",
      description:
        "Hands-on training in electronic circuits, testing, embedded basics and PCB fundamentals. Ideal for freshers looking to start a career in Electronics and IoT.",
    },
    {
      title: "Production Engineer",
      type: "experienced",
      experience: "0–1 Year",
      location: "Noida",
      description:
        "Handle production support, testing, quality checks, BOM coordination and assist manufacturing processes.",
    },
    {
      title: "R&D Engineer",
      type: "experienced",
      experience: "0–1 Year",
      location: "Noida",
      description:
        "Work on research and development of new electronic products, prototyping, debugging and product improvement.",
    },
    {
      title: "PCB Designer",
      type: "experienced",
      experience: "0–1 Year",
      location: "Noida",
      description:
        "Design schematic and PCB layouts, perform DRC checks, component placement and support production-ready designs.",
    },
  ];

  // ================= EMAILJS SUBMIT HANDLER =================
  const sendApplication = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ans4u4p", // e.g. service_xxxxx
        "template_atfgca2", // company notification template
        formRef.current,
        "snDjN5aDpyFDX-FA_" // EmailJS public key
      )
      .then(
        () => {
          alert("Application submitted successfully!");
          setShowModal(false);
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to submit application. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Join Our Team</h1>
        <p className="max-w-4xl mx-auto text-lg text-white/90">
          Build your career in Electronics, R&D, Production and PCB Design.
        </p>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Current Openings
        </h2>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100
                         shadow-sm hover:shadow-xl transition
                         flex flex-col md:flex-row md:items-center
                         md:justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-3">{job.description}</p>

                <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.type === "fresher" ? "Trainee" : "Experienced"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedJob(job);
                  setShowModal(true);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600
                           text-white px-7 py-3 rounded-xl font-semibold
                           shadow-md hover:shadow-lg transition
                           flex items-center gap-2"
              >
                Apply <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPLY MODAL ================= */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-end md:items-center justify-center">
          <div
            className="
    bg-white w-full md:max-w-2xl
    rounded-t-2xl md:rounded-xl
    p-5 md:p-6
    relative
    max-h-[90vh]
    overflow-y-auto
  "
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-3xl text-gray-600 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-8 text-center">
              Apply For {selectedJob.title}
            </h2>

            {/* ================= FORM ================= */}
         <form
  ref={formRef}
  onSubmit={sendApplication}
  className="grid grid-cols-1 md:grid-cols-2 gap-5"
>
  {/* JOB TITLE */}
  <input name="job_title" type="hidden" value={selectedJob.title} />

  {/* NAME */}
  <input
    name="name"
    placeholder="Name *"
    required
    className="border-b p-3 outline-none w-full"
  />

  {/* EMAIL */}
  <input
    type="email"
    name="email"
    placeholder="Email *"
    required
    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
    title="Please enter a valid email address"
    className="border-b p-3 outline-none w-full"
  />

  {/* PHONE */}
  <input
    type="tel"
    name="phone"
    placeholder="Phone *"
    required
    pattern="[0-9]{10}"
    inputMode="numeric"
    maxLength="10"
    title="Enter 10-digit phone number"
    onInput={(e) =>
      (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
    }
    className="border-b p-3 outline-none w-full"
  />

  {/* QUALIFICATION */}
  <input
    name="qualification"
    placeholder="Qualification *"
    required
    className="border-b p-3 outline-none w-full"
  />

  {/* ================= FRESHER ================= */}
  {selectedJob.type === "fresher" && (
    <>
      <input
        name="year_of_passing"
        placeholder="Year of Passing *"
        required
        inputMode="numeric"
        maxLength="4"
        pattern="[0-9]{4}"
        title="Enter valid year"
        onInput={(e) =>
          (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
        }
        className="border-b p-3 outline-none col-span-1 md:col-span-2"
      />

      <div className="col-span-1 md:col-span-2 bg-gray-50 p-4 rounded-lg text-sm">
        <strong>Note:</strong> If work performance is good, a stipend of{" "}
        <span className="font-semibold text-green-600">
          ₹10,000 per month
        </span>{" "}
        will be provided.
      </div>
    </>
  )}

  {/* ================= EXPERIENCED ================= */}
  {selectedJob.type === "experienced" && (
    <>
      <input
        name="current_salary"
        placeholder="Current Salary *"
        required
        inputMode="numeric"
        onInput={(e) =>
          (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
        }
        className="border-b p-3 outline-none w-full"
      />

      <input
        name="expected_salary"
        placeholder="Expected Salary *"
        required
        inputMode="numeric"
        onInput={(e) =>
          (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
        }
        className="border-b p-3 outline-none w-full"
      />

      <input
        name="notice_period"
        placeholder="Notice Period *"
        required
        className="border-b p-3 outline-none w-full"
      />

      {/* NOIDA LOCATION */}
      <div className="col-span-1 md:col-span-2">
        <p className="mb-3 font-medium text-gray-700">
          Are you comfortable for Noida Location? *
        </p>

        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="relocate"
              value="Yes"
              required
              className="accent-blue-600"
            />
            <span>Yes</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="relocate"
              value="No"
              className="accent-blue-600"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <input
        name="total_experience"
        placeholder="Total Work Experience (Years) *"
        required
        inputMode="decimal"
        pattern="^[0-9]+(\.[0-9]+)?$"
        className="border-b p-3 outline-none col-span-1 md:col-span-2"
      />

      <textarea
        name="relevant_experience"
        rows="3"
        placeholder="Relevant Experience *"
        required
        className="border-b p-3 outline-none col-span-1 md:col-span-2"
      />
    </>
  )}

  {/* RESUME */}
  <input
    name="resume_link"
    placeholder="Resume Link (Google Drive) *"
    required
    type="url"
    className="border-b p-3 outline-none col-span-1 md:col-span-2"
  />

  <p className="text-xs text-gray-500 col-span-1 md:col-span-2">
    Please ensure the Google Drive link is set to{" "}
    <strong>“Anyone with the link can view”</strong>.
  </p>

  {/* SUBMIT BUTTON */}
  <button
    type="submit"
    className="
      col-span-1 md:col-span-2
      inline-flex items-center justify-center gap-3
      px-10 py-3
      rounded-full
      font-semibold text-white
      bg-gradient-to-r from-blue-600 to-purple-600
      shadow-lg
      transition-all duration-300
      hover:from-blue-700 hover:to-purple-700
      hover:scale-105
      active:scale-95
    "
  >
    Apply
  </button>
</form>

          </div>
        </div>
      )}

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
