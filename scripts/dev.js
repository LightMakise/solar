import { spawn } from 'cross-spawn'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packagesPath = path.resolve(__dirname, '../packages')
const esbuildConfigPath = path.resolve(__dirname, '../build/esbuild.conf.js')
const node_modules = path.resolve(__dirname, '../node_modules')
spawn('node', [`--watch-path=${packagesPath}`, esbuildConfigPath, '--trace-warnings'], { stdio: 'inherit' })