"use client";

import { motion } from "framer-motion";
import { nooraPortfolio } from "@/data/noora-portfolio";
import { CheckCircle2, Award, FileText, Users, Lightbulb } from "lucide-react";

const stats = [
  { icon: FileText, value: "Q1 & Q2", label: "Journal Publications" },
  { icon: Award, value: "3.97 GPA", label: "B.Pharm with Honors" },
  { icon: Users, value: "1,000+", label: "Community Members" },
  { icon: Lightbulb, value: "5+", label: "Years Experience" },
];

export default function NooraAbout() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
              Bridging Clinical Expertise &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Scientific Communication
              </span>
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>{nooraPortfolio.summary.split("\n\n")[0]}</p>
              <p>{nooraPortfolio.summary.split("\n\n")[1]}</p>
            </div>
            <div className="mt-8 space-y-3">
              {nooraPortfolio.whyWorkWithMe.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-emerald-500 mb-3" />
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{stat.value}</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-100 dark:border-emerald-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Licenses & Credentials</h3>
              <div className="space-y-3">
                {nooraPortfolio.licenses.map((lic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{lic.title}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{lic.issuer} · ID: {lic.id} · {lic.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
