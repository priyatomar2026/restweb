/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    colors: { ink: "#151616", paper: "#f4efe5", sand: "#e9e0d1", gold: "#c18d43", muted: "#77756f" },
    fontFamily: { display: ["Georgia", "Times New Roman", "serif"], sans: ["Arial", "Helvetica", "sans-serif"] },
    keyframes: { rise: { "0%": { opacity: "0", transform: "translateY(18px)" }, "100%": { opacity: "1", transform: "translateY(0)" } }, shimmer: { "0%": { backgroundPosition: "0% 0%" }, "100%": { backgroundPosition: "100% 100%" } } },
    animation: { rise: "rise .7s ease-out both", shimmer: "shimmer 18s linear infinite" }
  }},
  plugins: [],
};
