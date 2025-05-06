// RandomRuneImage.tsx
import { useState, useEffect } from "react"

interface Rune {
  id: number
  name: string
  url: string
}

export default function RandomRuneImage() {
  const [randomRune, setRandomRune] = useState<Rune | null>(null)

  useEffect(() => {
    fetch("/runes.json")
      .then((res) => res.json())
      .then((data: Rune[]) => {
        const random = data[Math.floor(Math.random() * data.length)]
        setRandomRune(random)
      })
      .catch((err) => console.error("Error loading runes.json:", err))
  }, [])

  if (!randomRune) return <p className="text-white">Cargando...</p>

  return (
    <img
      src={randomRune.url}
      alt={randomRune.name}
      className="w-16 h-16 mb-2"
      style={{
        WebkitMaskImage:
          "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        maskImage:
          "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
      onDragStart={(e) => e.preventDefault()}
    />
  )
}
