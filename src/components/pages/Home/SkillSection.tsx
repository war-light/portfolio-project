import { Card } from "@/components/ui/card";
import { useGlitchStyle } from "@/hooks/useGlitchStyle";
import { useDialogStore } from "@/stores/useDialogStore";
import SkillBox from "./SkillBox";

const SKILLS = {
  languages: ["js", "ts", "python", "mysql", "bash"],
  webTools: ["html", "css", "tailwind", "bootstrap", "react", "nodejs", "flask", "htmx"],
  productivity: ["docker", "git", "vscode", "vim"],
};

export const SkillsSection = () => {
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
          className="hextech-heading-interactive"
          onClick={() => useDialogStore.getState().handleEvent("SKILL_INVENTORY")}
        >
          SKILL INVENTORY
        </h2>
        <h3 className="hextech-subtitle text-center mb-6">UNLOCKED TECHNOLOGIES</h3>

        <div className="flex flex-col gap-8 border border-hextech-bronze/20 text-center p-5">
          <div className="w-full">
            <p className="hextech-subtitle">LEARNED LANGUAGES</p>
            <div className="flex flex-wrap justify-center gap-4">
              {SKILLS.languages.map((skill) => (
                <SkillBox key={skill} iconName={skill} />
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="hextech-subtitle">WEB TOOLS</p>
            <div className="flex flex-wrap justify-center gap-4">
              {SKILLS.webTools.map((skill) => (
                <SkillBox key={skill} iconName={skill} />
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="hextech-subtitle">PRODUCTIVITY TOOLS</p>
            <div className="flex flex-wrap justify-center gap-4">
              {SKILLS.productivity.map((skill) => (
                <SkillBox key={skill} iconName={skill} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
