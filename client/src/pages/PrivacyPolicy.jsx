import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  User,
  Cookie,
  Database,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.2),transparent_40%)]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparency, trust, and data protection are core values at
            <span className="text-white font-semibold"> Navni ElectroTech</span>.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative -mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="backdrop-blur-xl bg-white/80 shadow-xl rounded-3xl p-10">
            <p className="text-lg leading-relaxed">
              We respect your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, and safeguard data when you interact with our website,
              products, or services.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE SECTIONS ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 relative">

          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block" />

          <PolicyStep
            number="01"
            icon={User}
            title="Information We Collect"
          >
            <ul className="list-disc list-inside space-y-2">
              <li>Name, email address, phone number</li>
              <li>Company name and project details</li>
              <li>Messages submitted via contact forms</li>
              <li>Technical data like IP address and browser type</li>
            </ul>
          </PolicyStep>

          <PolicyStep
            number="02"
            icon={Database}
            title="How We Use Your Information"
          >
            <ul className="list-disc list-inside space-y-2">
              <li>Respond to inquiries and deliver services</li>
              <li>Project communication and customer support</li>
              <li>Improve website functionality</li>
              <li>Meet legal and regulatory requirements</li>
            </ul>
          </PolicyStep>

          <PolicyStep
            number="03"
            icon={Cookie}
            title="Cookies & Tracking"
          >
            <p>
              We may use cookies and analytics tools to improve performance and
              user experience. You can disable cookies via your browser
              settings.
            </p>
          </PolicyStep>

          {/* HIGHLIGHT SECTION */}
          <div className="relative md:pl-20 mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Lock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">
                  Data Security Is Our Priority
                </h3>
              </div>
              <p className="text-lg text-white/90">
                We implement strict technical and organizational measures to
                protect your data from unauthorized access, disclosure, or
                misuse.
              </p>
            </div>
          </div>

          <PolicyStep
            number="04"
            icon={CheckCircle}
            title="Your Rights"
          >
            <p>
              You may request access, correction, or deletion of your personal
              information at any time by contacting us.
            </p>
          </PolicyStep>

          <PolicyStep
            number="05"
            icon={Mail}
            title="Contact Us"
          >
            <p>
              Email:&nbsp;
              <a
                href="mailto:contact@navnielectrotech.com"
                className="text-blue-600 font-medium hover:underline"
              >
                contact@navnielectrotech.com
              </a>
            </p>
          </PolicyStep>

        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xl font-medium">
            🔐 We value your trust. Your data is handled responsibly and
            transparently.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENT ================= */

function PolicyStep({ number, icon: Icon, title, children }) {
  return (
    <div className="relative md:pl-20 mb-20">
      <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition">
        <span className="text-5xl font-extrabold text-slate-200">
          {number}
        </span>
        <h3 className="text-2xl font-bold mt-2 mb-4">
          {title}
        </h3>
        <div className="text-slate-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
