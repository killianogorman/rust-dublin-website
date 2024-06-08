/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'pink':"#FF91AF",
				blk:"#121212",
				wh:'#EDEAE0',
				yeller:'#FFD700'
			},
			fontFamily:{
				'alfa-slab':'Alfa Slab One',
				'cabin':'CabinetGrotesk-Variable'
			}
		},
		
	},
	plugins: [],
}
