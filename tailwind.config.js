export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
        ".transform-style-preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      })
    },
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      colors: {
        gold: "#E4C069",
        darkGold: "#E4C069",
        darkerGold: "#7B6737",
        darkBg1: "#7E59FA",
        darkbg2: "#272727",
        darkbg3: "#383838",
        darkbg4: "#4A4A4A",
        darkbg5: "#686868",
      },
      fontFamily: {
        literata: ["literata", "literata"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-out forwards",
        slideInUp: "slideInUp 1s ease-out forwards",
      },
      transformOrigin: {
        center: "center",
      },
    },
  },
}
