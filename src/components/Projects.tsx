"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckSquare } from "lucide-react";
import { developerData } from "@/constants/data";

const projectIcons = [
  CheckSquare, // TodoX
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-100/40 dark:bg-zinc-950/40 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      {/* Visual background lights */}
      <div 
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block">
              Dự án tiêu biểu
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight transition-colors">
              Sản phẩm nổi bật
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl leading-relaxed transition-colors">
              Giải pháp thực tế giúp nâng cao năng suất làm việc, bảo mật dữ liệu cá nhân và mang đến trải nghiệm người dùng mượt mà.
            </p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-1 max-w-2xl mx-auto gap-6 lg:gap-8"
        >
          {developerData.projects.map((project, idx) => {
            const IconComponent = projectIcons[idx] || CheckSquare;

            return (
              <motion.article
                key={project.title}
                variants={projectVariants}
                className="glow-card group rounded-2xl p-6 flex flex-col justify-between h-full bg-white/70 dark:bg-zinc-900/20"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          aria-label="View Github repository"
                        >
                          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576 4.765-1.583 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          className="text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                          aria-label="View live project demo"
                        >
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed mb-6 font-light transition-colors">
                    {project.description}
                  </p>

                  {/* Detailed Description */}
                  {project.detailedDescription && (
                    <div className="p-3 rounded-lg bg-slate-100/80 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-900/60 mb-6 transition-colors">
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono leading-relaxed transition-colors">
                        {project.detailedDescription}
                      </p>
                    </div>
                  )}
                </div>

                {/* Tech Tags & Visual separator */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-zinc-900/60">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] bg-cyan-50/60 dark:bg-cyan-950/10 border border-cyan-200/60 dark:border-cyan-950/30 text-cyan-700 dark:text-cyan-400/80 px-2 py-1 rounded font-mono transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
