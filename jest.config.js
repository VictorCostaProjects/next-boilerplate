const nextJest = require('next/jest.js');

const createJestConfig = nextJest({
	dir: './',
});

const config = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	coverageProvider: 'v8',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/app/**', // should be tested in e2e
		'!src/lib/registry.tsx',
		'!src/types/**',
		'!src/**/stories.tsx',
		'!src/styles/**',
	],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	modulePaths: ['<rootDir>/src/'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	// https://github.com/styled-components/styled-components/issues/4081
	// v6 of styled-components doesn't inject styles in test environment
	// we should to force it to use the browser version
	// if the project doesn't use styled-components, remove this
	moduleNameMapper: {
		'^styled-components':
			'styled-components/dist/styled-components.browser.cjs.js',
	},
};

module.exports = createJestConfig(config);
