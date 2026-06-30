"use client";

import { motion } from "framer-motion";
import { nooraPortfolio } from "@/data/noora-portfolio";
import { Mail, Phone, MapPin, Linkedin, Send, ExternalLink } from "lucide-react";

export default function NooraContact() {
  const p = nooraPortfolio.personal;

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
              Whether you need a manuscript polished for publication, complex biostatistical analysis, or engaging clinical training materials — I deliver meticulous, deadline-driven results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href={`mailto:${p.email}`} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group">
              <Mail className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">Email</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">{p.email}</span>
            </a>
            <a href={`tel:${p.phone}`} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group">
              <Phone className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">Phone</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">{p.phone}</span>
            </a>
            <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group">
              <Linkedin className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">LinkedIn</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Connect with me</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={`mailto:${p.email}?subject=Collaboration%20Inquiry&body=Hi%20Noora%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20collaboration.`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-[hsl(150,45%,28%)] hover:bg-[hsl(150,45%,22%)] text-white transition-all shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              Send a Message
            </a>
          </motion.div>

          <motion.div
            className="mt-8 text-sm text-neutral-500 dark:text-neutral-400 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MapPin className="w-4 h-4" /> {p.location}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
