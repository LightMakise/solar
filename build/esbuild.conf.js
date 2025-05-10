import { build } from 'esbuild';
import { spawn } from 'cross-spawn'
// 通用配置
const baseConfig = {
  entryPoints: ['packages/index.ts'],
  bundle: true,
  platform: 'neutral',        // 跨平台兼容
  plugins: [],
  sourcemap: false, // 生成sourcemap
  minify: true,     // 压缩代码
  treeShaking: true 
};

// ESM 格式输出（按需加载支持）
build({
  ...baseConfig,
  format: 'esm',
  outfile: 'dist/solar.esm.js',
  entryNames: '[dir]/[name]'  // 保持目录结构
}).then((v) => {
  spawn('tsc', { stdio: 'inherit' })
  spawn('api-extractor', ['run'], { stdio: 'inherit' })
});
