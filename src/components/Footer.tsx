import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpeg";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy/charge-easy", label: "Charge Easy Privacy" },
];

const footerSignals = [
  { title: "Build Quality", value: "98%", status: "Stable" },
  { title: "Delivery Speed", value: "Fast", status: "Active" },
  { title: "Design System", value: "Unified", status: "Synced" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-14 border-t border-zinc-300/60 dark:border-zinc-800/70 bg-white/60 dark:bg-black/55 backdrop-blur-xl">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] footer-shimmer-line" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-[70%] rounded-full bg-zinc-900/10 dark:bg-white/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-zinc-500/40 dark:ring-zinc-200/40 hover:scale-110 transition-transform"
              />
              <div>
                <p className="text-xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                  Sujal Agarwal
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Future Build Studio</p>
              </div>
            </div>

            <p className="max-w-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              I engineer fast, reliable, and futuristic digital products.
              From architecture to interface, every system is crafted for performance and product impact.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-xs uppercase tracking-[0.16em] text-zinc-600 dark:text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
              Open for collaboration
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {footerSignals.map((signal, index) => (
                <div
                  key={signal.title}
                  className="rounded-xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 p-3 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">{signal.title}</p>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">{signal.value}</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 dark:bg-zinc-200 animate-pulse" />
                    {signal.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up animation-delay-100 opacity-0" style={{ animationFillMode: "forwards" }}>
            <div className="rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/65 dark:bg-zinc-900/65 p-5">
              <h4 className="text-sm uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 mb-4">Quick Links</h4>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/65 dark:bg-zinc-900/65 p-5">
              <h4 className="text-sm uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 mb-4">Connect</h4>
              <div className="flex gap-3 mb-4">
                <a
                  href="https://github.com/sujalmittal123"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:-translate-y-1 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-zinc-200 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sujal-mittal-73a14727b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:-translate-y-1 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-zinc-200 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="mailto:sujalmittal720@gmail.com"
                  aria-label="Email"
                  className="w-10 h-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:-translate-y-1 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-zinc-200 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Let’s build something bold, fast, and meaningful.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-300/70 dark:border-zinc-800/70 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <p>© 2026 Sujal Agarwal. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Crafted with
            <span className="text-zinc-900 dark:text-zinc-100 animate-pulse">❤</span>
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
