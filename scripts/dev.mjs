import { spawn } from 'cross-spawn'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import minimist from 'minimist';
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const args = minimist(process.argv.slice(2))
const packagesPath = path.resolve(__dirname, '../packages')
const configPath = path.resolve(__dirname, 'dev-rolldown.mjs')
spawn('node',[`--watch-path=${packagesPath}`, configPath , process.argv.slice(2)], {stdio: 'inherit'})
