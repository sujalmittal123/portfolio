import logo from "../assets/logo1.jpeg";

const technologies = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

const skills = [
  {
    category: "Backend Development",
    description: "Building scalable APIs and microservices",
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Frontend Development",
    description: "Creating responsive and interactive UIs",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "shadcn/ui"],
  },
  {
    category: "Database & Storage",
    description: "Data modeling and optimization",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
  },
  {
    category: "DevOps & Tools",
    description: "CI/CD and deployment automation",
    items: ["Docker", "Git", "GitHub Actions", "Linux", "Nginx"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Profile Section */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="relative inline-block mb-6 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full blur-xl opacity-40 animate-pulse-glow"></div>
            <img
              src={logo}
              alt="Sujal Agarwal"
              className="relative w-40 h-40 rounded-full object-cover ring-4 ring-violet-500/30 mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="dark:text-white text-slate-900">About </span>
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-pink-400 mx-auto rounded-full mb-6"></div>
        </div>

        {/* About Me Text */}
        <div className="max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Hi there! 👋</h2>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
              I'm <span className="text-violet-400 font-semibold">Sujal Agarwal</span>, a passionate Full-Stack Developer 
              with expertise in building modern web applications. I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
              With experience across the entire development stack, I bring ideas to life from database design 
              to pixel-perfect user interfaces. I'm constantly learning and staying updated with the latest 
              technologies to deliver the best solutions.
            </p>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
              and building products that make a difference.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 mb-4">
              My <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 shadow-sm hover:scale-[1.02] hover:shadow-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-xl font-bold text-violet-400 mb-2">{skill.category}</h3>
                <p className="dark:text-slate-400 text-slate-500 text-sm mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 dark:bg-slate-700/50 bg-slate-100 dark:text-slate-300 text-slate-600 text-sm rounded-full border dark:border-slate-600/50 border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 mb-4">
              Technologies I <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Work With</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-4 dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl hover:border-violet-500/50 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg animate-scale-in opacity-0"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="dark:text-slate-300 text-slate-600 text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
