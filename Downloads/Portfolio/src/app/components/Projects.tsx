import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Significo Website Clone",
      description: "Built a responsive frontend clone of Significo's website using HTML5, CSS3, and JavaScript (ES6). Integrated smooth transitions and interactive animations using GSAP library.",
      image: "https://images.unsplash.com/photo-1517309561013-16f6e4020305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3RzJTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzcwNDcxMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      github: "https://github.com/ansh603/Projects",
      live: "https://ansh603.github.io/Projects/"
    },
    {
      title: "Business Landing Page",
      description: "Engineered a sleek and responsive business landing page using React.js, JavaScript (ES6), HTML5, and CSS3. Implemented a clean, modern UI with component-based architecture.",
      image: "https://images.unsplash.com/photo-1641718371560-11629d3aa38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhbmRpbmclMjBwYWdlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzA0NzEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React.js", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/ansh603/Responsive-Business-Landing-Page",
      live: "https://ansh603.github.io/Responsive-Business-Landing-Page/"
    },
    {
      title: "More Projects Coming Soon",
      description: "Currently working on exciting new full-stack applications with modern technologies. Focused on building efficient, user-centric applications with clean, reusable code.",
      image: "https://images.unsplash.com/photo-1769704552351-d5059b8bb6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmFja2dyb3VuZCUyMHB1cnBsZSUyMGJsdWV8ZW58MXx8fHwxNzcwMTkzOTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Full Stack", "In Progress"],
      github: "https://github.com/ansh603",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-gray-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-900/50 to-teal-900/50 rounded-full mb-6 border border-emerald-500/30"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300">Portfolio Showcase</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto mb-4 rounded-full shadow-lg shadow-emerald-500/30"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing development skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-emerald-500/20 hover:border-emerald-400/40 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-emerald-900/30 to-teal-900/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-bold hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3 text-gray-100 font-bold group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-emerald-900/50 to-teal-900/50 text-emerald-300 rounded-full border border-emerald-500/30 hover:border-emerald-400/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
