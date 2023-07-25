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
				sans: ['var(--font-gilroy)', 'var(--font-nanum)'],
			},
			backgroundImage: {
				'form-bg': "url('/images/formBg.JPG')",
				'text-bg': "url('/images/textBg.JPG')",
				'about-bg': "url('/images/aboutBg.png')",
			},
			backgroundSize: { auto: 'auto', cover: 'cover', contain: 'contain' },
		},
	},
	plugins: [],
};
