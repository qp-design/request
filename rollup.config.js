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
  external: ['@tarojs/taro', 'lodash-es', 'qs', '@brushes/utils', 'flyio/dist/npm/wx', 'flyio/dist/npm/fly'],
  plugins: [
    ts({}),
    terser(),
  ]
};
