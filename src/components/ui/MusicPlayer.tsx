import { MUSIC_TRACKS } from "@/data/audioAssets";
import { useDialogStore } from "@/stores/useDialogStore";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isBrokenMode = useDialogStore((state) => state.isBrokenMode);

  // Select track based on broken mode: Silent Universe (index 0) for broken, Midnight Forest (index 1) for normal
  const currentTrack = isBrokenMode ? MUSIC_TRACKS[0] : MUSIC_TRACKS[1];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  // Handle track change when broken mode changes
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.load();
      audioRef.current.play().catch((e) => console.error("Audio play failed:", e));
    }
  }, [isBrokenMode]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center justify-center">
      <audio ref={audioRef} src={currentTrack.src} loop />

      <div className="relative group">
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 bg-hextech-gold/20 rounded-full blur-md transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`}
        />

        <button
          onClick={togglePlay}
          className={`
            relative lg:w-10 lg:h-10 w-8 h-8 rounded-full border
            flex items-center justify-center
            transition-all duration-300
            bg-transparent
            ${
              isPlaying
                ? "border-hextech-gold text-hextech-blue shadow-[0_0_15px_rgba(200,170,110,0.5)]"
                : "border-hextech-bronze text-hextech-blue/70 hover:border-hextech-gold hover:text-hextech-blue"
            }
          `}
          title={isPlaying ? "Turn Music Off" : "Turn Music On"}
        >
          {isPlaying ? (
            <Volume2 size={18} className="text-hextech-gold" />
          ) : (
            <VolumeX size={18} className="text-hextech-gold" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
