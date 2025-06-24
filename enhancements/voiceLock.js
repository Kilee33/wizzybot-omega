const chalk = require('chalk');

const authorizedVoices = ['omega prime', 'unlock wizzy', 'omega access'];

function initVoiceLock(client, message) {
  const passphrase = message.body.toLowerCase();

  if (authorizedVoices.includes(passphrase)) {
    client.sendText(message.from, '✅ VoiceLock overridden. Full access granted.');
    console.log(chalk.green('🔓 VoiceLock bypassed.'));
  } else {
    client.sendText(message.from, '🚫 Incorrect passphrase. Access denied.');
    console.log(chalk.red(`🔐 VoiceLock failed attempt: "${message.body}"`));
  }
}

module.exports = {
  initVoiceLock
};
