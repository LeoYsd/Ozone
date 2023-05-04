/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    fontSize: {
      sm: '12px',
      normal: '15px',
      md: '18px',
      llx: '48px',
      smd: '15px',
      lg: '21.6px',
      gl: '25.92px',
      lx: '31.104px',
      xl: '31.104px',
      xll: '37.325px',
      xlll: '53.748px',
      xxl: '64.497px',
      xxxl: '70px'
    },
    colors: {
      bg: '#F5F5F5',
      lailac: '#9C94FE',
      grey: '#EDEFF6',
      dark: '#1E1A2F',
      subText: '#1E1A2F99',
      purple: '#EF8DF8',
      black: '#1E1A2F',
      error: '#DA0060',
      white: '#FFFFFF',
      label: '#1E1A2F66',
      hack: '#9C94FE33',
    },
    boxShadow: {
      inset: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
      normal: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      medium: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
      extra: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
      tiny: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
      card: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      robotoThin: ['Roboto Thin', 'sans-serif'],
      robotoLight: ['Roboto Light', 'sans-serif'],
      robotoMd: ['Roboto Medium', 'sans-serif'],
      robotoBold: ['Roboto Bold', 'sans-serif'],
      robotoBlack: ['Roboto Black', 'sans-serif'],
    },
    lineHeight: {
      md: '50px',
      normal: '32px',
      loose: '40px',
    },
    extend: {},
  },
  plugins: [],
}
