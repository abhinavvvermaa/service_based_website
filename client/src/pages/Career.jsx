import { useState } from "react";
import { Briefcase, MapPin, Clock, Upload, Mail, Phone } from "lucide-react";

export default function Careers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const jobs = [
    {
      title: "React Native Developer",
      department: "Developer",
      experience: "1+ Years",
      type: "Full Time",
      location: "Noida",
    },
    {
      title: "PCB Designer",
      department: "Engineer",
      experience: "1+ Years",
      type: "Full Time",
      location: "Noida",
    },
    {
      title: "Node Js Developer",
      department: "Developer",
      experience: "1+ Years",
      type: "Full Time",
      location: "Noida",
    },
    {
      title: "Embedded Developer",
      department: "Engineering",
      experience: "1+ Years",
      type: "Full Time",
      location: "Noida",
    },
    {
      title: "Business Development Executive",
      department: "Business Development",
      experience: "1+ Years",
      type: "Full Time",
      location: "Noida",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Join Our Team!</h1>
        <p className="max-w-4xl mx-auto text-lg text-white/90">
          We are a team of Embedded, Node.js, React and React Native engineers
          building innovative IoT solutions.
        </p>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Build Your Career in IoT</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          If you want to grow in IoT and work with passionate people, we’d love
          to hear from you.
        </p>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Latest Openings
        </h2>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100
           shadow-sm hover:shadow-xl transition
           flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight mb-2">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.experience}
                  </span>
                  <span>{job.type}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedJob(job.title);
                  setShowModal(true);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600
           text-white px-7 py-3 rounded-xl font-semibold
           shadow-md hover:shadow-lg transition"
              >
                Apply →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPLY MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div
            className="bg-white w-full max-w-2xl rounded-xl p-6 relative
                max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-8 text-center">
              Apply For {selectedJob}
            </h2>

            <form className="grid md:grid-cols-2 gap-6">
              <input
                className="border-b p-2 outline-none"
                placeholder="Name *"
              />
              <input
                className="border-b p-2 outline-none"
                placeholder="Email *"
              />
              <input
                className="border-b p-2 outline-none"
                placeholder="Phone *"
              />
              <input
                className="border-b p-2 outline-none"
                placeholder="Current Salary"
              />
              <input
                className="border-b p-2 outline-none"
                placeholder="Expected Salary"
              />
              <input
                className="border-b p-2 outline-none"
                placeholder="Notice Period"
              />

              <div className="col-span-2">
                <p className="mb-2 font-medium">Ready to Relocate</p>
                <label className="mr-4">
                  <input type="radio" name="relocate" /> Yes
                </label>
                <label>
                  <input type="radio" name="relocate" /> No
                </label>
              </div>

              <input
                className="border-b p-2 outline-none col-span-2"
                placeholder="Total Work Experience"
              />

              <textarea
                rows="3"
                className="border-b p-2 outline-none col-span-2"
                placeholder="Relevant Experience"
              />

              <div className="col-span-2">
                <label className="block mb-2 font-medium">
                  Upload Resume (DOC/PDF, Max 5MB)
                </label>
                <input type="file" />
              </div>

              <button
                type="submit"
                className="col-span-2 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-bold"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= JOIN US FORM ================= */}
      <section className="bg-gray-50 py-28 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h2 className="text-4xl font-bold mb-8">Join Us</h2>

            <form className="space-y-6">
              <input
                className="w-full border border-gray-300 px-5 py-3 rounded-xl
           focus:ring-2 focus:ring-blue-600 focus:border-blue-600
           outline-none"
                placeholder="Name"
              />
              <input
                className="w-full border border-gray-300 px-5 py-3 rounded-xl
           focus:ring-2 focus:ring-blue-600 focus:border-blue-600
           outline-none"
                placeholder="Email Address"
              />
              <input
                className="w-full border border-gray-300 px-5 py-3 rounded-xl
           focus:ring-2 focus:ring-blue-600 focus:border-blue-600
           outline-none"
                placeholder="Subject"
              />
              <textarea
                rows="4"
                className="w-full border border-gray-300 px-5 py-3 rounded-xl
           focus:ring-2 focus:ring-blue-600 focus:border-blue-600
           outline-none"
                placeholder="Cover Letter"
              />
              <div className="border rounded-lg px-4 py-3 flex items-center gap-3">
                <Upload className="w-5 h-5" />
                <input type="file" className="ml-auto" />
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold">
                Submit
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Address</h3>
              <p>
                6c/21-c, Azad Nagar Gali No-3
                <br />
                Agra, UP
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" /> +91-9634624084
              </p>
              <p className="flex items-center gap-2 mt-2">
                <Mail className="w-5 h-5 text-purple-600" /> contact@navnielectrotech.com
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-10 text-center text-sm">
        <p>© 2025 Navni ElectroTech . All Rights Reserved.</p>
        <p className="mt-2">
          6c/21-c, Azad Nagar Gali No-3 Agra, UP | +91-9634624084 |
          contact@navnielectrotech.com
        </p>
      </footer>
    </div>
  );
}
