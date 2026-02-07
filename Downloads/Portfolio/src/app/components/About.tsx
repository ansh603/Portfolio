import { motion } from "motion/react";
import { Code2, Palette, Zap, Download, Award, Target, Briefcase } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: Code2,
      value: "300+",
      label: "LeetCode Problems",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      value: "Top 4%",
      label: "JEE Mains 2023",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      value: "100%",
      label: "Commitment",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating intuitive user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed & efficiency"
    },
    {
      icon: Briefcase,
      title: "Full Stack",
      description: "End-to-end development expertise"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-purple-50/50 via-white to-indigo-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/30"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:border-purple-200 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center overflow-hidden border-2 border-purple-200 shadow-2xl shadow-purple-200/50">
                <div className="text-9xl">💻</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl -z-10 blur-2xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl -z-10 blur-2xl opacity-30"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">
                Passionate Full Stack Developer
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Undergraduate student pursuing a <span className="font-semibold text-purple-600">Bachelor of Engineering in Information Technology</span> with a passion for creating impactful digital solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I specialize in building <span className="font-semibold text-purple-600">responsive, accessible, and performant</span> web applications using modern technologies. My strong foundation in data structures and algorithms, combined with practical development experience, enables me to tackle complex challenges efficiently.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dedicated to continuous learning and delivering <span className="font-semibold text-purple-600">user-centric solutions</span> that make a difference.
              </p>
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -10px rgba(139, 92, 246, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-purple-100 hover:border-purple-200 shadow-md hover:shadow-lg"
                >
                  <item.icon className="w-7 h-7 mb-3 text-purple-600" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
