"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText, GraduationCap, BookOpen, Briefcase, Award, Mail, Image as ImageIcon, Github } from "lucide-react";
import { ThemeToggle } from "../shared/inputs/ThemeToggle";
import { useLenis } from "lenis/react";

const navLinks = [
  { label: "About", href: "#about", icon: FileText },
  { label: "Services", href: "#services", icon: GraduationCap },
  { label: "AI Tools", href: "#github", icon: Github },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Portfolio", href: "#portfolio", icon: ImageIcon },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function NooraNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      lenis ? lenis.stop() : (document.body.style.overflow = "hidden");
    } else {
      lenis ? lenis.start() : (document.body.style.overflow = "unset");
    }
    return () => {
      lenis ? lenis.start() : (document.body.style.overflow = "unset");
    };
  }, [mobileOpen, lenis]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      setTimeout(() => {
        if (lenis) lenis.scrollTo(href, { offset: -80 });
        else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-neutral-200 dark:bg-neutral-950/90 dark:border-neutral-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollToSection("#about")} className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Noora<span className="text-[hsl(var(--accent-sage))]">.</span>N
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="mailto:noora.noureldin09@gmail.com"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-[hsl(150,45%,28%)] hover:bg-[hsl(150,45%,22%)] text-white transition-all shadow-md hover:shadow-lg"
            >
              Hire Me
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.label}</span>
                </button>
              );
            })}
            <a
              href="mailto:noora.noureldin09@gmail.com"
              className="flex items-center justify-center gap-2 mt-3 w-full py-3 rounded-xl font-semibold text-sm bg-[hsl(150,45%,28%)] hover:bg-[hsl(150,45%,22%)] text-white transition-all"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
