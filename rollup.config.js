//import buble from 'rollup-plugin-buble';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'src/load.js',
	moduleName: 'Ractive.load',
	dest: 'dist/ractive-load.js',
	format: 'iife',
	plugins: [

		nodeResolve({
			jsnext: true,
			skip: [ 'ractive' ]
		}),
		commonjs(),
		//buble()
		babel({
			exclude: 'node_modules/**'
		})
	],
	external: [ 'ractive' ],
	globals: { ractive: 'Ractive' }
};
