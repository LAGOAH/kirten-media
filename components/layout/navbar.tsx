"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always Visible */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/kirtenmedialogo.png"
              alt="Kirten Media"
              className="h-8 w-auto object-contain filter invert brightness-0 contrast-100"
            />
            <span className="text-white font-bold text-base sm:text-xl tracking-tight">
              Kirten Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/2348137228977?text=Hello%20Kirten%20Media%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-neutral-200 transition"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/2348137228977?text=Hello%20Kirten%20Media%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-neutral-200 transition"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
