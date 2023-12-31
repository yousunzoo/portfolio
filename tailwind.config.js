/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-gilroy)'],
				nanum: ['var(--font-nanum)'],
			},
			backgroundImage: {
				'form-bg': "url('/images/formBg.jpg')",
				'text-bg': "url('/images/textBg.jpg')",
				'about-bg': "url('/images/aboutBg.png')",
				'portfolio-bg': "url('/images/portfolioBg.png')",
			},
			backgroundSize: { auto: 'auto', cover: 'cover', contain: 'contain' },
		},
	},
	plugins: [],
};
