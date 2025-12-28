import logo from "../assets/logo1.jpeg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Profile and Intro */}
          <div className="flex-1 w-full animate-fade-in-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse-glow"></div>
                <img
                  src={logo}
                  alt="Profile"
                  className="relative w-32 h-32 rounded-full object-cover ring-4 ring-violet-500/30"
                />
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-violet-500 rounded-full border-4 border-slate-900 dark:border-slate-900 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-violet-400 font-medium mb-2">👋 Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  <span className="dark:text-white text-slate-900">Sujal </span>
                  <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    Agarwal
                  </span>
                </h1>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500"></div>
                  <p className="text-lg md:text-xl dark:text-slate-300 text-slate-600">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </div>

            <p className="dark:text-slate-400 text-slate-600 text-lg mb-8 leading-relaxed text-center sm:text-left">
              Passionate about building robust full-stack applications with modern
              technologies. Experienced in backend microservices, responsive
              frontends, and DevOps practices. Let's build something amazing together!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl hover:border-violet-500/50 transition-all duration-300 shadow-sm hover:scale-105 animate-fade-in-up opacity-0 animation-delay-100" style={{ animationFillMode: 'forwards' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-1">1+</div>
                <div className="dark:text-slate-400 text-slate-600 text-sm">Years Exp</div>
              </div>
              <div className="text-center p-4 dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl hover:border-violet-500/50 transition-all duration-300 shadow-sm hover:scale-105 animate-fade-in-up opacity-0 animation-delay-200" style={{ animationFillMode: 'forwards' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-1">15+</div>
                <div className="dark:text-slate-400 text-slate-600 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl hover:border-violet-500/50 transition-all duration-300 shadow-sm hover:scale-105 animate-fade-in-up opacity-0 animation-delay-300" style={{ animationFillMode: 'forwards' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-1">12+</div>
                <div className="dark:text-slate-400 text-slate-600 text-sm">Technologies</div>
              </div>
              <div className="text-center p-4 dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl hover:border-violet-500/50 transition-all duration-300 shadow-sm hover:scale-105 animate-fade-in-up opacity-0 animation-delay-400" style={{ animationFillMode: 'forwards' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-1">3+</div>
                <div className="dark:text-slate-400 text-slate-600 text-sm">Open Source</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link
                to="/projects"
                className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transform hover:scale-105"
              >
                View My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="border-2 dark:border-slate-600 border-slate-300 hover:border-violet-500 dark:text-slate-300 text-slate-700 hover:text-violet-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center sm:justify-start">
              <a
                href="https://github.com/sujalmittal123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 dark:bg-slate-800/50 bg-white/50 rounded-xl flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-violet-400 dark:hover:bg-slate-700 hover:bg-slate-100 transition-all border dark:border-slate-700/50 border-slate-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sujal-mittal-73a14727b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 dark:bg-slate-800/50 bg-white/50 rounded-xl flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-violet-400 dark:hover:bg-slate-700 hover:bg-slate-100 transition-all border dark:border-slate-700/50 border-slate-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:sujalmittal720@gmail.com"
                className="w-12 h-12 dark:bg-slate-800/50 bg-white/50 rounded-xl flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-violet-400 dark:hover:bg-slate-700 hover:bg-slate-100 transition-all border dark:border-slate-700/50 border-slate-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Code Card */}
          <div className="flex-1 w-full max-w-xl hidden lg:block animate-fade-in-right">
            <div className="relative animate-float" style={{ animationDuration: '4s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl blur-xl opacity-20 animate-pulse-glow"></div>
              <div className="relative dark:bg-slate-800/80 bg-white/80 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                {/* Code Editor Header */}
                <div className="dark:bg-slate-900/80 bg-slate-100 px-4 py-3 flex items-center justify-between border-b dark:border-slate-700/50 border-slate-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="dark:text-slate-400 text-slate-500 text-sm font-mono">developer.ts</span>
                  <div className="w-16"></div>
                </div>
                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="dark:text-slate-500 text-slate-400 mb-2">// About me</div>
                  <div className="mb-4">
                    <span className="text-purple-400">const</span>
                    <span className="text-cyan-400"> developer</span>
                    <span className="dark:text-slate-400 text-slate-500"> = </span>
                    <span className="text-yellow-400">{"{"}</span>
                  </div>
                  
                  <div className="pl-4 space-y-2">
                    <div>
                      <span className="text-violet-400">name</span>
                      <span className="dark:text-slate-400 text-slate-500">: </span>
                      <span className="text-orange-400">"Sujal Agarwal"</span>
                      <span className="dark:text-slate-400 text-slate-500">,</span>
                    </div>
                    <div>
                      <span className="text-violet-400">role</span>
                      <span className="dark:text-slate-400 text-slate-500">: </span>
                      <span className="text-orange-400">"Full-Stack Developer"</span>
                      <span className="dark:text-slate-400 text-slate-500">,</span>
                    </div>
                    <div>
                      <span className="text-violet-400">skills</span>
                      <span className="dark:text-slate-400 text-slate-500">: [</span>
                    </div>
                    <div className="pl-4 text-orange-400">
                      <div>"Java", "Spring Boot",</div>
                      <div>"TypeScript", "Node.js",</div>
                      <div>"React", "Tailwind",</div>
                      <div>"PostgreSQL", "MongoDB",</div>
                      <div>"Docker", "CI/CD"</div>
                    </div>
                    <div className="dark:text-slate-400 text-slate-500">],</div>
                    <div>
                      <span className="text-violet-400">available</span>
                      <span className="dark:text-slate-400 text-slate-500">: </span>
                      <span className="text-pink-400">true</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-yellow-400">{"}"}</span>
                    <span className="dark:text-slate-400 text-slate-500">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
