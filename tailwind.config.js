/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ['last'],
      animation: {
        'rotate-slow-1': 'rotate1 60s linear infinite',
        'rotate-slow-2': 'rotate2 60s linear infinite',
        'rotate-slow-3': 'rotate3 60s linear infinite',
        'rotate-slow-4': 'rotate4 60s linear infinite',
        'rotate-slow-5': 'rotate5 60s linear infinite',
        'rotate-slow-6': 'rotate6 60s linear infinite',
      },
      transform: {
        'rotate-0': 'rotate(0deg)',
        'rotate-30': 'rotate(30deg)',
        'rotate-60': 'rotate(60deg)',
        'rotate-90': 'rotate(90deg)',
        'rotate-120': 'rotate(120deg)',
        'rotate-150': 'rotate(150deg)',
        'rotate-180': 'rotate(180deg)',
        'rotate-210': 'rotate(210deg)',
        'rotate-240': 'rotate(240deg)',
        'rotate-270': 'rotate(270deg)',
        'rotate-300': 'rotate(300deg)',
        'rotate-330': 'rotate(330deg)',
        'rotate-360': 'rotate(360deg)',
      },
      backdropBlur: {
        'xl': '32px',
        '2xl': '64px',
        '3xl': '96px',
        '4xl': '128px',
      },
      borderRadius: {
        'extra': '2rem',
        'extra-xl': '3rem',
        'extra-2xl': '4rem',
        'extra-3xl': '5rem',
      },
      textShadow: {
        DEFAULT: "0 0.0625rem 0.125rem rgba(0, 0, 0, 0.25)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        1500: "1500ms",
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
      },
      fontSize: {
        "1.25xl": "1.25rem",
        "2.5xl": "1.625rem",
        "3.25xl": "2.125rem",
        "3.75xl": "2.375rem",
        "4.25xl": "2.625rem",
        "4.5xl": "2.875rem",
      },
      colors: {
        color: {
          1: "#8AA39B",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
          cream: "#FDFDBE",
          ivory: "#FFFFED",
          russianviolet: "#191539",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#191539",
          2: "#101D38",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#FFFFED",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
        22: "5.5rem",
      },
      opacity: {
        15: ".15",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};