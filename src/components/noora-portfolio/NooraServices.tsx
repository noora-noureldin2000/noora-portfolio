"use client";

import { motion } from "framer-motion";
import { nooraPortfolio } from "@/data/noora-portfolio";
import { FileText, Search, BarChart3, GraduationCap, BookOpen, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FileText, Search, BarChart3, GraduationCap, BookOpen,
};

export default function NooraServices() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">What I Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            Services & Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Comprehensive scientific and medical communication services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nooraPortfolio.whatIOffer.map((service, i) => {
            const Icon = iconMap[service.icon] || FileText;
            return (
              <motion.div
                key={i}
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all hover:shadow-lg hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-3">{service.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
