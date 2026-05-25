"use client";

import { developerData } from "@/constants/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-zinc-900 bg-slate-100/80 dark:bg-zinc-950/80 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Brand copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-sans transition-colors">
            © {currentYear} <span className="font-semibold text-zinc-800 dark:text-zinc-200">{developerData.name}</span>. All rights reserved.
          </p>
          <p className="text-[10px] text-zinc-500 font-mono transition-colors">
            Sinh viên Công nghệ Thông tin — Đại học Thủ Dầu Một (TDMU)
          </p>
        </div>

        {/* Right: Scroll to top */}
        <a
          href="#hero"
          onClick={handleScrollToTop}
          className="w-10 h-10 rounded-full border border-slate-300 dark:border-zinc-800 bg-slate-200/30 dark:bg-zinc-900/30 hover:bg-slate-200/70 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all flex items-center justify-center shrink-0 group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </a>

      </div>
    </footer>
  );
}
