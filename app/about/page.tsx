import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const director = {
  image: "/images/team/lazarus.png",
  name: "Lazarus Rimamkirtan",
  role: "Executive Consultant / Managing Director",
};

const teamMembers = [
  {
    image: "/images/team/miracle.png",
    name: "Miracle John Garba",
    role: "Head of Production",
    description: "Oversees planning, logistics, and production to ensure seamless execution across all projects.",
  },
  {
    image: "/images/team/simon.png",
    name: "Simon Anthony",
    role: "Head of Finance",
    description: "Oversees financial planning, budgeting, project costing, procurement, and financial accountability to ensure operational efficiency and transparency.",
  },
  {
    image: "/images/team/andefiki.png",
    name: "Andefiki Ayanarimam",
    role: "Post-Production Lead",
    description: "Transforms raw footage into compelling visual narratives through editing, color grading, and sound design.",
  },
  {
    image: "/images/team/isaac.png",
    name: "Isaac Mamnugsi",
    role: "Director, DOP",
    description: "Captures cinematic visuals that bring stories to life with creativity and technical excellence.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Section className="bg-black text-white pt-40 pb-20">

        {/* Editorial Intro */}
        <div className="max-w-4xl mx-auto mb-24 relative">

          {/* Big decorative quote mark */}
          <div
            className="absolute -top-16 -left-4 md:-left-12 text-[180px] md:text-[240px] leading-none text-white/5 font-serif select-none pointer-events-none"
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative">
            {/* Small editorial label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-white/30" />
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500 font-mono">
                Who We Are
              </span>
            </div>

            {/* Bold lead line */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug text-white mb-8">
              Behind every great story is a passionate team committed to bringing it to life.
            </p>

            {/* Body paragraph */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl">
              At Kirten Media, our strength lies in the creativity, professionalism, and dedication of our people. We are a team of storytellers, filmmakers, photographers, editors, designers, and creative strategists united by a shared passion for creating visual experiences that communicate impact, preserve legacy, and inspire action.
            </p>

            {/* Signature-style accent */}
            <div className="mt-10 flex items-center gap-4">
              <span className="w-16 h-px bg-cyan-400/40" />
              <span className="text-sm italic text-cyan-400/70 tracking-wide font-light">
                — The Kirten Media Team
              </span>
            </div>
          </div>
        </div>

        {/* Featured Director */}
        <div className="max-w-5xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              {/* Soft glow behind director */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/20">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono block mb-3">
              Founder's Note
            </span>
            <Heading as="h3" size="3xl" className="text-white font-bold mb-2">
              {director.name}
            </Heading>
            <Text variant="body" className="text-cyan-400/80 uppercase tracking-wider text-sm">
              {director.role}
            </Text>
          </div>
        </div>

        {/* Rest of Team */}
        <div className="max-w-6xl mx-auto">

          {/* Divider with label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="flex-1 h-px bg-white/10" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono">
              The People
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/15 group-hover:border-cyan-400/40 transition-colors duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <Heading as="h4" size="lg" className="text-white font-bold mb-1">
                  {member.name}
                </Heading>
                <Text variant="small" className="text-cyan-400/80 uppercase tracking-wider mb-3">
                  {member.role}
                </Text>
                <Text variant="body" className="text-neutral-400 text-sm leading-relaxed max-w-[260px]">
                  {member.description}
                </Text>
              </div>
            ))}

          </div>
        </div>

      </Section>
    </div>
  );
}
