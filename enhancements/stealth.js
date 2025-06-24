const chalk = require('chalk');

function initStealth(client, message) {
  const lower = message.body.toLowerCase();

  const stealthTriggers = [
    'where are you',
    'are you a bot',
    'who created you',
    'what is wizzybot'
  ];

  if (stealthTriggers.some(trigger => lower.includes(trigger))) {
    client.sendText(message.from, '🤖 I’m just a friendly assistant 😇');
    console.log(chalk.magenta(`🕶️ Stealth reply triggered for: "${message.body}"`));
  }
}

function initVoiceLock(client, message) {
  if (message.body.toLowerCase().includes('voice lock')) {
    client.sendText(message.from, '🔒 VoiceLock engaged. Say the passphrase.');
    console.log(chalk.yellow('🛑 VoiceLock triggered'));
  }
}

function initKillSwitch(client, message) {
  if (message.body.toLowerCase() === 'shutdown omega') {
    client.sendText(message.from, '💤 Omega shutting down...');
    console.log(chalk.red('☠️ KillSwitch activated! Terminating...'));
    process.exit(0);
  }
}

module.exports = {
  initStealth,
  initVoiceLock,
  initKillSwitch
};
