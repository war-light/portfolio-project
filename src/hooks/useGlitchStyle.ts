import { useMemo } from "react";

/**
 * Generates randomized CSS variables for glitch effect
 * Each call produces unique values for varied glitch animations
 */
export const useGlitchStyle = () => {
  return useMemo(
    () =>
      ({
        "--glitch-duration": `${2 + Math.random() * 3}s`,
        "--glitch-x1": `${-15 + Math.random() * 10}px`,
        "--glitch-x2": `${5 + Math.random() * 10}px`,
        "--glitch-x3": `${-20 + Math.random() * 10}px`,
        "--glitch-skew1": `${-3 + Math.random() * 2}deg`,
        "--glitch-skew2": `${1 + Math.random() * 3}deg`,
        "--glitch-hue1": `${5 + Math.random() * 20}deg`,
        "--glitch-hue2": `${-25 + Math.random() * 20}deg`,
      }) as React.CSSProperties,
    []
  );
};
