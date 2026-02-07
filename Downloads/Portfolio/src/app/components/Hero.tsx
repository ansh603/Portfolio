import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Subtle animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [-50, 50, -50],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Professional Avatar */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/50"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse"></div>
            <span className="relative text-5xl font-bold text-white">G</span>
          </motion.div>

          {/* Elegant Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ghanshyam Batane
            </span>
          </motion.h1>

          {/* Gradient Accent Line */}
          <motion.div
            className="h-1 w-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />

          {/* Role with Typing Effect */}
          <motion.p
            className="text-xl md:text-2xl text-slate-800 mb-6 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Full Stack Developer & Problem Solver
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Crafting elegant solutions through clean code. Specialized in modern web technologies
            with 300+ DSA problems solved on LeetCode.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -10px rgba(139, 92, 246, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full overflow-hidden transition-all duration-300 font-semibold shadow-xl shadow-purple-500/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.8)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 border-2 border-purple-400 text-slate-800 rounded-full backdrop-blur-sm hover:bg-purple-100 transition-all duration-300 font-semibold"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/ansh603"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-10 h-10 rounded-full bg-white border border-purple-200 flex items-center justify-center hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 shadow-md"
            >
              <Github className="w-5 h-5 text-slate-700" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ghanshyam-batane-9a586a297"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </motion.a>
            <motion.a
              href="mailto:ghanshyambatane19@gmail.com"
              whileHover={{ y: -2 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Scroll</span>
            <ArrowDown className="text-slate-500 w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
