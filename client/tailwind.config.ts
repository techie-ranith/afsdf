import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    heading:{
      1:'',
      2:{

      },
      3:{

      },
    },
    text:{
      1:'text-fonts-primary text-md',
      2:{
        
      },
      3:{

      }
    },
    colors: {
      primary: {
        0: '#C5EDCB',
        100: '#9EE1A8',
        200: '#77D486',
        400: '#50C863',
        600: '#37AF4A',
        800: '#2B8839',
      },
      secondary: {
        0: '#ECF8EE',
        100: '#C7EACD',
        200: '#7DCF8A',
        400: '#7DCF8A',
        600: '#58C168',
        800: '#3EA74E',
      },
      accent: {
        0: '#F2F2F2',
        100: '#D8D8D9',
        200: '#BEBEC0',
        400: '#A5A5A7',
        600: '#8B8B8E',
        800: '#717174',
      },
      fonts:{
        primary:'#606060',
        secondary:'#EBE2E2',

      },
      white:'#FFFFFF',
      black:'#000000',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
