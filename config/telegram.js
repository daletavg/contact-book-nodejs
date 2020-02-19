require('dotenv').config();
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(TOKEN);

const url = process.env.APP_URL;
const port = process.env.PORT;
// bot.setWebHook(`${url}/bot${TOKEN}`);



// Just to ping!
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'I am alive!');
});
module.exports = {
    TOKEN, bot
}
