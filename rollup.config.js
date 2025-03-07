import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'request-index',
      file: 'dist/index.js',
    }
  ],
  external: ['lodash-es', 'qs', 'flyio/src/adapter/wx', 'flyio/dist/npm/engine-wrapper', 'flyio/dist/npm/fly'],
  plugins: [
    ts({}),
    terser()
  ]
};
