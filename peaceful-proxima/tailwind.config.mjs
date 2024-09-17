/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'black-900': '#000000', // black-900 for dark background
		},
		animation: {
		  'text-glow': 'glow 5s ease-in-out infinite alternate',
		},
		keyframes: {
		  glow: {
			'0%': { textShadow: '0 0 10px rgba(72, 112, 214, 0.2)' }, 
			'100%': { textShadow: '0 0 30px rgba(241, 86, 70, .1)' },  
		  },
		},
	  },
	},
	plugins: [],
  }
  