const chalk = require('chalk');

const loadModules = () => {
  const modules = ['core', 'voiceLock', 'stealth', 'killSwitch'];
  console.log(chalk.blue('🔧 Initializing modules:'));
  modules.forEach((mod, i) => {
    console.log(chalk.cyan(`  [${i + 1}] ${mod} loaded`));
  });
};

const logModuleLoad = (name) => {
  console.log(chalk.gray(`✅ Module '${name}' loaded.`));
};

module.exports = {
  loadModules,
  logModuleLoad
};
