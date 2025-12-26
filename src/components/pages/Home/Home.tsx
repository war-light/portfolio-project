import DivisionLine from "@/components/ui/DivisionLine";
import { useDialogStore } from "@/stores/useDialogStore";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { SkillsSection } from "./SkillSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-hextech-black flex flex-col relative font-literata">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#1e2328_0%,#0a0a0c_100%)] -z-10" />
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50" />

      {/* Broken Light Mode Effect */}
      {useDialogStore((state) => state.isBrokenMode) && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-white clip-path-polygon-[0_0,50%_0,40%_100%,0_100%] animate-in fade-in duration-1000"
            style={{ clipPath: "polygon(0 0, 50% 0, 40% 100%, 0 100%)" }}
          ></div>
        </div>
      )}

      <main className="flex flex-col items-center gap-16 py-12 px-4 w-full max-w-7xl mx-auto">
        <HeroSection />

        <DivisionLine />

        <AboutSection />

        <DivisionLine />

        <ExperienceSection />

        <DivisionLine />

        <SkillsSection />
      </main>
    </div>
  );
};

export default Home;
