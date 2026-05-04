import logo from "../assets/logo1.jpeg";

const technologies = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const milestones = [
  {
    year: "2023",
    title: "Backend Foundation",
    description: "Built core backend skills with Java, Spring Boot, SQL and API architecture.",
  },
  {
    year: "2024",
    title: "Full-Stack Shift",
    description: "Started shipping complete web products with React, TypeScript, and deployment workflows.",
  },
  {
    year: "2025",
    title: "Product Engineering",
    description: "Focused on scalable, user-first systems with polished interfaces and robust services.",
  },
];

const expertise = [
  { name: "Frontend Engineering", value: 88 },
  { name: "Backend Systems", value: 90 },
  { name: "Database Design", value: 82 },
  { name: "DevOps & Delivery", value: 76 },
];

const capabilities = [
  "System Design",
  "REST API Design",
  "Microservices",
  "UI Architecture",
  "Performance Optimization",
  "CI/CD Pipelines",
  "Cloud Deployments",
  "Product Thinking",
];

export default function AboutPage() {
  return (
    <section className="pt-24 pb-14">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-14">
        <header className="text-center animate-fade-in-down">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300/80 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300 mb-5">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
            About Matrix
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-zinc-900 dark:text-white">Engineering</span>{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              with Product Vision
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            I design and develop full-stack systems that are fast, scalable, and built for real users.
            My focus is simple: clean architecture, clean code, and high-impact product outcomes.
          </p>
        </header>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
          <article className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl bg-zinc-900/20 dark:bg-white/20" />
                <img
                  src={logo}
                  alt="Sujal Agarwal"
                  className="relative w-16 h-16 rounded-full object-cover ring-2 ring-zinc-500/40 dark:ring-zinc-200/40"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Sujal Agarwal</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Full-Stack Developer</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I enjoy converting complex product requirements into elegant technical systems.
                From backend service design to responsive frontend experience, I build across the full stack.
              </p>
              <p>
                I care about maintainability, performance, and real-world delivery.
                Every project I build targets both engineering quality and business value.
              </p>
            </div>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-300/70 dark:border-zinc-700/70 bg-zinc-100/70 dark:bg-zinc-800/50 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-7">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Expertise Radar</h2>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Level</span>
            </div>

            <div className="grid sm:grid-cols-[140px_1fr] gap-6 items-center">
              <div className="mx-auto w-32 h-32 rounded-full" style={{ background: "conic-gradient(#18181b 0% 38%, #52525b 38% 66%, #a1a1aa 66% 100%)" }}>
                <div className="m-5 h-[88px] rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xs uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300">
                  Skills
                </div>
              </div>

              <div className="space-y-3">
                {expertise.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                      <span>{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-zinc-800 dark:bg-zinc-200 rounded-full" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-7">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Growth Timeline</h2>
            <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Journey</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {milestones.map((step, index) => (
              <article
                key={step.year}
                className="rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-zinc-100/70 dark:bg-zinc-800/45 p-5 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 120}ms`, animationFillMode: "forwards" }}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 mb-2">{step.year}</p>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Tech Stack Grid</h2>
            <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Toolkit</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <article
                key={tech.name}
                className="rounded-2xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/65 dark:bg-zinc-900/65 backdrop-blur-md p-4 flex items-center gap-3 animate-scale-in opacity-0"
                style={{ animationDelay: `${index * 60}ms`, animationFillMode: "forwards" }}
              >
                <img src={tech.icon} alt={tech.name} className="w-9 h-9" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{tech.name}</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
