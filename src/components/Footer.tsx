import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpeg";

export default function Footer() {
  return (
    <footer className="border-t dark:border-slate-800/50 border-slate-200 dark:bg-slate-900/50 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover ring-2 ring-violet-500/50" />
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Sujal Agarwal
              </span>
            </div>
            <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
              Full-Stack Developer passionate about creating amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="dark:text-white text-slate-900 font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="dark:text-slate-400 text-slate-600 hover:text-violet-400 transition-colors">Home</Link>
              <Link to="/about" className="dark:text-slate-400 text-slate-600 hover:text-violet-400 transition-colors">About</Link>
              <Link to="/projects" className="dark:text-slate-400 text-slate-600 hover:text-violet-400 transition-colors">Projects</Link>
              <Link to="/contact" className="dark:text-slate-400 text-slate-600 hover:text-violet-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="dark:text-white text-slate-900 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/sujalmittal123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 dark:bg-slate-800 bg-slate-100 rounded-lg flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-violet-400 dark:hover:bg-slate-700 hover:bg-slate-200 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sujal-mittal-73a14727b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 dark:bg-slate-800 bg-slate-100 rounded-lg flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-violet-400 dark:hover:bg-slate-700 hover:bg-slate-200 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:sujalmittal720@gmail.com"
                className="w-10 h-10 dark:bg-slate-800 bg-slate-100 rounded-lg flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-violet-400 dark:hover:bg-slate-700 hover:bg-slate-200 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t dark:border-slate-800/50 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 dark:text-slate-500 text-slate-500 text-sm">
          <p>© 2025 Sujal Agarwal. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <span className="text-red-500 inline-block animate-pulse hover:scale-125 transition-transform duration-300">❤</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
