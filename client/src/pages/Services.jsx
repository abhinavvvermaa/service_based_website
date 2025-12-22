import {
  Cpu,
  CircuitBoard,
  Code2,
  Hammer,
  TestTube2,
  Factory,
} from "lucide-react";

// Import local images
import hardwareImg from "../assets/services/hardware.avif";
import pcbImg from "../assets/services/pcb.avif";
import firmwareImg from "../assets/services/firmware.avif";
import prototypeImg from "../assets/services/prototyping.avif";
import testingImg from "../assets/services/testing.jpg";
import manufacturingImg from "../assets/services/production.jpg";

export default function Services() {
  const services = [
    {
      title: "Electronic Hardware Design",
      desc: "Complete electronic hardware design including schematics, component selection, power optimization, and system architecture for scalable products.",
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      img: hardwareImg,
    },
    {
      title: "PCB Design & Layout",
      desc: "High-quality multi-layer PCB design ensuring signal integrity, EMI/EMC compliance, and manufacturability for production readiness.",
      icon: <CircuitBoard className="w-10 h-10 text-purple-600" />,
      img: pcbImg,
    },
    {
      title: "Firmware / Embedded Systems",
      desc: "Robust embedded firmware development for microcontrollers and SoCs with real-time performance and seamless hardware interaction.",
      icon: <Code2 className="w-10 h-10 text-blue-600" />,
      img: firmwareImg,
    },
    {
      title: "Prototyping",
      desc: "Rapid prototyping to validate designs, minimize risks, and accelerate time-to-market with functional hardware units.",
      icon: <Hammer className="w-10 h-10 text-purple-600" />,
      img: prototypeImg,
    },
    {
      title: "Testing & Validation",
      desc: "Comprehensive functional, environmental, and stress testing to ensure reliability, compliance, and long-term product performance.",
      icon: <TestTube2 className="w-10 h-10 text-blue-600" />,
      img: testingImg,
    },
    {
      title: "Production & Manufacturing",
      desc: "Smooth transition from prototype to mass production with manufacturing support, quality assurance, and supply chain coordination.",
      icon: <Factory className="w-10 h-10 text-purple-600" />,
      img: manufacturingImg,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Our Services
        </h1>
        <p className="max-w-4xl mx-auto text-lg md:text-xl">
          End-to-end electronics and embedded engineering services — from concept
          to large-scale manufacturing.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
          Engineering Excellence Under One Roof
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
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
                className="bg-gray-50 p-8 rounded-xl shadow-md"
              >
                <p className="font-semibold text-lg text-blue-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Your Product?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Partner with our expert engineering team to transform your idea into a
          production-ready solution.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:opacity-90 transition"
        >
          Talk to Our Experts
        </a>
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
