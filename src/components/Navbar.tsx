"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { developerData } from "@/constants/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Trang chủ" },
    { id: "about", label: "Giới thiệu" },
    { id: "skills", label: "Kỹ năng" },
    { id: "projects", label: "Dự án" },
    { id: "contact", label: "Liên hệ" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-lg shadow-cyan-950/5 dark:shadow-cyan-950/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono font-bold text-xl tracking-tight flex items-center gap-1 group"
          >
            <span className="text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">nxdt</span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative py-1 text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-wider text-[11px] ${
                    activeSection === link.id ? "text-cyan-600 dark:text-cyan-400 font-bold" : ""
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggler & Action */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="shimmer-btn inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 hover:from-cyan-500/20 hover:to-emerald-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300"
            >
              Hợp tác ngay
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Hamburger Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-200/50 dark:bg-zinc-900/50 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 inset-x-0 z-40 md:hidden bg-theme-bg border-b border-zinc-200 dark:border-zinc-900 shadow-xl px-6 py-6"
          >
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-zinc-650 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs ${
                      activeSection === link.id ? "text-cyan-600 dark:text-cyan-400 font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-zinc-200 dark:border-zinc-900">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center shimmer-btn inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-zinc-950 dark:text-zinc-950 font-bold text-xs px-5 py-3 rounded-full transition-all"
                >
                  Liên hệ
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
