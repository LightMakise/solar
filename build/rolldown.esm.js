import {defineConfig} from 'rolldown';
import {dts} from 'rolldown-plugin-dts';
export const config = {
  input: 'packages/index.ts',
  plugins: [dts()],
  output: {
    sourcemap: true,
    minify: true,
    dir: 'dist-rolldown',
    format: 'esm',
  },
}
export default defineConfig([config]);
