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
        fall1: "fall1 .5s 1s ease-in both",
        fall2: "fall2 .5s 1.6s ease-in both",
        fall3: "fall3 .5s 2.2s ease-in both",
        fall4: "fall4 .5s 2.8s ease-in both",
        zoom1: "zoom1 .5s 3.3s ease-in both",
        zoom2: "zoom2 .5s 3.4s ease-in both",
        zoom3: "zoom3 .5s 3.5s ease-in both",
        zoom4: "zoom4 .5s 3.6s ease-in both",
        zoom5: "zoom5 .5s 3.7s ease-in both",
        zoom6: "zoom6 .5s 3.8s ease-in both",
        zoom7: "zoom7 .5s 3.9s ease-in both",
        button1: "button1 1s 1s ease-in both",
        button2: "button2 1s 1s ease-in both",
        button3: "button3 1s 1s ease-in both",
        button4: "button4 1s 1s ease-in both",
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
        zoom1: {
          from: {
            transform: "translatey(-600px) translatex(600px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        zoom2: {
          from: {
            transform: "translatey(600px) translatex(-600px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        zoom3: {
          from: {
            transform: "translatey(-600px) translatex(-600px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        zoom4: {
          from: {
            transform: "translatey(-600px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        zoom5: {
          from: {
            transform: "translatey(600px) translatex(600px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        zoom6: {
          from: {
            transform: "translatey(-600px) translatex(600px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        zoom7: {
          from: {
            transform: "translatey(600px)",
          },
          to: {
            transition: "all var(--spring-duration) var(--spring-easing)",
            padding: ".4rem 0",
          },
        },
        button1: {
          from: {
            transform: "translatey(-700px)",
          },
          to: {
            transform: "all var(--spring-duration) var(--spring-easing)",
          },
        },
        button2: {
          from: {
            transform: "translatey(-700px)",
          },
          to: {
            transform: "all var(--spring-duration) var(--spring-easing)",
          },
        },
        button3: {
          from: {
            transform: "translatey(-700px)",
          },
          to: {
            transform: "all var(--spring-duration) var(--spring-easing)",
          },
        },
        button4: {
          from: {
            transform: "translatey(-700px)",
          },
          to: {
            transform: "all var(--spring-duration) var(--spring-easing)",
          },
        },
      },
      height: {
        "16/8": "200%",
        "14/8": "175%",
        "12/8": "150%",
        "10/8": "125%",
        "8/8": "100%",
        "7/8": "87.5%",
        "6.5/8": "81.25%",
        "6/8": "75%",
        "5/8": "62.5%",
        "4.5/8": "56.25%",
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
      boxShadow: {
        drop: "4px 4px 0 0 rgba(255, 20, 147, 0.25)",
      },
      fontFamily: {
        fabio: ["var(--fabio)"],
        mono: ["var(--font-roboto-mono)"],
      },
      borderRadius: {
        circle: "100%",
      },
    },
  },
  plugins: [],
};
