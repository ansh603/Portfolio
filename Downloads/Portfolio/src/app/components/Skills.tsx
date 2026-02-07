import { motion } from "motion/react";
import { Code2, Palette, Zap, Database, Sparkles, Rocket } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Palette,
      color: "from-indigo-600 to-cyan-600",
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
      color: "from-purple-600 to-pink-600",
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
      color: "from-orange-600 to-rose-600",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "APIs", level: 75 },
        { name: "Node.js", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-pink-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 border border-purple-200"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Technical Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full shadow-lg shadow-purple-500/30"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
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

              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-200">
                {/* Icon header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-slate-900 font-bold">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-700 font-semibold">{skill.name}</span>
                        <span className="text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-inner">
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
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-300 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Problem Solving Excellence
              </h3>
            </div>
            <p className="text-slate-700 text-lg text-center mb-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">300+</span> DSA problems solved on LeetCode
            </p>
            <p className="text-slate-600 text-center">
              Continuously learning and expanding skillset with cutting-edge technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
