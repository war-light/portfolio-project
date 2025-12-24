import { Button } from "@/components/ui/button";
import { SocialButton } from "@/components/ui/SocialButton";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/war-light/",
    label: "GitHub",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    href: "https://github.com/war-light/portfolio-project",
    label: "This project",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    href: "https://www.linkedin.com/in/david-gonz%C3%A1lez-37841a365/?locale=en_US",
    label: "LinkedIn",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    href: "mailto:jd.stormlight@gmail.com",
    label: "Email",
    path: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819v-5.818l-5.454 5.454-1.091-1.091 6.545-6.545v-4.823l-6.545 4.364-6.545-4.364v4.823l6.545 6.545-1.091 1.091-5.454-5.454v5.818h-3.819c-.904 0-1.636-.732-1.636-1.636v-13.909c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.364 6.545-4.364h3.819c.904 0 1.636.732 1.636 1.636z",
  },
];

const STATS = [
  { text: "100% Human", icon: "🧬" },
  { text: "Solution Maker", icon: "⚙️" },
  { text: "Environment Adaptability", icon: "🌍" },
  { text: "One Year Experience", icon: "⏳" },
];

export const HeroSection = () => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full gap-12 animate-fade-in">
      {/* Left: Text */}
      <div className="space-y-6 lg:w-1/2">
        <div>
          <h2 className="text-hextech-gold text-sm font-bold tracking-[0.2em] mb-2 uppercase">
            Welcome, Traveler
          </h2>
          <h1 className="text-5xl lg:text-7xl font-bold bg-linear-to-b from-hextech-light to-hextech-gold bg-clip-text text-transparent drop-shadow-lg">
            I'm David G
          </h1>
        </div>

        <div className="h-px w-32 bg-linear-to-r from-hextech-gold to-transparent" />

        <h3 className="text-2xl text-hextech-light/80 italic font-serif">Fullstack Web Developer</h3>

        {/* --- Hextech Button Wrapper --- */}
        <div className="relative group w-fit">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-hextech-gold rotate-45 opacity-50 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#c8aa6e]"></div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-hextech-gold rotate-45 opacity-50 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#c8aa6e]"></div>
          <Button variant="hextech">Contact Me</Button>
        </div>
      </div>

      {/* Right: Feature Card - Hextech Data Slate */}
      <div className="lg:w-1/2 w-full animate-slide-up">
        <div className="relative group">
          {/* 1. Outer Glow */}
          <div className="absolute -inset-0.5 bg-linear-to-b from-hextech-gold/30 to-hextech-blue/0 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

          {/* 2. Main Container Frame */}
          <div className="relative bg-hextech-black border border-hextech-bronze/50 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]" />
            <div className="absolute inset-0 bg-linear-to-b from-hextech-gold/10 via-transparent to-black pointer-events-none" />

            {/* --- DECORATIVE ELEMENTS --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-hextech-gold shadow-[0_0_10px_#c8aa6e]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-hextech-gold rounded-b-sm shadow-[0_0_15px_#c8aa6e]"></div>

            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-hextech-gold/80" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-hextech-gold/80" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-hextech-gold/80" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-hextech-gold/80" />

            {/* --- CONTENT --- */}
            <div className="relative z-10 p-8 pt-10">
              <div className="flex items-center justify-between mb-6 border-b border-hextech-bronze/30 pb-2">
                <h3 className="text-hextech-gold text-xs font-bold tracking-[0.25em] uppercase">
                  Info and Links
                </h3>
                <span className="text-[10px] text-hextech-bronze font-mono">V.4.2</span>
              </div>

              {/* List Items */}
              <ul className="space-y-1">
                {STATS.map((item, index) => (
                  <li
                    key={index}
                    className="group/item flex items-center justify-between p-3 rounded-sm border border-transparent hover:border-hextech-gold/30 hover:bg-linear-to-r hover:from-hextech-gold/5 hover:to-transparent transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center w-6 h-6">
                        <div className="w-1.5 h-1.5 bg-hextech-bronze rotate-45 group-hover/item:bg-hextech-gold group-hover/item:shadow-[0_0_8px_#c8aa6e] transition-all duration-300" />
                        <div className="absolute border border-hextech-bronze/30 w-full h-full rotate-45 scale-50 opacity-0 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-500" />
                      </div>
                      <span className="text-hextech-light/80 font-serif text-lg tracking-wide group-hover/item:text-hextech-light transition-colors">
                        {item.text}
                      </span>
                    </div>

                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-hextech-gold rounded-full" />
                        <div className="w-1 h-1 bg-hextech-gold/50 rounded-full" />
                        <div className="w-1 h-1 bg-hextech-gold/20 rounded-full" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* --- SOCIAL LINKS FOOTER --- */}
              <div className="border-t border-hextech-bronze/30 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-hextech-bronze uppercase tracking-widest">
                    Check my stuff
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <SocialButton key={link.label} href={link.href} label={link.label} path={link.path} />
                  ))}
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="mt-6 flex items-center gap-2 opacity-50">
                <div className="h-1 w-full bg-hextech-bronze/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-hextech-bronze" />
                </div>
                <span className="text-[10px] uppercase text-hextech-bronze whitespace-nowrap">David G</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
