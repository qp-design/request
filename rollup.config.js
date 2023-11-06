import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
// import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'request-index',
      file: 'dist/index.js',
    }
  ],
  external: ['lodash-es', 'qs', '@brushes/utils', 'flyio/src/adapter/wx', 'flyio/dist/npm/engine-wrapper', 'flyio/dist/npm/fly'],
  plugins: [
    // commonjs({
    //   exclude: 'node_modules/**',
    //   include: ['src/**/*.ts', 'src/**/*.tsx'],
    //   transformMixedEsModules: true
    // }),
    ts({}),
    terser(),
  ]
};
