import { useState } from "react"
import RandomRuneImage from "../../../utils/RandomRuneImage"

interface SkillBoxProps {
  iconName: string
}

export default function SkillBox({ iconName }: SkillBoxProps) {
  const [flipped, setFlipped] = useState(false)
  const iconSource = "https://skillicons.dev/icons?i="

  function handleClick() {
    setFlipped((prev) => !prev)
  }

  return (
    <div onClick={handleClick} className="w-24 h-32 perspective cursor-pointer select-none">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}>
        
        {/* Front side */}
        <div className="absolute w-full h-full bg-neutral-800 rounded-lg border border-darkerGold hover:border-gold hover:bg-neutral-700 backface-hidden flex flex-col justify-center items-center">
          <img
            src={`${iconSource}${iconName}`}
            alt={iconName}
            className="w-10 h-full mb-2"
            onDragStart={(e) => e.preventDefault()}
          />
          <div className="justify-center content-center flex border-t border-darkerGold p-2 rounded-b-lg w-full">
            <p className="text-neutral-200">{iconName}</p>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full bg-neutral-700 rounded-lg border border-gold rotate-y-180 backface-hidden flex items-center justify-center">
          <RandomRuneImage />
        </div>
      </div>
    </div>
  )
}
