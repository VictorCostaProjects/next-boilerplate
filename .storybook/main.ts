const config = {
	staticDirs: ['../public'],
	stories: ['../src/components/**/stories.tsx'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-postcss'],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	webpackFinal: config => {
		config.resolve.modules.push(`${process.cwd()}/src`);
		return config;
	},
};
export default config;
