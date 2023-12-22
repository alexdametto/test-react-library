import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import tailwindcss from 'tailwindcss';

const tailwindConfig = require('./tailwind.config.js');

const packageJson = require('./package.json');

const config = {
  input: 'src/lib.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    resolve({extensions: ['.js', '.jsx']}),
    babel({
      babelHelpers: 'bundled',
      presets: [['@babel/preset-react', {"runtime": "automatic"}]],
      extensions: ['.js', '.jsx']
   }),
    commonjs(),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
      plugins: [tailwindcss(tailwindConfig)],
    })
  ],
};

export default config;