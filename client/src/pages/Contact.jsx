import { Phone, Mail, MapPin, Clock, ShieldCheck, Users } from "lucide-react";

export default function Contact() {
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

      {/* ================= CONTACT + MAP ================= */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: CONTACT FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Share Your Requirement
            </h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-6"
            >
              {/* REQUIRED hidden field */}
              <input type="hidden" name="form-name" value="contact" />

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
                className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Drop your message"
                className="w-full border px-5 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Submit Request
              </button>

              <p className="text-xs text-gray-500 text-center">
                All information will be kept confidential.
              </p>
            </form>
          </div>

          {/* RIGHT: MAP + CONTACT DETAILS */}
          <div className="space-y-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border h-[350px]">
              <iframe
                title="PsiBorg Location"
                src="https://www.google.com/maps?q=Sector%20136%20Noida%20Uttar%20Pradesh&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details */}
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
                  <p>NavniElectroTech</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do you sign an NDA before discussion?",
                a: "Yes, all discussions are NDA protected to ensure confidentiality.",
              },
              {
                q: "Do you offer end-to-end hardware development?",
                a: "Yes, from idea validation to manufacturing support.",
              },
              {
                q: "How long does it take to receive a quotation?",
                a: "Typically within 2–4 business days.",
              },
              {
                q: "Do you work with startups?",
                a: "Yes, we collaborate with startups, SMEs, and enterprises.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <summary className="font-semibold cursor-pointer">
                  {item.q}
                </summary>
                <p className="mt-4 text-gray-700">{item.a}</p>
              </details>
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
