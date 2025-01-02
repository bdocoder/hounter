/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      white: "white",
      secondary: "#f59e0b",
      heading: "#1b1c57",
      "heading-2": "#0e1735",
      "text-1": "#626687",
      "text-2": "#888b97",
      light: "#e0e3eb",
      attribute: "#3c4563",
      "primary-dark": "#047857",
      primary: "#10b981",
      "primary-light": "#d1fae5",
      alert: "#ef4444",
      "alert-light": "#fee2e2",
      info: "#1d4ed8",
      "info-light": "#dbeafe",
      hr: "#f0f3fd",
    },
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
    },
    lineHeight: {
      DEFAULT: "1.25",
    },
    fontSize: {
      "4xl": "var(--text-4xl)",
      "3xl": "var(--text-3xl)",
      "2xl": "var(--text-2xl)",
      xl: "var(--text-xl)",
      lg: "var(--text-lg)",
      base: "var(--text-base)",
      DEFAULT: "var(--text-base)",
      sm: "var(--text-sm)",
      xs: "var(--text-xs)",
    },
    fontWeight: {
      light: 400,
      normal: 500,
      DEFAULT: 500,
      medium: 600,
      bold: 700,
    },
    extend: {
      spacing: {
        max: "160px",
        "max-2": "120px",
      },
    },
  },
  plugins: [],
};
