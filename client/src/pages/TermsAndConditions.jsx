import { Link } from "react-router-dom";
import {
  FileText,
  Shield,
  AlertTriangle,
  Gavel,
  RefreshCcw,
  Mail,
} from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.25),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.25),transparent_40%)]"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our website or
            services.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative -mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="backdrop-blur-xl bg-white/80 shadow-xl rounded-3xl p-10">
            <p className="text-lg leading-relaxed">
              These Terms & Conditions govern your use of the website and
              services provided by{" "}
              <strong>Navni ElectroTech</strong>. By accessing or using our
              website, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          <TermBlock
            number="01"
            icon={Shield}
            title="Use of Website"
          >
            <p>
              You agree to use this website only for lawful purposes and in a
              manner that does not infringe the rights of others or restrict
              their use of the website.
            </p>
          </TermBlock>

          <TermBlock
            number="02"
            icon={AlertTriangle}
            title="Intellectual Property"
          >
            <p>
              All content, designs, logos, text, graphics, and software on this
              website are the intellectual property of Navni ElectroTech and may
              not be copied, reproduced, or distributed without written
              permission.
            </p>
          </TermBlock>

          <TermBlock
            number="03"
            icon={Gavel}
            title="Limitation of Liability"
          >
            <p>
              Navni ElectroTech shall not be liable for any direct, indirect,
              incidental, or consequential damages resulting from the use or
              inability to use this website or its services.
            </p>
          </TermBlock>

          <TermBlock
            number="04"
            icon={AlertTriangle}
            title="Third-Party Links"
          >
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of any
              third-party websites.
            </p>
          </TermBlock>

          <TermBlock
            number="05"
            icon={RefreshCcw}
            title="Changes to Terms"
          >
            <p>
              We reserve the right to update or modify these Terms & Conditions
              at any time. Changes will be effective immediately upon posting on
              this page.
            </p>
          </TermBlock>

          <TermBlock
            number="06"
            icon={Gavel}
            title="Governing Law"
          >
            <p>
              These Terms & Conditions shall be governed and interpreted in
              accordance with the laws of India. Any disputes shall be subject
              to the jurisdiction of Indian courts.
            </p>
          </TermBlock>

          <TermBlock
            number="07"
            icon={Mail}
            title="Contact Information"
          >
            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:contact@navnielectrotech.com"
                className="text-blue-600 font-medium hover:underline"
              >
                contact@navnielectrotech.com
              </a>
            </p>
          </TermBlock>

          {/* Back Button */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xl font-medium">
            ⚖️ These terms are designed to protect both you and Navni ElectroTech.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENT ================= */

function TermBlock({ number, icon: Icon, title, children }) {
  return (
    <div className="relative md:pl-20">
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
