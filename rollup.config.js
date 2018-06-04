const { uglify } = require('rollup-plugin-uglify');
const babel = require('rollup-plugin-babel');

let config = {
	entry: './src/index.js',
	targets: [
		{ format: 'umd', dest: './bundle/input-show.js' },
		{ format: 'umd', dest: './demo/js/input-show.js' },
		{ format: 'es', dest: './bundle/input-show.es.js' },
	],
	moduleName: 'inputShow',
	plugins: [
		babel(),
	]
};

if (process.env.min) {
	config.targets.pop();
	config.targets[0].dest = './bundle/input-show.min.js';
	config.plugins.push(uglify());
}

export default config;
