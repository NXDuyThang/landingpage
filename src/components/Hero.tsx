"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles, Rocket, Shield, Palette } from "lucide-react";
import { developerData } from "@/constants/data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const, // Custom smooth easeOut cubic-bezier
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-theme-bg transition-colors duration-300"
    >
      {/* Visual background glows & ambient effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Tech grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status indicator */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              Sẵn sàng cho các cơ hội hợp tác
            </motion.div>

            {/* Greeting */}
            <motion.h2
              variants={itemVariants}
              className="text-zinc-500 dark:text-zinc-400 font-mono text-sm tracking-wider uppercase mb-3"
            >
              Xin chào, tôi là
            </motion.h2>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-4"
            >
              <span className="text-zinc-950 dark:text-white block transition-colors">Nguyễn Xuân</span>
              <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent block">
                Duy Thắng
              </span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.p
              variants={itemVariants}
              className="text-cyan-600 dark:text-cyan-400/90 font-mono font-medium text-base sm:text-lg mb-6 flex items-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              {developerData.role}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mb-8 transition-colors"
            >
              Tôi giúp bạn biến ý tưởng thành{" "}
              <strong className="font-semibold text-zinc-800 dark:text-zinc-200">sản phẩm số thực tế</strong>{" "}
              — từ ứng dụng web chuyên nghiệp đến các giải pháp tích hợp{" "}
              <strong className="font-semibold text-zinc-800 dark:text-zinc-200">trí tuệ nhân tạo (AI)</strong>{" "}
              phục vụ kinh doanh.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href={developerData.cvUrl}
                className="shimmer-btn w-full sm:w-auto text-center bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white dark:text-zinc-950 font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/10 dark:shadow-cyan-950/20"
              >
                Xem CV của tôi
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center border border-zinc-300 dark:border-zinc-800 bg-zinc-200/20 dark:bg-zinc-900/40 text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:border-cyan-500/40 hover:bg-zinc-300/40 dark:hover:bg-zinc-900/80 font-semibold text-sm px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Liên hệ <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </a>
            </motion.div>

            {/* Custom Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 sm:gap-8 mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-900 w-full"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 mb-1">
                  <Rocket className="w-4 h-4" />
                  <span className="font-sans font-bold text-xl sm:text-2xl text-zinc-900 dark:text-white transition-colors">Nhanh</span>
                </div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider font-mono">Giao hàng đúng hẹn</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                  <Shield className="w-4 h-4" />
                  <span className="font-sans font-bold text-xl sm:text-2xl text-zinc-900 dark:text-white transition-colors">An toàn</span>
                </div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider font-mono">Bảo mật dữ liệu</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-violet-600 dark:text-violet-400 mb-1">
                  <Palette className="w-4 h-4" />
                  <span className="font-sans font-bold text-xl sm:text-2xl text-zinc-900 dark:text-white transition-colors">Đẹp</span>
                </div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider font-mono">Giao diện hiện đại</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative profile card visual column */}
          <div className="lg:col-span-5 hidden lg:flex justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-80 h-96 bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 p-6 flex flex-col justify-between overflow-hidden shadow-xl shadow-cyan-600/5 dark:shadow-2xl dark:shadow-cyan-950/20 group transition-all"
            >
              {/* Corner decorative lines */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-2xl pointer-events-none group-hover:border-cyan-500 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-emerald-500/20 rounded-bl-2xl pointer-events-none group-hover:border-emerald-500 transition-all duration-300" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Hồ sơ cá nhân
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              </div>

              {/* Profile info layout */}
              <div className="space-y-5 my-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/20">
                  NT
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white transition-colors">{developerData.name}</h3>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">{developerData.role}</p>
                  <p className="text-xs text-zinc-500 mt-1">Đại học Thủ Dầu Một (TDMU)</p>
                </div>

                <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/60 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Xây dựng ứng dụng web chuyên nghiệp
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Tích hợp giải pháp AI thông minh
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                    Thiết kế giao diện đẹp, dễ dùng
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center transition-colors">
                  <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200 text-xs transition-colors">Sẵn sàng nhận dự án</p>
                  <p className="text-[10px] text-zinc-500">Phản hồi trong 24 giờ</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs font-mono pointer-events-none animate-bounce">
          <span>Xem tiếp</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
}
