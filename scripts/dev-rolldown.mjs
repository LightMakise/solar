import { fileURLToPath } from 'node:url'
import { build } from 'rolldown';
// import path from 'node:path'
import minimist from 'minimist';
import { config as esmConfig } from '../build/rolldown.esm.js';
// const __dirname = path.dirname(fileURLToPath(import.meta.url))
const args = minimist(process.argv.slice(2))
const mode = args.mode || 'esm';
if (mode === 'esm') {
    await build(esmConfig)
    const date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()} esm build done`)
}