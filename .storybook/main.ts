const config = {
	staticDirs: ['../public'],
	stories: ['../src/components/**/stories.tsx'],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	webpackFinal: config => {
		const cssRule = config.module.rules.find(
			rule => rule.test && rule.test.toString().includes('css'),
		);

		if (cssRule) {
			cssRule.use = [
				...cssRule.use.map(useEntry => {
					if (
						useEntry.loader &&
						useEntry.loader.includes('css-loader')
					) {
						return {
							...useEntry,
							options: {
								...useEntry.options,
								importLoaders: 1,
							},
						};
					}
					return useEntry;
				}),
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								require('tailwindcss'),
								require('autoprefixer'),
							],
						},
					},
				},
			];
		}

		config.resolve.modules.push(`${process.cwd()}/src`);
		return config;
	},
};
export default config;
