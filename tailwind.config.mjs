/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'pink':"#FF91AF",
				blk:"#161616",
				wh:'#EDEAE0'
			},
			fontFamily:{
				'alfa-slab':'Alfa Slab One',
				'cabin':'CabinetGrotesk-Variable'
			}
		},
		
	},
	plugins: [],
}
