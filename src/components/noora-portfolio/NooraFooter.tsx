"use client";

import { nooraPortfolio } from "@/data/noora-portfolio";
import { Linkedin, Mail, Youtube, Send, ExternalLink } from "lucide-react";

export default function NooraFooter() {
  const p = nooraPortfolio.personal;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 dark:bg-black text-neutral-400 border-t border-neutral-800">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Noora<span className="text-emerald-400">.</span>N
            </h3>
            <p className="text-sm leading-relaxed">
              Medical Writer | Clinical Pharmacy Instructor | Scientific Researcher
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-200 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Experience", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-200 mb-3">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${p.email}`}
                className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={p.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={p.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {year} {p.name}. All rights reserved.</p>
          <a
            href={p.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink className="w-3 h-3" /> View Portfolio Samples
          </a>
        </div>
      </div>
    </footer>
  );
}
