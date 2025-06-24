const chalk = require('chalk');

function initKillSwitch(client, message) {
  if (message.body.toLowerCase() === 'shutdown omega') {
    client.sendText(message.from, '☠️ WizzyBotΩ shutting down...');
    console.log(chalk.red('💀 KillSwitch activated. Terminating process.'));
    process.exit(0);
  }
}

module.exports = {
  initKillSwitch
};
