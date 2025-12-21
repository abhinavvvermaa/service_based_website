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
} from "lucide-react";

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
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= WAVY HERO BACKGROUND ================= */}
<section className="relative overflow-hidden text-white">

  {/* Base Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

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
  <div className="relative z-10 max-w-6xl mx-auto px-8 py-36">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
      Smart Appliance IoT Solutions
    </h1>

    <p className="max-w-4xl text-lg md:text-xl text-white/90">
      Super powering appliances, consumer durable and consumer electronics
      brands by providing truly end-to-end IoT solutions
    </p>
  </div>

</section>


      {/* ================= PRODUCTS ================= */}
      <section className="py-24 px-8 max-w-7xl mx-auto space-y-24">
        <ProductCard icon={Lightbulb} title="Smart Bulbs" bgImage={bulbImg}
          features={[
            { icon: Power, text: "Power On / Off" },
            { icon: Sparkles, text: "Mood Lighting Setup" },
            { icon: Gauge, text: "White Gradient & Intensity" },
            { icon: Clock, text: "Scheduling" },
            { icon: Palette, text: "Change Colors" },
            { icon: Mic, text: "Voice Control" },
          ]}
        />

        <ProductCard icon={Power} title="Smart Switches & Plugs" bgImage={switchImg}
          features={[
            { icon: Power, text: "Power On / Off" },
            { icon: Clock, text: "Scheduling" },
            { icon: Mic, text: "Voice Control" },
          ]}
        />

        <ProductCard icon={Fan} title="Smart Air Coolers" bgImage={coolerImg}
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

        <ProductCard icon={Wind} title="Smart Chimneys" bgImage={chimneyImg}
          features={[
            { icon: Power, text: "Power On / Off" },
            { icon: Wind, text: "Air Flow Control" },
            { icon: Clock, text: "Scheduling" },
            { icon: Bell, text: "Service Booking" },
            { icon: Mic, text: "Voice Control" },
          ]}
        />

        <ProductCard icon={Thermometer} title="Smart Air Conditioners" bgImage={acImg}
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

        <ProductCard icon={Droplets} title="Smart Water Heater" bgImage={heaterImg}
          features={[
            { icon: Power, text: "Power On / Off" },
            { icon: Thermometer, text: "Temperature Control" },
            { icon: Clock, text: "Scheduling" },
            { icon: AlertTriangle, text: "Fault Alerts" },
            { icon: Mic, text: "Voice Control" },
          ]}
        />

        <ProductCard icon={Filter} title="Smart Water Purifiers" bgImage={purifierImg}
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

        <ProductCard icon={Wind} title="Smart Air Purifiers" bgImage={airPurifierImg}
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

        <ProductCard icon={Fan} title="Smart Fans" bgImage={fanImg}
          features={[
            { icon: Power, text: "Power On / Off" },
            { icon: Fan, text: "Fan Speed Control" },
            { icon: Thermometer, text: "Indoor Temperature" },
            { icon: Settings, text: "Mode Selection" },
            { icon: Clock, text: "Scheduling" },
            { icon: Mic, text: "Voice Control" },
          ]}
        />
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
