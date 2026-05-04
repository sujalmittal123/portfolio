import { useMemo, useState } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  year: string;
  description: string;
  mission: string;
  stack: string[];
  links: {
    github: string;
    demo?: string;
  };
  architecture: string[];
  checkpoints: string[];
  signals: {
    label: string;
    value: number;
  }[];
}

const projects: Project[] = [
  {
    id: "neurovault",
    title: "NeuroVault",
    subtitle: "AI Model Storage Platform",
    icon: "🧠",
    year: "2025",
    description:
      "A collaborative platform for storing, versioning, and tracking AI model performance across product teams.",
    mission: "Turn model experimentation into a traceable, team-ready lifecycle.",
    stack: ["React", "Node.js", "MongoDB", "Docker", "Tailwind"],
    links: {
      github: "https://github.com/sujalmittal123/neurovault",
      demo: "https://neurovault.demo.com/",
    },
    architecture: ["Model Vault", "Version Graph", "Metrics Engine", "Team Workspace"],
    checkpoints: [
      "Version snapshots with metadata",
      "Performance timeline per model",
      "Collaborative model workspace",
    ],
    signals: [
      { label: "Scalability", value: 86 },
      { label: "UX Clarity", value: 83 },
      { label: "Data Pipeline", value: 91 },
    ],
  },
  {
    id: "chatspace",
    title: "ChatSpace",
    subtitle: "Realtime Messaging Grid",
    icon: "💬",
    year: "2025",
    description:
      "Realtime chat platform with room architecture, direct channels, and secure event flow for dynamic conversations.",
    mission: "Deliver instant communication with stable multi-room architecture.",
    stack: ["React", "TypeScript", "Node.js", "WebSocket", "MongoDB"],
    links: {
      github: "https://github.com/sujalmittal123/chatspace",
      demo: "https://chatspace.demo.com/",
    },
    architecture: ["Socket Gateway", "Room Router", "Message Queue", "Presence Service"],
    checkpoints: [
      "Real-time room broadcasting",
      "Low-latency direct messaging",
      "Scalable event orchestration",
    ],
    signals: [
      { label: "Realtime", value: 94 },
      { label: "System Flow", value: 88 },
      { label: "Reliability", value: 84 },
    ],
  },
  {
    id: "weather",
    title: "Real-Time Weather",
    subtitle: "Forecast Intelligence Interface",
    icon: "🌤️",
    year: "2024",
    description:
      "Live weather experience with location-driven forecasts, visual condition states, and API-powered updates.",
    mission: "Convert weather data into a fast and intuitive product experience.",
    stack: ["HTML", "CSS", "JavaScript", "Weather APIs"],
    links: {
      github: "https://github.com/sujalmittal123/weather-app",
      demo: "https://weather.demo.com/",
    },
    architecture: ["Geo Layer", "Forecast Fetch", "Condition Mapper", "Visual UI"],
    checkpoints: [
      "Live location weather fetch",
      "Visual condition rendering",
      "Mobile-first responsive screens",
    ],
    signals: [
      { label: "Responsiveness", value: 87 },
      { label: "Data Sync", value: 79 },
      { label: "UI Precision", value: 85 },
    ],
  },
  {
    id: "pagereplacement",
    title: "Page Replacement",
    subtitle: "Algorithm Visualizer",
    icon: "🔄",
    year: "2024",
    description:
      "An educational visualizer for FIFO, LRU, and Optimal memory algorithms with step-by-step frame simulation.",
    mission: "Make operating system memory concepts visually clear and interactive.",
    stack: ["Python", "JavaScript", "HTML", "CSS", "Algorithms"],
    links: {
      github: "https://github.com/sujalmittal123/pagereplacement",
      demo: "https://pagereplacement.demo.com",
    },
    architecture: ["Algo Core", "Frame State", "Simulation Engine", "Learning UI"],
    checkpoints: [
      "Stepwise algorithm playback",
      "Multiple strategy comparisons",
      "Student-focused explanatory flow",
    ],
    signals: [
      { label: "Clarity", value: 89 },
      { label: "Interactivity", value: 82 },
      { label: "Academic Value", value: 93 },
    ],
  },
];

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? projects[0],
    [selectedId]
  );

  return (
    <section className="pt-24 pb-14">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-10">
        <header className="text-center animate-fade-in-down">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300/80 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300 mb-5">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
            Project Holo-Lab
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 max-w-4xl mx-auto">
            <span className="text-zinc-900 dark:text-white">Future Showcase</span>{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Command Center
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Click any project node. The center hologram reconfigures architecture, mission, and signal profile in real time.
          </p>
        </header>

        <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-6 items-start">
          <aside className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-4 sm:p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 px-2 mb-4">Project Nodes</p>

            <div className="space-y-3">
              {projects.map((project) => {
                const isActive = activeProject.id === project.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedId(project.id)}
                    className={`w-full text-left rounded-2xl border p-3.5 sm:p-4 transition-all duration-300 ${
                      isActive
                        ? "border-zinc-900 dark:border-zinc-100 bg-zinc-100/90 dark:bg-zinc-800/70"
                        : "border-zinc-300/70 dark:border-zinc-700/70 bg-white/60 dark:bg-zinc-900/55 hover:border-zinc-500 dark:hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl border border-zinc-300/70 dark:border-zinc-700/70 bg-zinc-100 dark:bg-zinc-800/60 flex items-center justify-center text-xl">
                        {project.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">{project.title}</p>
                        <p className="text-xs uppercase tracking-[0.1em] sm:tracking-[0.14em] text-zinc-500 dark:text-zinc-400 truncate">{project.subtitle}</p>
                      </div>
                    </div>

                    <div className="mt-3 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-zinc-800 dark:bg-zinc-200 transition-all duration-500"
                        style={{ width: `${project.signals[0]?.value ?? 50}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <article className="relative overflow-hidden rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/75 dark:bg-zinc-900/75 backdrop-blur-xl p-6 sm:p-7">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-zinc-900/10 dark:bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-zinc-500/10 dark:bg-zinc-300/10 blur-3xl" />
            </div>

            <div className="relative z-10 space-y-7">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">Active Build {activeProject.year}</p>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{activeProject.title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">{activeProject.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-center">
                <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-full border border-zinc-300/60 dark:border-zinc-700/70 bg-zinc-100/60 dark:bg-zinc-800/40 flex items-center justify-center">
                  <div
                    className="absolute inset-3 rounded-full border border-dashed border-zinc-400/60 dark:border-zinc-500/60 animate-spin"
                    style={{ animationDuration: "16s" }}
                  />
                  <div
                    className="absolute inset-10 rounded-full border border-zinc-300/70 dark:border-zinc-700/70 animate-spin"
                    style={{ animationDuration: "11s", animationDirection: "reverse" }}
                  />

                  <div className="absolute top-6 left-1/2 -translate-x-1/2 px-1.5 sm:px-2 py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.14em] whitespace-nowrap border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300">
                    {activeProject.architecture[0]}
                  </div>
                  <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 px-1.5 sm:px-2 py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.14em] whitespace-nowrap border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300">
                    {activeProject.architecture[1]}
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-1.5 sm:px-2 py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.14em] whitespace-nowrap border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300">
                    {activeProject.architecture[2]}
                  </div>
                  <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 px-1.5 sm:px-2 py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.14em] whitespace-nowrap border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300">
                    {activeProject.architecture[3]}
                  </div>

                  <div className="relative z-10 w-24 h-24 rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white dark:bg-zinc-900 flex items-center justify-center text-5xl shadow-lg shadow-zinc-900/10 dark:shadow-white/10">
                    {activeProject.icon}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{activeProject.description}</p>

                  <div className="rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-zinc-100/70 dark:bg-zinc-800/40 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 mb-2">Mission</p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">{activeProject.mission}</p>
                  </div>

                  <ul className="space-y-2">
                    {activeProject.checkpoints.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-700 dark:bg-zinc-200" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid lg:grid-cols-[1fr_auto] gap-5 items-start">
                <div className="grid sm:grid-cols-3 gap-3">
                  {activeProject.signals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-zinc-100/70 dark:bg-zinc-800/45 p-3"
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 mb-2">{signal.label}</p>
                      <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 mb-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-zinc-800 dark:bg-zinc-200"
                          style={{ width: `${signal.value}%` }}
                        />
                      </div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{signal.value}%</p>
                    </div>
                  ))}
                </div>

                <div className="w-full lg:w-auto flex flex-wrap gap-3 lg:justify-end">
                  <a
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                  >
                    View Code
                  </a>
                  {activeProject.links.demo && (
                    <a
                      href={activeProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-zinc-900 dark:hover:border-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
