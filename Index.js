const { loadModules } = require('./utils/moduleLoader');
const core = require('./src/core');

console.log('🧠 WizzyBotΩ is booting...');
loadModules();
core.start();
