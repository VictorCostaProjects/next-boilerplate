module.exports = {
	'*.{js,jsx,ts,tsx}': filenames => {
		return [
			`prettier --write ${filenames.join(' ')}`,
			`next lint --fix ${filenames.map(file => `--file ${file}`).join(' ')}`,
			'tsc --project tsconfig.json --noEmit',
			`npm test -- --findRelatedTests ${filenames.join(' ')}`,
		];
	},
};
