module.exports = {
	'*.{js,jsx,ts,tsx}': filenames => {
		return [
			`prettier --write ${filenames.join(' ')}`,
			`next lint --fix ${filenames.map(file => `--file ${file}`).join(' ')}`,
			`npm test -- --findRelatedTests ${filenames.join(' ')}`,
		];
	},
};
