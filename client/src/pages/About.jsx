export default function About() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* ================= WAVY HERO SECTION ================= */}
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

        {/* HERO CONTENT */}
        <div className="relative z-10 py-28 px-8 text-center max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About NavniElectroTech
          </h1>
          <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-white/90">
            NavniElectroTech is an IoT company driven by innovation, science,
            and the harmonious integration of humans and technology.
          </p>
        </div>
      </section>

      {/* ================= MEANING SECTION ================= */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What NavniElectroTech Means
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Navni
            </h3>
            <p className="leading-relaxed">
              Derived from the idea of “Nav” (New / Innovation), Navni
              represents fresh thinking, innovation, and forward momentum. It
              reflects our focus on creating new, smarter electronic solutions
              that solve real-world problems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">
              ElectroTech
            </h3>
            <p className="leading-relaxed">
              ElectroTech represents the fusion of electronics and advanced
              technology. It encompasses the design, development, and
              integration of electronic systems, embedded hardware, sensors,
              power electronics, and intelligent software to create smart,
              efficient, and connected solutions. At its core, ElectroTech
              stands for innovation, reliability, and engineering excellence,
              enabling modern industries through IoT, automation, and
              next-generation electronic technologies.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: "2018", label: "Founded In" },
            { value: "25+", label: "Happy Clients" },
            { value: "120+", label: "Multi-Domain Projects" },
            { value: "40+", label: "Talented Team" },
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-xl shadow-md bg-gray-50">
              <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
              <p className="mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              Our Vision
            </h2>
            <p className="leading-relaxed">
              To unite science, technology, and innovation to transform how
              humans interact with their environment, inspiring curiosity and
              groundbreaking ideas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              To empower businesses through end-to-end IoT solutions that drive
              growth, innovation, and competitiveness across industries.
            </p>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="bg-gray-100 py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Our Journey</h2>
          <p className="leading-relaxed text-gray-700">
            NavniElectroTech is a DPIIT-recognized startup with a passionate
            team of electronics engineers, firmware developers, and software
            experts. We identified a critical industry gap between hardware and
            software teams—and built NavniElectroTech to bridge it under one
            roof with excellence, speed, and rigorous testing.
          </p>
        </div>
      </section>

      {/* ================= BLOGS ================= */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            Blogs & Articles
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            Insights, research, and expert perspectives from our engineers and
            IoT specialists.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Bridging the Gap Between Hardware and Software in IoT",
                desc: "Why successful IoT products demand deep collaboration between electronics, firmware, and cloud systems.",
                tag: "IoT Architecture",
              },
              {
                title:
                  "From Prototype to Production: Avoiding Common Hardware Pitfalls",
                desc: "Key engineering considerations that help startups scale hardware products without costly redesigns.",
                tag: "Hardware Engineering",
              },
              {
                title: "Embedded Systems in 2025: Trends That Matter",
                desc: "A practical look at where embedded systems are heading and how businesses can prepare.",
                tag: "Embedded Systems",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <span className="inline-block mb-3 text-sm font-semibold text-blue-600">
                  {blog.tag}
                </span>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-6">{blog.desc}</p>

                <button className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-10 text-center text-sm">
        <p>© 2025 NavniElectroTech . All Rights Reserved.</p>
        <p className="mt-2">
          6c/21-c, Azad Nagar Gali No-3 Agra, UP | +91-9634624084 |
          NavniElectroTech.in
        </p>
      </footer>
    </div>
  );
}
