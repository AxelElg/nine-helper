const purgecss = [
	'@fullhuman/postcss-purgecss',
	{
		// Specify the paths to all of the template files
		content: [
			'./pages/**/*.js',
			'./pages/**/*.jsx',
			'./components/**/*.js',
			'./components/**/*.jsx',
		],

		// make sure css reset isnt removed on html and body
		whitelist: ['html', 'body'],

		// Include any special characters you're using in this regular expression
		defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
	},
];
module.exports = {
	plugins: [
		'tailwindcss',
		process.env.NODE_ENV === 'production' ? purgecss : undefined,
		'postcss-preset-env',
	],
};
