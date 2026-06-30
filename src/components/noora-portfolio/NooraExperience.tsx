"use client";

import { motion } from "framer-motion";
import { nooraPortfolio } from "@/data/noora-portfolio";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function NooraExperience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Career</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A track record of excellence in medical writing, education, and clinical practice
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {nooraPortfolio.experience.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-8 border-l-2 border-emerald-200 dark:border-emerald-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-950" />
              <div className="mb-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">{exp.title}</h3>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">· {exp.company}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {exp.period}</span>
              </div>
              <ul className="space-y-1.5">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
