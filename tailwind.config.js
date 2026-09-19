/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Detector event display: near-black vacuum, steel detector, signal tracks.
        vacuum: {
          DEFAULT: "#07090D",
          raised: "#0C1016",
          sunk: "#04060A",
        },
        steel: {
          DEFAULT: "#6E8FAC", // 5.4:1 on the lightest point of the ground
          bright: "#93A6B8",  // body prose, 7.4:1 on the lightest ground
          dim: "#2C3B49",     // hairlines
        },
        ink: "#D6DDE4",
        infra: "#A8861B",     // infrastructure jet, validated
        software: "#0095AA",  // software jet, validated
        calor: "#C0392B",     // calorimeter energy
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-martian)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Measurement layer runs small but never below 12px.
        meas: ["0.75rem", { lineHeight: "1.1", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        measure: "68ch",
      },
      transitionTimingFunction: {
        // Exponential ease-out, the world's single motion curve.
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
