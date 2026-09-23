import Link from "next/link";
import { Container } from "@/components/ui/container";

// Inline SVG Icons
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 00-2.11-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.39.53A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.11 2.12C4.5 20.45 12 20.45 12 20.45s7.5 0 9.39-.53a3 3 0 002.11-2.12A31.3 31.3 0 0024 12a31.3 31.3 0 00-.5-5.8zM9.55 15.57V8.43L15.82 12z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.3 19.5h2.04L6.48 3.24H4.3z" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/kirtenmedia/", label: "Instagram" },
  { icon: <FacebookIcon />, href: "https://facebook.com/share/1HW5Kg4o4o/?mibextid=wwXIfr", label: "Facebook" },
  { icon: <XIcon />, href: "https://x.com/kirtenmedia", label: "X (Twitter)" },
  { icon: <YouTubeIcon />, href: "https://www.youtube.com/@Kirtenmedia", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <Container>

        {/* Big CTA */}
        <div className="py-16 md:py-24 border-b border-white/10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Let's Work Together
          </p>
          <Link
            href="/contact"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight hover:text-neutral-300 transition-colors inline-block"
          >
            Start a project →
          </Link>
        </div>

        {/* Social + Address */}
        <div className="py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left: Social icons only */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Right: Address */}
          <div className="flex items-start gap-2 text-sm text-neutral-500">
            <span className="text-cyan-400/70 mt-0.5 flex-shrink-0">
              <MapPinIcon />
            </span>
            <span>Sixty Room Area, Vaki Housing Estate, ATC, Jalingo, Taraba State, Nigeria</span>
          </div>

        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Kirten Media. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Communicating Impact · Preserving Legacy · Inspiring Action
          </p>
        </div>

      </Container>
    </footer>
  );
}
