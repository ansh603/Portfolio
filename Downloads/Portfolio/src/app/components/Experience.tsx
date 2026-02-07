import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Engineering in Information Technology",
      company: "Institute of Engineering and Technology, DAVV Indore",
      period: "Aug 2023 - May 2027",
      description: "Pursuing undergraduate degree with focus on full-stack development, data structures, and algorithms.",
      achievements: [
        "Among the top 4% of students in JEE Mains 2023",
        "Solved 300+ Data Structures & Algorithms problems on LeetCode",
        "Building modern web applications using React.js and JavaScript"
      ]
    },
    {
      type: "work",
      title: "Significo Website Clone Project",
      company: "Personal Project",
      period: "2024",
      description: "Built a responsive frontend clone of Significo's previous website using HTML5, CSS3, and JavaScript (ES6).",
      achievements: [
        "Integrated smooth transitions and interactive animations using GSAP",
        "Applied modern UI/UX principles for responsive design",
        "Explored visual language used by healthcare software companies"
      ]
    },
    {
      type: "work",
      title: "Responsive Business Landing Page",
      company: "Personal Project",
      period: "2024",
      description: "Engineered a sleek and responsive business landing page using React.js, JavaScript (ES6), HTML5, and CSS3.",
      achievements: [
        "Implemented component-based architecture using React hooks",
        "Created clean, reusable, and maintainable codebase",
        "Focused on performance, responsiveness, and reusability"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-100">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-12"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20 pb-12"
            >
              <div className="absolute left-4 w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                {exp.type === "work" ? (
                  <Briefcase className="w-5 h-5 text-white" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-white" />
                )}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow border border-emerald-500/20">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-2xl text-gray-100">{exp.title}</h3>
                  <span className="text-sm text-emerald-400 bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-500/30">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-gray-300 mb-3">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
