import { Briefcase, MapPin, Clock, Upload, Mail, Phone } from "lucide-react";

export default function Careers() {
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
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Join Our Team!
        </h1>
        <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/90">
          At XYZBorg, we are a team of Embedded Developers, Node.js, React,
          React Native engineers and UI/UX designers building the future of IoT.
        </p>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Build Your Career in IoT
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          If you want to build your career in IoT and are looking to join a
          passionate, innovative and fast-growing team — we’d love to hear
          from you.
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">
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

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Apply →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= JOIN US FORM ================= */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

          {/* FORM */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Join Us
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Cover Letter"
                className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>

              <div className="border rounded-lg px-4 py-3 flex items-center gap-3 text-gray-600">
                <Upload className="w-5 h-5" />
                <span>Upload Your Resume</span>
                <input type="file" className="ml-auto" />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Address
              </h3>
              <p>
                India Office:<br />
                A-57, Fifth Floor, Sector-136<br />
                Noida, UP – 201304
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Contact Us
              </h3>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                +91-8595608045
              </p>
              <p className="flex items-center gap-2 mt-2">
                <Mail className="w-5 h-5 text-purple-600" />
                career@xyzborg.in
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Working Hours
              </h3>
              <p>
                Monday – Friday: 9:30 AM – 6:30 PM<br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-12 text-center text-sm">
        <p className="mb-2">
          © 2025 XYZBorg Technologies
        </p>
        <p className="text-gray-400">
          Since 2018 | Building Reliable IoT Solutions
        </p>
      </footer>

    </div>
  );
}
