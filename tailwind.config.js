/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fall1: "fall1 .5s .5s ease-in both",
        fall2: "fall2 .5s 1s ease-in both",
        fall3: "fall3 .5s 1.5s ease-in both",
        fall4: "fall4 .5s 2s ease-in both",
        fall5: "fall5 .5s 2.5s ease-in both",
      },
      keyframes: {
        fall1: {
          from: {
            transform: "translatey(-700px) translatex(-500px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
            display: "flex",
          },
        },
        fall2: {
          from: {
            transform: "translatey(-700px) translatex(500px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        fall3: {
          from: {
            transform: "translatey(500px) translatex(-500px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        fall4: {
          from: {
            transform: "translatey(450px) translatex(500px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        fall5: {
          from: {
            transform: "translatey(-500px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
      },
      height: {
        "7/8": "87.5%",
        "6/8": "75%",
        "5/8": "62.5%",
        "4/8": "50%",
        "3/8": "37.5%",
      },
      width: {
        "7/8": "87.5%",
        "6/8": "75%",
        "5/8": "62.5%",
        "4/8": "50%",
        "3/8": "37.5%",
      },
    },
  },
  plugins: [],
};
