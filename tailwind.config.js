/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          "0%": {
            transform: "translateX(200px) translateZ(20px) scale(1)", // Start off-screen to the right with some depth
            opacity: 0.2, // Start with low opacity
          },

          "50%": {
            transform: "translateX(0) translateZ(10px) scale(1)", // Closer to parking position
            opacity: 0.8, // Increase opacity
          },
          "75%": {
            transform: "translateX(0) translateZ(0) scale(1)", // Parked in final position
            opacity: 1, // Increase opacity
          },
          "100%": {
            transform: "translateX(0) translateZ(0) scale(1.5)", // Final position, parked and larger
            opacity: 1, // Fully visible
          },
        },
      },
      animation: {
        scaleUp: "scaleUp 2s ease-in forwards", // the animation with duration
      },
    },
  },
};
