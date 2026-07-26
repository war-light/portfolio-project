import { Card } from "@/components/ui/card";
import { useGlitchStyle } from "@/hooks/useGlitchStyle";
import { useDialogStore } from "@/stores/useDialogStore";

export const AboutSection = () => {
  const isBrokenMode = useDialogStore((state) => state.isBrokenMode);
  const glitchStyle = useGlitchStyle();

  return (
    <section
      id="about"
      className={`hextech-section-wrapper ${isBrokenMode ? "hextech-glitch" : ""}`}
      style={isBrokenMode ? glitchStyle : undefined}
    >
      <div className="hextech-bg-decoration" />
      <Card className="hextech-card">
        {/* Corner Accents */}
        <div className="hextech-corner-tl" />
        <div className="hextech-corner-tr" />
        <div className="hextech-corner-bl" />
        <div className="hextech-corner-br" />

        <h2 className="hextech-heading">Lore / About Me</h2>
        <p className="text-lg text-hextech-light/80 leading-relaxed font-light">
          <span className="text-5xl text-hextech-gold float-left mr-3 -mt-2 font-literata font-bold drop-shadow-md">
            S
          </span>
          oftware is the only craft where one person's work can run simultaneously for millions — without
          being replicated or worn out. That asymmetry between effort and reach is magic... and it is what
          pulled me in.
        </p>
        <br />
        <p className="text-lg text-hextech-light/80 leading-relaxed font-light">
          I'm David, a full-stack software engineer based in Santiago, Dominican Republic. I work across the
          full product stack — from database architecture and API design to the interfaces people actually use
          — with a focus on building systems that solve real operational problems.
        </p>
        <br />
        <p className="text-lg text-hextech-light/80 leading-relaxed font-light">
          At Devocho, I've co-developed an AI-driven clinical data platform for a US-based clinical trials and
          analytics firm, built internal automation that replaced manual payroll workflows, and contributed to
          open-source developer tooling. My stack: React, Python, Flask, PostgreSQL, TypeScript — with a
          growing focus on AI integration at the application layer.
        </p>
        <br />
        <p className="text-lg text-hextech-light/80 leading-relaxed font-light">
          I started in computing in 2018 and have been shipping production code since 2025.
        </p>
        <br />
        <p className="text-lg text-hextech-light/80 leading-relaxed font-light">
          I'm currently pursuing a Bachelor's in Computer Science at the University of the People.
        </p>
      </Card>
    </section>
  );
};
