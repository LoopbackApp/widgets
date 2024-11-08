import { scopedPreflightStyles, isolateInsideOfContainer } from "tailwindcss-scoped-preflight";

/** @type {import('tailwindcss').Config} */
export default {
  prefix: "lb-",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loopback: {
          background: "var(--lb-widget-bg)",
          placeholder: "var(--lb-input-placeholder-color)",
          input: "var(--lb-input-color)",
          submit: "var(--lb-btn-submit-bg)",
          "submit-text": "var(--lb-btn-submit-color)",
          title: "var(--lb-title-color)",
          description: "var(--lb-description-color)",
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    scopedPreflightStyles({
    isolationStrategy: isolateInsideOfContainer(".loopback-root"),
  }),],
}

