import { Link } from "react-router-dom";
import heroBg from "../assets/home/electronics-hero.png";
import labImg from "../assets/home/lab.jpg";
import pcbImg from "../assets/home/pcb.png";
import embeddedImg from "../assets/home/embedded.avif";

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
} from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 overflow-hidden">

     {/* ================= HERO SECTION ================= */}
<section className="relative w-full aspect-[16/9] overflow-hidden">
  <img
    src={heroBg}
    alt="Electronics Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* LEFT-ALIGNED TEXT */}
<div className="absolute inset-0 flex items-start pt-24">
  <div className="max-w-2xl px-12 text-white">
    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
      Cutting-edge <br />
      Electronics Solutions
    </h1>

    <p className="text-base md:text-lg mb-6">
      Empowering your business with innovative
      electronic and embedded systems
    </p>

    <Link
      to="/contact"
      className="inline-block bg-green-500 hover:bg-green-600
                 text-white px-8 py-3 rounded-lg font-bold"
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
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
      End-to-End IoT Architecture
    </h2>

    <p className="text-center text-gray-300 max-w-4xl mx-auto mb-20 text-lg">
      A seamless chip-to-cloud ecosystem where hardware, firmware,
      connectivity, applications, and data intelligence work together.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center">

      {/* LEFT */}
      <div className="space-y-12">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                        hover:-translate-y-2 transition
                        animate-float-slow">
          <Cpu className="w-10 h-10 text-blue-500 mb-4 animate-led" />
          <h3 className="text-xl font-bold mb-2">
            Hardware & Sensor Integration
          </h3>
          <p className="text-gray-400 text-sm">
            Custom electronics, PCB design, sensors, actuators,
            and production-grade hardware.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                        hover:-translate-y-2 transition
                        animate-float-reverse">
          <Code className="w-10 h-10 text-purple-500 mb-4 animate-led" />
          <h3 className="text-xl font-bold mb-2">
            End Applications (Mobile / Web)
          </h3>
          <p className="text-gray-400 text-sm">
            Mobile apps and dashboards built for usability
            and operational control.
          </p>
        </div>
      </div>

      {/* CENTER CORE */}
      <div className="flex justify-center">
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600
                        p-12 rounded-3xl shadow-2xl text-center
                        animate-float-slow animate-led">
          <h3 className="text-3xl font-extrabold mb-2">Firmware</h3>
          <p className="text-sm text-gray-200 max-w-xs mx-auto">
            Embedded logic, RTOS, device intelligence & real-time control
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
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                        hover:-translate-y-2 transition
                        animate-float-reverse">
          <Wifi className="w-10 h-10 text-blue-500 mb-4 animate-signal" />
          <h3 className="text-xl font-bold mb-2">
            Connectivity Protocols
          </h3>
          <p className="text-gray-400 text-sm">
            Wi-Fi, BLE, Zigbee, LoRa, LTE, MQTT
            with secure communication.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                        hover:-translate-y-2 transition
                        animate-float-slow">
          <Cloud className="w-10 h-10 text-purple-500 mb-4 animate-led" />
          <h3 className="text-xl font-bold mb-2">
            Data Processing (Edge / Cloud)
          </h3>
          <p className="text-gray-400 text-sm">
            Edge analytics, cloud dashboards, alerts,
            and AI-ready pipelines.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* ================= IMAGE SHOWCASE ================= */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <img
            src={labImg}
            alt="Engineering Lab"
            className="rounded-xl shadow-lg object-cover h-64 w-full animate-fade-up animate-float"
          />
          <img
            src={pcbImg}
            alt="PCB Design"
            className="rounded-xl shadow-lg object-cover h-64 w-full animate-fade-up delay-200 animate-float"
          />
          <img
            src={embeddedImg}
            alt="Embedded Systems"
            className="rounded-xl shadow-lg object-cover h-64 w-full animate-fade-up delay-400 animate-float"
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-24 bg-gray-100 px-8">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">
          Why Choose NavniElectroTech?
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Hardware-First Engineering",
              desc: "Deep expertise in electronics, embedded systems, and firmware development.",
            },
            {
              title: "End-to-End Ownership",
              desc: "From design and prototyping to manufacturing and deployment.",
            },
            {
              title: "Production-Ready Solutions",
              desc: "Optimized for reliability, scalability, and mass production.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition animate-fade-up"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {item.title}
              </h3>
              <p>{item.desc}</p>
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
            Have an IoT or electronic hardware project in mind?
            Share your requirements with our experts and receive a
            customized, transparent quotation.
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
      <footer className="bg-black text-gray-400 py-12 px-8 text-center text-sm">
        <p className="mb-2 text-white font-semibold">
          © 2025 NavniElectroTech
        </p>
        <p>
          6c/21-c, Azad Nagar Gali No-3 Agra, UP | +91-9634624084 |
          NavniElectroTech.in
        </p>
      </footer>

    </div>
  );
}
