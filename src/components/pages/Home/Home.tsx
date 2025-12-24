import DivisionLine from "@/components/ui/DivisionLine";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-hextech-black flex flex-col relative font-literata">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#1e2328_0%,#0a0a0c_100%)] -z-10" />
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50" />

      <main className="flex flex-col items-center gap-16 py-12 px-4 w-full max-w-7xl mx-auto">
        <HeroSection />

        <DivisionLine />

        <AboutSection />

        <DivisionLine />

        <SkillsSection />
      </main>
    </div>
  );
};

export default Home;
