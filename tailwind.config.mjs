/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        verticalLoopAnimation: {
          "0%, 100%": { transform: "scale(1) translateY(12px)" },
          "50%": { transform: "scale(1.05) translateY(0)" },
        },
        scrollLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    animation: {
      verticalLoop: "verticalLoopAnimation 2s ease-in-out infinite",
      scrollLoop: "scrollLoop 100s linear infinite",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
