/** @type {import('tailwindcss').Config} */

const config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				beige: {
					'50': '#fef9ee',
					'100': '#fcf2d8',
					'200': '#f9e1af',
					'300': '#f3c46f',
					'400': '#efa948',
					'500': '#ea9025',
					'600': '#dc771a',
					'700': '#b65b18',
					'800': '#91481b',
					'900': '#753c19',
					'950': '#3f1d0b',
					primary: '#f3c46f',
				},
				brown: {
					'50': '#f7f4ef',
					'100': '#ece5d5',
					'200': '#dacbae',
					'300': '#c5a97f',
					'400': '#b48d5b',
					'500': '#a57a4d',
					'600': '#8d6241',
					'700': '#724b36',
					'800': '#604033',
					'900': '#573a31',
					'950': '#301c18',
					primary: '#573a31',
				},
				green: {
					'50': '#eefbf4',
					'100': '#d5f6e3',
					'200': '#afebcc',
					'300': '#7bdaaf',
					'400': '#45c28d',
					'500': '#22a774',
					'600': '#168e62',
					'700': '#116b4d',
					'800': '#10553e',
					'900': '#0e4634',
					'950': '#07271e',
					primary: '#168e62',
				},
				red: {
					'50': '#fef2f2',
					'100': '#fde3e3',
					'200': '#fccdcc',
					'300': '#f9a9a8',
					'400': '#f47775',
					'500': '#ea4c49',
					'600': '#d83734',
					'700': '#b42421',
					'800': '#95211f',
					'900': '#7c2220',
					'950': '#430d0c',
					primary: '#d83734',
				},
				yellow: {
					'50': '#fdf8e9',
					'100': '#fcefc5',
					'200': '#f9dd8f',
					'300': '#f6c34e',
					'400': '#f2b033',
					'500': '#e19011',
					'600': '#c26d0c',
					'700': '#9b4c0d',
					'800': '#803d13',
					'900': '#6d3216',
					'950': '#401808',
					primary: '#f2b033',
				},
			},
			fontFamily: {
				accent: ['Allerta Stencil', 'sans-serif'],
			},
			gridTemplateRows: {
				'custom-300': 'repeat(2, 300px)',
			},
			boxShadow: {
				// Primary brown
				'button-primary': '2px 2px 1px 0px #573a31',
			},
		},
	},
	plugins: [],
};

export default config;
