import {config as com} from './rolldown.com.js';
import {config as esm} from './rolldown.esm.js';
import {config as umd} from './rolldown.umd.js';
import {defineConfig} from 'rolldown';
const configs = [com, esm, umd]
export default defineConfig(configs);