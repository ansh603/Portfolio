import { motion } from "motion/react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export function Contact() {
  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/ansh603",
      username: "@ansh603"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/ghanshyam-batane-9a586a297",
      username: "Ghanshyam Batane"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:ghanshyambatane19@gmail.com",
      username: "ghanshyambatane19@gmail.com"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      href: "tel:+916268249253",
      username: "+91 6268249253"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white font-light tracking-tight">
            Let's Connect
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
              rel={link.label === "Email" || link.label === "Phone" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium mb-1">{link.label}</h3>
                <p className="text-gray-400 text-sm">{link.username}</p>
              </div>
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="mailto:ghanshyambatane19@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Send Me an Email
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2026 Ghanshyam Batane. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
