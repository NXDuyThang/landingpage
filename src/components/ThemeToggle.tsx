"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!mounted) {
    return <div className="w-10 h-10 rounded-xl" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl bg-zinc-200/50 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-850 dark:text-zinc-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 shadow-sm cursor-pointer"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-4.5 h-4.5 text-cyan-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4.5 h-4.5 text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
