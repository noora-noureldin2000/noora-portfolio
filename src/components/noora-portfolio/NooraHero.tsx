"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Download, ArrowDown } from "lucide-react";
import { nooraPortfolio } from "@/data/noora-portfolio";
import { TypeAnimation } from "react-type-animation";

export default function NooraHero() {
  const p = nooraPortfolio.personal;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-neutral-950 dark:via-emerald-950/20 dark:to-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                {p.tagline}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4"
          >
            {p.name.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              {p.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 min-h-[2.5rem]"
          >
            <TypeAnimation
              sequence={[
                "Medical Writer",
                2000,
                "Clinical Pharmacy Instructor",
                2000,
                "Scientific Researcher",
                2000,
              ]}
              repeat={Infinity}
              speed={1}
              deletionSpeed={15}
              className="font-semibold text-emerald-600 dark:text-emerald-400"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {nooraPortfolio.summary.split(".")[0]}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <span className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              <MapPin className="w-4 h-4 text-emerald-500" /> {p.location}
            </span>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-600">|</span>
            <a href={`tel:${p.phone}`} className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Phone className="w-4 h-4 text-emerald-500" /> {p.phone}
            </a>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-600">|</span>
            <a href={`mailto:${p.email}`} className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Mail className="w-4 h-4 text-emerald-500" /> Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`mailto:${p.email}`}
              className="px-8 py-3.5 rounded-xl font-semibold text-base bg-[hsl(150,45%,28%)] hover:bg-[hsl(150,45%,22%)] text-white transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-medium text-base border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={p.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-medium text-base border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Portfolio Samples
            </a>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => {
          const el = document.querySelector("#about");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400 dark:text-neutral-600 hover:text-emerald-500 transition-colors"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
