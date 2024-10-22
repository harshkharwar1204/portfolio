/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '3rem': '3.2rem', // Add this line to extend spacing
      },
      screens: {
        'xsm': '470px',
        'sm': '640px',   // Default Tailwind 'sm' breakpoint
        'md': '768px',   // Default Tailwind 'md' breakpoint
        'lg': '1024px',  // Default Tailwind 'lg' breakpoint
        'xl': '1280px',  // Default Tailwind 'xl' breakpoint
        '2xl': '1536px', // Default Tailwind '2xl' breakpoint
        'custom800': '800px', // Custom breakpoint for 800px
        'custom1000': '1000px', // Custom breakpoint for 1000px
      },
      fontSize: {
        vlarge: ['106px', { lineHeight: '1', fontWeight: '700' }], // Custom font size
      },
    },
  },
  plugins: [],
};
