import {defineConfig} from 'rolldown';
export const config = {
  input: 'packages/index.ts',
  output: {
    name: 'solar',
    sourcemap: true,
    minify: true,
    dir: 'dist-rolldown/umd',
    format: 'umd',
  },
}
export default defineConfig(config);
