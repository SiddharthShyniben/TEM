const rollupConfig = {
	input: 'src/index.js',
	output: {
		dir: 'dist',
		format: 'iife',
		name: 'TEM'
	}
};

export default rollupConfig;
