"use client";

import { motion } from "framer-motion";
import { nooraPortfolio } from "@/data/noora-portfolio";
import { Award, ExternalLink } from "lucide-react";

export default function NooraCertifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            Certifications & Training
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Continuous professional development across research, biostatistics, and clinical education
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nooraPortfolio.certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{cert.title}</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{cert.issuer}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{cert.date}</p>
                  {cert.details && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{cert.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
