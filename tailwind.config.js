/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
     mammu : 
     {
       50: '#defbf9',
       100: '#bfede7',
       200: '#9cdfd6',
       300: '#78d1c5',
       400: '#54c4b5',
       500: '#3bab9b',
       600: '#2b8579',
       700: '#1b6056',
       800: '#083a34',
       900: '#001611',
     },
     NavCol :
     {
       50: '#edf1fc',
       100: '#d3d4e1',
       200: '#b6b8c9',
       300: '#989bb2',
       400: '#7c7f9b',
       500: '#636582',
       600: '#4c4f66',
       700: '#363849',
       800: '#21222e',
       900: '#0a0a16',
     }
      }
    },
  },
  plugins: [],
}