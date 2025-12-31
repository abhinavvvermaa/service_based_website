import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blog";
import ReactMarkdown from "react-markdown";
import { useMemo } from "react";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Blog not found
      </div>
    );
  }

  /* ================= TABLE OF CONTENTS ================= */
  const headings = useMemo(() => {
    return blog.content
      .split("\n")
      .filter((line) => line.startsWith("## "))
      .map((line) => {
        const text = line.replace("## ", "").trim();
        return {
          id: text.toLowerCase().replace(/\s+/g, "-"),
          text,
        };
      });
  }, [blog.content]);

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={blog.cover}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-16 text-white animate-fade-up">
            <span className="inline-block mb-4 px-4 py-1 rounded-full
                             bg-blue-600/90 text-sm font-semibold">
              {blog.tag}
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
              {blog.title}
            </h1>

            <p className="mt-4 text-lg text-gray-200 max-w-3xl">
              {blog.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT + TOC ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_300px] gap-16">

          {/* ================= ARTICLE ================= */}
          <article className="space-y-16 animate-fade-up">
  <ReactMarkdown
    components={{
      h2: ({ children }) => {
        const id = String(children).toLowerCase().replace(/\s+/g, "-");
        return (
          <h2
            id={id}
            className="text-3xl font-extrabold text-blue-700
                       scroll-mt-28 mb-4"
          >
            {children}
          </h2>
        );
      },

      p: ({ children }) => (
        <p className="text-gray-700 leading-relaxed text-lg">
          {children}
        </p>
      ),

      ul: ({ children }) => (
        <ul className="grid sm:grid-cols-2 gap-4
                       bg-gray-50 p-6 rounded-2xl
                       shadow-sm">
          {children}
        </ul>
      ),

      li: ({ children }) => (
        <li className="flex items-start gap-3 text-gray-800">
          <span className="mt-1 h-2 w-2 rounded-full
                           bg-gradient-to-r from-blue-600 to-purple-600" />
          <span>{children}</span>
        </li>
      ),
    }}
  >
    {blog.content}
  </ReactMarkdown>
</article>


          {/* ================= TOC ================= */}
          <aside className="hidden lg:block sticky top-28 h-fit animate-fade-up delay-200">
            <div
              className="
                relative rounded-3xl p-6
                bg-white/90 backdrop-blur-xl
                shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
                border border-gray-200
              "
            >
              <div className="absolute top-0 left-0 w-full h-1
                              rounded-t-3xl
                              bg-gradient-to-r from-blue-600 to-purple-600" />

              <h3 className="text-xs font-bold tracking-widest text-gray-900
                             mb-6 uppercase">
                On this page
              </h3>

              <ul className="space-y-4">
                {headings.map((h, i) => (
                  <li key={i} className="group">
                    <a
                      href={`#${h.id}`}
                      className="
                        flex gap-3 items-start
                        text-sm text-gray-600
                        transition-all duration-300
                        group-hover:text-blue-600
                      "
                    >
                      <span
                        className="
                          mt-1 h-2 w-2 rounded-full
                          bg-gray-300
                          group-hover:bg-gradient-to-r
                          group-hover:from-blue-600
                          group-hover:to-purple-600
                        "
                      />
                      <span>{h.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>

        {/* ================= CTA ================= */}
        <div className="max-w-4xl mx-auto mt-28">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600
                          text-white p-14 rounded-3xl text-center
                          shadow-xl animate-fade-up delay-500">
            <h3 className="text-3xl font-extrabold mb-4">
              Build Production-Ready Electronics
            </h3>

            <p className="mb-8 text-gray-100 max-w-2xl mx-auto">
              From PCB design to firmware and cloud integration,
              Navni ElectroTech helps companies scale with confidence.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600
                         px-10 py-4 rounded-lg font-bold
                         hover:scale-105 transition"
            >
              Talk to Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
