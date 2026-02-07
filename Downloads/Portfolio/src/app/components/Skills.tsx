import { motion } from "motion/react";
import { Code2, Palette, Zap, Database, Sparkles, Rocket } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Palette,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML & CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "GSAP", level: 80 }
      ]
    },
    {
      category: "Programming",
      icon: Code2,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 80 },
        { name: "DSA", level: 85 }
      ]
    },
    {
      category: "Tools",
      icon: Database,
      color: "from-cyan-500 to-sky-500",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "APIs", level: 75 },
        { name: "Node.js", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-gray-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

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
            <span className="text-sm font-semibold text-emerald-300">Technical Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto mb-4 rounded-full shadow-lg shadow-emerald-500/30"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-500/20 hover:border-emerald-400/40">
                {/* Icon header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-100 font-bold">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300 font-semibold">{skill.name}</span>
                        <span className="text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: categoryIndex * 0.15 + skillIndex * 0.1, ease: "easeOut" }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-gradient-to-r from-slate-800/80 via-slate-800/80 to-slate-800/80 rounded-3xl p-10 border-2 border-emerald-500/30 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Problem Solving Excellence
              </h3>
            </div>
            <p className="text-gray-300 text-lg text-center mb-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">300+</span> DSA problems solved on LeetCode
            </p>
            <p className="text-gray-400 text-center">
              Continuously learning and expanding skillset with cutting-edge technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
