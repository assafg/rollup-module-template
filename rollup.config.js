import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { peerDependencies } from './package.json';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        babel({
            plugins: ['external-helpers'],
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        uglify(),
    ],
    external: id => /lodash/.test(id) || Object.keys(peerDependencies).includes(id),
};
