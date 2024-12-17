/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        shine: "shine 8s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      colors: {
        "jivuma-gold": "#C19A6B",
        "jivuma-light-gold": "#F5C879",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
      backgroundImage: {
        "spice-pattern":
          "url('https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "bounce-sm": "cubic-bezier(0.4, 2.5, 0.55, 0.9)",
      },
    },
  },
  plugins: [], // Removed line-clamp plugin since it's now included by default
};
