import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo1.jpeg";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 dark:bg-slate-900/80 bg-white/80 backdrop-blur-md border-b dark:border-slate-800/50 border-slate-200/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-violet-500/50" />
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Sujal
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 dark:text-slate-300 text-slate-600">
          <Link
            to="/"
            className={`hover:text-violet-400 transition-colors relative group ${isActive("/") ? "text-violet-400" : ""}`}
          >
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-violet-400 transition-all ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            to="/about"
            className={`hover:text-violet-400 transition-colors relative group ${isActive("/about") ? "text-violet-400" : ""}`}
          >
            About
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-violet-400 transition-all ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            to="/projects"
            className={`hover:text-violet-400 transition-colors relative group ${isActive("/projects") ? "text-violet-400" : ""}`}
          >
            Projects
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-violet-400 transition-all ${isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            to="/contact"
            className={`hover:text-violet-400 transition-colors relative group ${isActive("/contact") ? "text-violet-400" : ""}`}
          >
            Contact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-violet-400 transition-all ${isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
        </div>

        {/* Right Side - Theme Toggle, Hire Me, and Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-600 hover:text-violet-400 transition-all border dark:border-slate-700 border-slate-200 hover:scale-110 hover:rotate-12 active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hire Me Button - Desktop */}
          <Link
            to="/contact"
            className="hidden md:block px-5 py-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-600 hover:text-violet-400 transition-all border dark:border-slate-700 border-slate-200"
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden dark:bg-slate-900/95 bg-white/95 backdrop-blur-md border-t dark:border-slate-800/50 border-slate-200/50">
          <div className="flex flex-col px-4 py-4 space-y-3 dark:text-slate-300 text-slate-600">
            <Link
              to="/"
              onClick={closeMenu}
              className={`py-2 px-4 rounded-lg transition-colors ${isActive("/") ? "text-violet-400 dark:bg-slate-800 bg-slate-100" : "hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`py-2 px-4 rounded-lg transition-colors ${isActive("/about") ? "text-violet-400 dark:bg-slate-800 bg-slate-100" : "hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={closeMenu}
              className={`py-2 px-4 rounded-lg transition-colors ${isActive("/projects") ? "text-violet-400 dark:bg-slate-800 bg-slate-100" : "hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`py-2 px-4 rounded-lg transition-colors ${isActive("/contact") ? "text-violet-400 dark:bg-slate-800 bg-slate-100" : "hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 py-2 px-4 text-center bg-gradient-to-r from-violet-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
