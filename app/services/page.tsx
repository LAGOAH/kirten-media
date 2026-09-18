import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const services = [
  {
    title: "Institutional Storytelling",
    description: "We help universities, government agencies, NGOs, and organizations communicate their achievements, document their impact, and preserve their legacy.",
    image: "/images/services/institutional-storytelling.png",
  },
  {
    title: "Documentary Production",
    description: "We produce cinematic documentaries that capture real stories, celebrate achievements, preserve history, and communicate lasting impact.",
    image: "/images/services/documentary-production.png",
  },
  {
    title: "Corporate & Brand Films",
    description: "We create high-quality films that showcase your organization's vision, products, services, and values.",
    image: "/images/services/corporate-films.png",
  },
  {
    title: "Photography",
    description: "We deliver professional photography that captures moments, people, products, and events with creativity, precision, and purpose.",
    image: "/images/services/photography.png",
  },
  {
    title: "Commercial & Advertising",
    description: "From television commercials to digital campaigns, we develop creative advertisements that increase brand awareness and drive engagement.",
    image: "/images/services/commercial-advertising.png",
  },
  {
    title: "Social Media Content",
    description: "We develop engaging visual content tailored for digital platforms, helping brands maintain a strong online presence.",
    image: "/images/services/social-media-content.png",
  },
  {
    title: "Event Coverage",
    description: "We provide comprehensive photo and video coverage for conferences, corporate events, graduations, launches, and ceremonies.",
    image: "/images/services/event-coverage.png",
  },
  {
    title: "Media & Communication Consulting",
    description: "We advise organizations on visual communication strategies, content planning, storytelling, and media solutions.",
    image: "/images/services/media-consulting.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero — Clean, Professional */}
      <Section className="relative pt-40 pb-24 border-b border-white/5">

        <div className="max-w-6xl mx-auto px-6">

          {/* Logo Top Left */}
          <div className="mb-16">
            <img
              src="/images/kirtenmedialogo.png"
              alt="Kirten Media"
              className="h-16 md:h-20 w-auto object-contain filter invert brightness-0 contrast-100"
            />
          </div>

          {/* Editorial Label + Heading */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/30" />
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500 font-mono">
                What We Do
              </span>
            </div>

            <Heading as="h1" size="5xl" className="mb-6 font-black tracking-tight leading-[1.05]">
              Services
            </Heading>

            <Text variant="lead" className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Strategic visual storytelling solutions for institutions, organizations, brands, and visionary individuals.
            </Text>
          </div>

        </div>
      </Section>

      {/* Services Grid */}
      <Section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 hover:border-white/25 transition-all duration-500 overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="text-[10px] font-mono text-neutral-500 tracking-[0.3em] mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400/60 group-hover:w-full transition-all duration-500" />
              </div>
            ))}

          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="border-t border-white/5 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4 font-mono">
            Have a project in mind?
          </p>
          <a
            href="/contact"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight hover:text-neutral-300 transition-colors inline-block"
          >
            Let's talk →
          </a>
        </div>
      </Section>

    </div>
  );
}
