module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      boxShadow: {
        "3xl": "0px 5px 10px 0px rgb(178, 130, 40, 0.6)",
        "3xlh": "0px 5px 12px 2px rgb(178, 130, 40, 0.8)",
      },
      colors: {
        gold: "#B28228",
        mediumGray: "text-gray-600",
        transparentGray: "rgb(40, 39, 42, 0.9)",
        highGray: "text-gray-900",
      },
      keyframes: {
        float: {
          "0%: 100": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
        },
      },
      animation: {
        floatAnimation: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
