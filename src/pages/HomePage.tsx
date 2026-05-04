import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpeg";

const metrics = [
  { value: "15+", label: "Shipped Projects" },
  { value: "12+", label: "Core Technologies" },
  { value: "24/7", label: "Learning Mode" },
];

const stack = ["React", "TypeScript", "Spring Boot", "Node.js", "PostgreSQL", "Docker"];

const velocityData = [58, 62, 68, 66, 74, 83, 88];
const deploymentData = [36, 48, 52, 61, 68, 79, 92];

const modules = [
  {
    title: "Frontend Systems",
    desc: "High-performance interfaces, design systems, and smooth interactive states.",
    tag: "UI/UX Engine",
  },
  {
    title: "Backend Architecture",
    desc: "Reliable API services, secure auth flows, scalable data-driven platforms.",
    tag: "Service Core",
  },
  {
    title: "DevOps Delivery",
    desc: "Containerized deployments, CI/CD pipelines, and production-level observability.",
    tag: "Release Grid",
  },
];

export default function HomePage() {
  const linePath = velocityData
    .map((value, index) => {
      const x = (index / (velocityData.length - 1)) * 100;
      const y = 100 - value;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <section className="pt-24 pb-14">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-14">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center min-h-[78vh]">
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300/80 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
              <span className="text-xs sm:text-sm tracking-[0.18em] uppercase text-zinc-700 dark:text-zinc-300">
                Neo-Tech Portfolio
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-zinc-900/20 dark:bg-white/20 blur-lg" />
                <img
                  src={logo}
                  alt="Sujal Agarwal"
                  className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-zinc-500/40 dark:ring-zinc-200/40"
                />
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Hello, I am</p>
                <p className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Sujal Agarwal</p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-black mb-6">
              Designing
              <span className="block bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
                Smart, Futuristic Products
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              Full-stack developer crafting clean experiences and high-performance systems.
              I turn product ideas into launch-ready platforms with modern frontend, backend, and deployment flows.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-sm border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/projects"
                className="px-8 py-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-center hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-zinc-900/20 dark:shadow-white/10"
              >
                Explore Projects
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-center hover:border-zinc-900 dark:hover:border-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-all duration-300"
              >
                Let’s Build Together
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-zinc-300/80 dark:border-zinc-700/70 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm p-4 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 120}ms`, animationFillMode: "forwards" }}
                >
                  <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                    {metric.value}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-zinc-900/15 to-zinc-300/20 dark:from-white/15 dark:to-zinc-500/20 blur-2xl rounded-3xl" />

              <div className="relative rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="px-5 py-4 border-b border-zinc-300/70 dark:border-zinc-700/70 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 dark:bg-zinc-300" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">command.deck</span>
                </div>

                <div className="p-6 space-y-6">
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-zinc-500 dark:text-zinc-400">// runtime profile</p>
                    <p><span className="text-zinc-700 dark:text-zinc-300">name:</span> <span className="text-zinc-900 dark:text-zinc-100">"Sujal Agarwal"</span></p>
                    <p><span className="text-zinc-700 dark:text-zinc-300">role:</span> <span className="text-zinc-900 dark:text-zinc-100">"Full Stack Developer"</span></p>
                    <p><span className="text-zinc-700 dark:text-zinc-300">focus:</span> <span className="text-zinc-900 dark:text-zinc-100">"Scalable Apps + Product UX"</span></p>
                    <p><span className="text-zinc-700 dark:text-zinc-300">status:</span> <span className="text-zinc-900 dark:text-zinc-100">"Open to collaborations"</span></p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-zinc-300/80 dark:border-zinc-700/70 bg-zinc-100/70 dark:bg-zinc-800/50 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 mb-2">Frontend</p>
                      <p className="text-sm text-zinc-800 dark:text-zinc-200">React, Tailwind, TypeScript, Motion UI</p>
                    </div>
                    <div className="rounded-2xl border border-zinc-300/80 dark:border-zinc-700/70 bg-zinc-100/70 dark:bg-zinc-800/50 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 mb-2">Backend</p>
                      <p className="text-sm text-zinc-800 dark:text-zinc-200">Spring Boot, Node.js, SQL/NoSQL, Docker</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-300/80 dark:border-zinc-700/70 bg-white/60 dark:bg-zinc-800/40 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 mb-2">Current Mission</p>
                    <p className="text-zinc-800 dark:text-zinc-200">
                      Building modern high-performance products with futuristic visuals and production-grade architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/sujalmittal123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="h-12 w-12 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-zinc-200 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577V20.58c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.106-.775.418-1.305.761-1.605-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.123-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.8a11.5 11.5 0 013.004.404c2.291-1.552 3.299-1.23 3.299-1.23.653 1.653.241 2.873.118 3.176.768.84 1.234 1.91 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.819 1.102.819 2.222v3.293c0 .319.192.69.8.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sujal-mittal-73a14727b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="h-12 w-12 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-zinc-200 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554V14.87c0-1.331-.027-3.044-1.854-3.044-1.856 0-2.14 1.45-2.14 2.948v5.678H9.346V9h3.414v1.561h.049c.477-.9 1.637-1.849 3.37-1.849 3.601 0 4.267 2.37 4.267 5.455v6.285zM5.337 7.433a2.063 2.063 0 11.001-4.126 2.063 2.063 0 01-.001 4.126zM7.119 20.452H3.556V9H7.12v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:sujalmittal720@gmail.com"
                aria-label="Send Email"
                className="h-12 w-12 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-zinc-200 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-6 animate-fade-in-up">
          <article className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Build Velocity</h3>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Trend</span>
            </div>
            <div
              className="relative h-44 rounded-2xl border border-zinc-200 dark:border-zinc-700/60 overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(120,120,120,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,120,120,0.15) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full p-4" preserveAspectRatio="none">
                <path d={linePath} fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-700 dark:text-zinc-200" />
                {velocityData.map((value, index) => {
                  const x = (index / (velocityData.length - 1)) * 100;
                  const y = 100 - value;
                  return (
                    <circle key={index} cx={x} cy={y} r="1.8" className="fill-zinc-800 dark:fill-zinc-100" />
                  );
                })}
              </svg>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">Weekly progress and shipping momentum across product milestones.</p>
          </article>

          <article className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Focus Map</h3>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Distribution</span>
            </div>
            <div className="flex items-center justify-center h-44">
              <div className="relative w-36 h-36 rounded-full" style={{ background: "conic-gradient(#18181b 0% 44%, #52525b 44% 76%, #a1a1aa 76% 100%)" }}>
                <div className="absolute inset-5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">Tech Mix</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-zinc-600 dark:text-zinc-400 mt-3">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />Frontend</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-600" />Backend</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-400" />DevOps</span>
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Deployment Pulse</h3>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Ops</span>
            </div>
            <div className="h-44 rounded-2xl border border-zinc-200 dark:border-zinc-700/60 p-4 flex items-end gap-2">
              {deploymentData.map((bar, index) => (
                <div key={index} className="flex-1 rounded-t-md bg-zinc-700 dark:bg-zinc-200/90" style={{ height: `${bar}%` }} />
              ))}
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">Automated release reliability and infrastructure stability index.</p>
          </article>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {modules.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/65 dark:bg-zinc-900/65 backdrop-blur-md p-5 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 120}ms`, animationFillMode: "forwards" }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-3">{item.tag}</p>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
