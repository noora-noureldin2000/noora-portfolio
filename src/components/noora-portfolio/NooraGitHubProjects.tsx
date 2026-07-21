"use client";

import { motion } from "framer-motion";
import { nooraPortfolio } from "@/data/noora-portfolio";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

export default function NooraGitHubProjects() {
  const { githubProjects, personal } = nooraPortfolio;

  return (
    <section id="github" className="relative py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
            <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Open Source</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            AI-Powered Research Tools
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Practical solutions automating key tasks in medical research with the help of AI —
            from data extraction and sample size calculation to workflow reverse engineering.
          </p>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <Github className="w-4 h-4" /> View all repos on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubProjects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all hover:shadow-lg hover:-translate-y-1 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.topics.map((topic, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
