import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      translate: {
        full_15: "115%",
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        ocean: "#EBEFF2",
        softGray: "#F8F9FA",
        stroke: "#DEE3E8",
        stoneGray: "#BDBCBD",
        paraBlue: "#3B71FD",
        divider: "#e8e9eb",
        menuBg: "#FCFBFC",
        keepYellow: "#FEEFC3",
      },
      fontSize: {
        vsm: "0.6rem",
      },
    },
  },
  plugins: [],
}
export default config
