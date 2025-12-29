interface Project {
  title: string;
  description: string;
  icon: string;
  tech: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "NeuroVault",
    description: "A neural network storage and management platform for AI models. Features include model versioning, performance tracking, and team collaboration.",
    icon: "🧠",
    tech: ["Node.js", "React", "MongoDB", "Docker", "Tailwind"],
    github: "https://github.com/sujalmittal123/neurovault",
    demo: "https://neurovault.demo.com/",
  },
  {
    title: "Real-Time Weather",
    description: "Live weather application with beautiful visualizations, location-based forecasts, and weather alerts using modern APIs.",
    icon: "🌤️",
    tech: ["HTML", "CSS", "JavaScript", "APIs"],
    github: "https://github.com/sujalmittal123/weather-app",
    demo: "https://weather.demo.com/",
  },
  {
    title: "ChatSpace",
    description: "Real-time chat platform with rooms, direct messaging, file sharing, and end-to-end encryption for secure communication.",
    icon: "💬",
    tech: ["Node.js", "WebSocket", "MongoDB", "React", "TypeScript"],
    github: "https://github.com/sujalmittal123/chatspace",
    demo: "https://chatspace.demo.com/",
  },
  {
    title: "Page Replacement",
    description: "Interactive visualization tool for page replacement algorithms including FIFO, LRU, and Optimal. Helps understand memory management concepts with step-by-step animations.",
    icon: "🔄",
    tech: ["Python","HTML", "CSS", "JavaScript", "Algorithms"],
    github: "https://github.com/sujalmittal123/pagereplacement",
    demo: "https://pagereplacement.demo.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="dark:text-white text-slate-900">My </span>
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-[1.02] animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{project.icon}</span>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 dark:bg-slate-700/50 bg-slate-100 rounded-lg dark:text-slate-400 text-slate-600 hover:text-violet-400 transition-colors"
                      title="View Code"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 dark:bg-slate-700/50 bg-slate-100 rounded-lg dark:text-slate-400 text-slate-600 hover:text-violet-400 transition-colors"
                        title="Live Demo"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="dark:text-slate-400 text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 dark:bg-slate-700/50 bg-slate-100 dark:text-slate-300 text-slate-600 text-sm rounded-full border dark:border-slate-600/50 border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <a
            href="https://github.com/sujalmittal123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-violet-500/25"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
