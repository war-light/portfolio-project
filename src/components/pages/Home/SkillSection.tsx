import { Card } from "@/components/ui/card";
import SkillBox from "./SkillBox";

const SKILLS = {
  languages: ["js", "ts", "python", "mysql", "bash"],
  webTools: ["html", "css", "tailwind", "react", "nodejs", "flask"],
  productivity: ["docker", "git", "vscode", "vim"],
};

export const SkillsSection = () => {
  return (
    <section className="w-full max-w-4xl relative mx-auto">
      <div className="absolute -inset-1 border border-hextech-gold/20 transform rotate-1 rounded-sm opacity-50 pointer-events-none" />
      <Card className="relative p-8 md:p-12 border-hextech-gold/40 bg-hextech-black/80 backdrop-blur-md">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-hextech-gold" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-hextech-gold" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-hextech-gold" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-hextech-gold" />

        <h2 className="text-hextech-gold text-center text-3xl mb-6 font-bold tracking-widest uppercase border-b border-hextech-bronze/30 pb-4 mx-auto w-fit">
          SKILL INVENTORY
        </h2>
        <h3 className="text-hextech-bronze text-xs tracking-[0.3em] mt-2 text-center mb-6">
          UNLOCKED TECHNOLOGIES
        </h3>

        <div className="flex flex-col gap-8 border border-hextech-bronze/20 text-center p-5">
          <div className="w-full">
            <p className="text-hextech-bronze text-xs tracking-[0.3em] mb-4">LEARNED LANGUAGES</p>
            <div className="flex flex-wrap justify-center gap-4">
              {SKILLS.languages.map((skill) => (
                <SkillBox key={skill} iconName={skill} />
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-hextech-bronze text-xs tracking-[0.3em] mb-4">WEB TOOLS</p>
            <div className="flex flex-wrap justify-center gap-4">
              {SKILLS.webTools.map((skill) => (
                <SkillBox key={skill} iconName={skill} />
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-hextech-bronze text-xs tracking-[0.3em] mb-4">PRODUCTIVITY TOOLS</p>
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
