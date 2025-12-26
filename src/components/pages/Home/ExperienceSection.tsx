import { Card } from "@/components/ui/card";
import { useGlitchStyle } from "@/hooks/useGlitchStyle";
import { useDialogStore } from "@/stores/useDialogStore";
import { Badge } from "@/components/ui/badge";

const EXPERIENCES = [
  {
    role: "Full Stack Developer",
    company: "Devocho SRL",
    period: "2025 - Present",
    description: `Development of personalized business software to improve workflow process and implement
    customized solutions for the clients. Built web applications for local businesses,
    designing and implementing backend infrastructure and frontend UI as part of an agile team.`,
    techStack: ["HTMX", "AlpineJS", "Flask", "MySQL", "PostgreSQL", "Docker", "ReactJS", "TypeScript"],
  },
];

export const ExperienceSection = () => {
  const isBrokenMode = useDialogStore((state) => state.isBrokenMode);
  const glitchStyle = useGlitchStyle();

  return (
    <section
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

        <h2
          className="hextech-heading-interactive mb-12"
          onClick={() => useDialogStore.getState().handleEvent("EXPERIENCE")}
        >
          EXPERIENCE
        </h2>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Line (if multiple items) */}
              {index !== EXPERIENCES.length - 1 && (
                <div className="absolute left-0 top-16 bottom-0 w-px bg-hextech-bronze/30 md:left-1/2 md:-ml-px" />
              )}

              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-hextech-bronze/20 pb-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-wide text-hextech-gold transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-hextech-bronze font-mono text-sm">@ {exp.company}</span>
                  </div>
                  <span className="text-hextech-gold/80 font-mono text-sm mt-2 md:mt-0 bg-hextech-gold/10 px-3 py-1 rounded-full border border-hextech-gold/20">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <p className="text-hextech-gray leading-relaxed">{exp.description}</p>

                  {/* Tech Stack */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-hextech-bronze/40 text-hextech-bronze hover:border-hextech-gold hover:text-hextech-gold bg-transparent transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
