import { Card } from "@/components/ui/card";

export const AboutSection = () => {
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
          Lore / About Me
        </h2>
        <p className="text-lg text-hextech-light/80 text-center leading-relaxed font-light">
          <span className="text-5xl text-hextech-gold float-left mr-3 -mt-2 font-literata font-bold drop-shadow-md">
            I
          </span>
          'm David, a full-stack artisan crafting digital experiences. With one year of profesional
          experience, I combine strong software architecture with elegant designs to create solutions that
          help people and make the world a better place.
        </p>
      </Card>
    </section>
  );
};
