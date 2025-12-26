import { useState } from "react";
import { Card } from "@/components/ui/card";

const runes = [
  "ᚨ",
  "ᚠ",
  "ᚢ",
  "ᚦ",
  "ᚱ",
  "ᚲ",
  "ᚷ",
  "ᚹ",
  "ᚺ",
  "ᚾ",
  "ᛁ",
  "ᛃ",
  "ᛇ",
  "ᛈ",
  "ᛉ",
  "ᛊ",
  "ᛏ",
  "ᛒ",
  "ᛖ",
  "ᛗ",
  "ᛚ",
  "ᛜ",
  "ᛞ",
  "ᛟ",
];
const RandomRuneImage = () => {
  const rune = runes[Math.floor(Math.random() * runes.length)];
  return <div className="animate-pulse text-4xl text-hextech-gold select-none">{rune}</div>;
};

interface SkillBoxProps {
  iconName: string;
}

export default function SkillBox({ iconName }: SkillBoxProps) {
  const [flipped, setFlipped] = useState(false);
  const iconSource = "https://skillicons.dev/icons?i=";

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="group w-24 h-32 perspective-[1000px] cursor-pointer select-none"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-3d ${flipped ? "transform-[rotateY(180deg)]" : ""}`}
      >
        {/* Front */}
        <Card className="absolute inset-0 border-hextech-bronze bg-linear-to-b from-neutral-900 to-hextech-black backface-hidden flex flex-col items-center justify-between p-0 hover:border-hextech-gold hover:shadow-[0_0_15px_rgba(200,170,110,0.3)] transition-all">
          <div className="grow flex items-center justify-center pt-2">
            <img src={`${iconSource}${iconName}`} alt={iconName} className="w-10 h-10 drop-shadow-md" />
          </div>
          <div className="w-full border-t border-hextech-bronze/50 bg-hextech-blue/80 py-2 flex justify-center rounded-b-lg">
            <span className="text-xs uppercase tracking-widest text-hextech-light/70 group-hover:text-hextech-light">
              {iconName}
            </span>
          </div>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 border-hextech-gold bg-hextech-black transform-[rotateY(180deg)] backface-hidden flex items-center justify-center shadow-[0_0_15px_#c8aa6e]">
          <div className="opacity-80 sepia brightness-125 animate-shake">
            <RandomRuneImage />
          </div>
        </Card>
      </div>
    </div>
  );
}
