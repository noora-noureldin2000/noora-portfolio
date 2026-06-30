"use client";

import { motion } from "framer-motion";
import { nooraPortfolio } from "@/data/noora-portfolio";
import { FileText, BarChart3, ClipboardList, Presentation, ExternalLink, FolderOpen } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FileText, BarChart3, ClipboardList, Presentation,
};

export default function NooraPortfolioSamples() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Work Samples</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            Portfolio & Publications
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Browse my work across academic research, medical writing, data analysis, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {nooraPortfolio.portfolioSamples.map((sample, i) => {
            const Icon = iconMap[sample.icon] || FolderOpen;
            return (
              <motion.a
                key={i}
                href={sample.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all hover:shadow-lg hover:-translate-y-1 block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">{sample.category}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{sample.description}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8 text-center">Publications</h3>
          <div className="space-y-4">
            {nooraPortfolio.publications.map((pub, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        pub.quartile === "Q1"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                      }`}>
                        {pub.quartile}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-1">{pub.title}</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{pub.authors}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {pub.journal}, {pub.volume}, {pub.pages} ({pub.year})
                    </p>
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> DOI
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
