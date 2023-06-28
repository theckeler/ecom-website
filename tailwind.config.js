/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		"xl:basis-1/12",
		"xl:basis-2/12",
		"xl:basis-3/12",
		"xl:basis-4/12",
		"xl:basis-5/12",
		"xl:basis-6/12",
		"xl:basis-7/12",
		"xl:basis-8/12",
		"xl:basis-9/12",
		"xl:basis-10/12",
		"xl:basis-11/12",
		"xl:basis-12/12",

		"lg:basis-1/12",
		"lg:basis-2/12",
		"lg:basis-3/12",
		"lg:basis-4/12",
		"lg:basis-5/12",
		"lg:basis-6/12",
		"lg:basis-7/12",
		"lg:basis-8/12",
		"lg:basis-9/12",
		"lg:basis-10/12",
		"lg:basis-11/12",
		"lg:basis-12/12",

		"xl:min-h-xs",
		"xl:min-h-sm",
		"xl:min-h-md",
		"xl:min-h-lg",
		"xl:min-h-xl",

		"lg:min-h-xs",
		"lg:min-h-sm",
		"lg:min-h-md",
		"lg:min-h-lg",
		"lg:min-h-xl",

		"min-h-[50%]",
	],
	theme: {
		minHeight: {
			default: "3em",
			xs: "13.5em",
			sm: "18em",
			lg: "23em",
			lg: "28em",
			xl: "35em",
			screen: "100vh",
		},

		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
