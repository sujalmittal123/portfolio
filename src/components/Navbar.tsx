import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo1.jpeg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-300/40 dark:border-zinc-800/70 bg-white/60 dark:bg-black/60 backdrop-blur-2xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500/70 to-transparent dark:via-zinc-300/70" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-zinc-900/[0.03] dark:to-white/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-3">
        <Link to="/" className="group flex items-center gap-3 flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-lg bg-zinc-900/20 dark:bg-white/20" />
            <img
              src={logo}
              alt="Logo"
              className="relative w-10 h-10 rounded-full object-cover ring-2 ring-zinc-600/30 dark:ring-zinc-100/40"
            />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-bold tracking-wide bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              SUJAL
            </p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">Portfolio Grid</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-2 p-1.5 rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(link.to)
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/70 dark:hover:bg-zinc-800/70"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative h-10 w-20 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 p-1 transition-all"
          >
            <span
              className={`absolute top-1 h-8 w-8 rounded-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-600 shadow-sm transition-transform duration-300 ${
                theme === "dark" ? "translate-x-10" : "translate-x-0"
              }`}
            />
            <span className="relative z-10 flex h-full items-center justify-between px-1.5 text-xs">
              <span className="text-zinc-900">☀</span>
              <span className="text-zinc-100">☾</span>
            </span>
          </button>

          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300/80 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-200 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            Hire Me
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-zinc-300/60 dark:border-zinc-800/70 bg-white/90 dark:bg-black/90 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 px-2">Navigation Matrix</p>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl transition-all ${
                  isActive(link.to)
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "text-zinc-700 dark:text-zinc-300 bg-zinc-100/70 dark:bg-zinc-900/70 hover:bg-zinc-200/70 dark:hover:bg-zinc-800/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-300/80 dark:border-zinc-700/80 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
