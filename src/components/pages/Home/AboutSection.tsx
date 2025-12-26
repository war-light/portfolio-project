import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="hextech-section-wrapper">
      <div className="hextech-bg-decoration" />
      <Card className="hextech-card">
        {/* Corner Accents */}
        <div className="hextech-corner-tl" />
        <div className="hextech-corner-tr" />
        <div className="hextech-corner-bl" />
        <div className="hextech-corner-br" />

        <h2 className="hextech-heading">Lore / About Me</h2>
        <p className="text-lg text-hextech-light/80 text-center leading-relaxed font-light">
          <span className="text-5xl text-hextech-gold float-left mr-3 -mt-2 font-literata font-bold drop-shadow-md">
            I
          </span>
          'm David, a full-stack artisan crafting digital experiences. With one year of profesional
          experience, I combine strong software architecture with elegant designs to create solutions that
          help people and make the world a better place.
        </p>
        <br />
        <p className="text-lg text-hextech-light/80 text-center leading-relaxed font-light">
          I started my journey in computing science in 2018 in a polytechnic school, followed by a two years
          bootcamp at Cincinnatus School of Craftmanship in the field of web development. Since then, I've
          been working as a full-stack developer in the Dominican Republic, creating empresarial solutions.
        </p>
      </Card>
    </section>
  );
};
