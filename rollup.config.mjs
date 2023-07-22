import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import filesize from 'rollup-plugin-filesize';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      filesize(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/types/index.d.ts', format: 'esm' }],
    plugins: [
      dts()
    ],
  },
];
