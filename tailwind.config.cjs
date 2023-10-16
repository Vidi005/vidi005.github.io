/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "phone": {min: "280px"},
      "tablet": {min: "600px"},
      "desktop": {min: "1024px"}
    },
    extend: {
      boxShadow: {
        "button": "0 2px 4px 2px rgba(75, 74, 74, 0.4)",
        "header": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        "footer": "4px -4px 3px 1px rgba(0, 0, 0, 0.25)",
        "nav": "0px 0px 2px 2px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: []
}
