"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, BrainCircuit } from "lucide-react";
import { developerData } from "@/constants/data";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function About() {


  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-100/40 dark:bg-zinc-950/40 border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      {/* Background visual detail */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Main Intro */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-2">
                Giới thiệu
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight leading-tight transition-colors">
                Về tôi
              </h2>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed font-normal transition-colors">
              {developerData.about.bio}
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-white/60 dark:bg-zinc-950/60 transition-colors">
                <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-100">Cơ sở đào tạo</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">{developerData.about.university}</p>
                  <p className="text-zinc-500 text-[10px] font-mono mt-0.5">Ngành Công nghệ thông tin</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-white/60 dark:bg-zinc-950/60 transition-colors">
                <BrainCircuit className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-100">Lĩnh vực nghiên cứu cốt lõi</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">Hệ thống phân tán & Ứng dụng mô hình ngôn ngữ lớn (LLMs)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas Timeline/Cards */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
              Lĩnh vực tập trung chuyên sâu
            </h3>

            <div className="space-y-4">
              {developerData.about.details.map((detail, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-white/40 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 group flex gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold shrink-0 transition-colors">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed transition-colors">
                      {detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Minimal banner reinforcing strict system architect path */}
            <div className="p-5 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800/80 bg-zinc-200/20 dark:bg-zinc-950/40 text-center transition-colors">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                Chất lượng sản phẩm là ưu tiên hàng đầu
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
