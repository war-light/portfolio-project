import { useDialogStore } from "../../stores/useDialogStore";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const DialogBox = () => {
  const { isVisible, text, characterName, characterImage, hideDialog } = useDialogStore();
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // If the dialog is not visible, reset the displayed text and return
    if (!isVisible) {
      setDisplayedText("");
      return;
    }

    let i = 0;
    setDisplayedText("");

    const timer = setInterval(() => {
      // Add the next character to the displayed text
      setDisplayedText(text.slice(0, i + 1));
      i++;
      // If the displayed text has reached the end of the text, clear the interval
      if (i >= text.length) {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [text, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="container mx-auto px-4 pb-6">
        <div className="flex gap-4 bg-hextech-glass backdrop-blur-md border-gradient-gold rounded-lg shadow-2xl overflow-hidden">
          {/* Character Box */}
          <div className="w-48 h-48 bg-hextech-blue border-r-2 border-hextech-bronze flex items-center justify-center shrink-0">
            {characterImage ? (
              <img src={characterImage} alt={characterName} className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2 text-hextech-gold">
                <MessageCircle size={48} className="opacity-50" />
                <span className="text-xs uppercase tracking-wider opacity-70">
                  {characterName || "System"}
                </span>
              </div>
            )}
          </div>

          {/* Dialog Text Area */}
          <div className="flex-1 p-6 flex flex-col justify-between min-h-48">
            {/* Character Name */}
            {characterName && (
              <div className="text-hextech-gold font-bold uppercase tracking-widest text-sm mb-3 text-glow">
                {characterName}
              </div>
            )}

            {/* Dialog Text */}
            <div className="flex-1 text-hextech-light leading-relaxed text-lg">{displayedText}</div>

            {/* Click to Close Indicator */}
            <div className="flex justify-end items-center gap-2 mt-4">
              <button
                onClick={hideDialog}
                className="text-hextech-bronze hover:text-hextech-gold transition-colors text-sm uppercase tracking-wider font-semibold"
              >
                Close
              </button>
              <div className="w-2 h-2 bg-hextech-gold rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
