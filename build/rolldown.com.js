import {defineConfig} from 'rolldown';
export const config = {
  input: 'packages/index.ts',
  output: {
    sourcemap: true,
    minify: true,
    dir: 'dist-rolldown/commonjs',
    format: 'commonjs',
  },
}
export default defineConfig(config);
