const { create, Client } = require('venom-bot');
const chalk = require('chalk');
const { initStealth, initKillSwitch, initVoiceLock } = require('../enhancements/stealth');
const { logModuleLoad } = require('../utils/moduleLoader');

const start = async () => {
  try {
    const client = await create({
      session: 'WizzyBotΩ',
      multidevice: true
    });

    console.log(chalk.green('🧠 WizzyBotΩ Connected!'));

    client.onMessage(async (message) => {
      if (message.body.toLowerCase() === 'ping') {
        client.sendText(message.from, 'pong 🧠');
      }

      // 🔐 VoiceLock Trigger
      if (message.body.toLowerCase().includes('voice lock')) {
        initVoiceLock(client, message);
      }

      // ☠️ Kill Switch
      if (message.body.toLowerCase() === 'shutdown omega') {
        initKillSwitch(client, message);
      }

      // 🥷 Stealth Response
      initStealth(client, message);
    });

    logModuleLoad('core.js');

  } catch (err) {
    console.error(chalk.red('🧨 Failed to launch WizzyBotΩ:'), err);
  }
};

module.exports = { start };
