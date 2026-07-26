"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Institutional Storytelling" },
    { href: "/services", label: "Documentary Production" },
    { href: "/services", label: "Corporate & Brand Films" },
    { href: "/services", label: "Photography" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-cyan-100 transition-colors">
                Kirten Media
              </Link>
              <p className="text-sm text-neutral-500 mt-4 leading-relaxed max-w-xs">
                Strategic visual storytelling for governments, institutions, organizations, and brands.
              </p>
              {/* Social/Trust Badge */}
              <div className="mt-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  Strategic Studio
                </span>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">Connect</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-cyan-400/60">📞</span>
                  <a href="tel:+2348137228977">+234-813-722-8977</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-cyan-400/60">✉️</span>
                  <a href="mailto:info@kirtenmedia.com">info@kirtenmedia.com</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-cyan-400/60">🌐</span>
                  <a
                    href="https://www.kirtenmedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.kirtenmedia.com
                  </a>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-cyan-400/60">📍</span>
                  <span>Taraba State, Nigeria</span>
                </li>
              </ul>

              {/* WhatsApp quick button */}
              <a
                href="https://wa.me/2348137228977?text=Hello%20Kirten%20Media%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-mono text-neutral-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all duration-300"
              >
                📱 Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Kirten Media. All rights reserved.
            </p>
            <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.3em]">
              Communicating Impact · Preserving Legacy · Inspiring Action
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
