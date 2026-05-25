"use client";

import { motion } from "framer-motion";
import { Server, Database, Brain, Sparkles, Code2, ShieldAlert } from "lucide-react";
import { developerData } from "@/constants/data";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  "Backend Development": Server,
  "Database": Database,
  "AI Integration": Brain,
};

const gradientMap: { [key: string]: string } = {
  "Backend Development": "from-cyan-500 to-blue-500",
  "Database": "from-teal-500 to-emerald-500",
  "AI Integration": "from-purple-500 to-cyan-500",
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-theme-bg transition-colors duration-300">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block">
            Năng lực chuyên môn
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight transition-colors">
            Những gì tôi có thể làm cho bạn
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto transition-colors">
            Tôi sử dụng các công nghệ hiện đại để xây dựng những sản phẩm chất lượng cao, vận hành ổn định và mang lại giá trị thực sự cho người dùng.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {developerData.skills.map((group, groupIdx) => {
            const IconComponent = iconMap[group.category] || Code2;

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="glow-card group rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white mb-3 flex items-center gap-2 transition-colors">
                    {group.category}
                  </h3>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 px-3 py-1.5 rounded-lg transition-all duration-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer element inside card to emphasize technical aesthetic */}
                <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-500 transition-colors">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyan-400" /> Professional
                  </span>
                  <span>100% Verified</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
