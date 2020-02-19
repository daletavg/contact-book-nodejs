require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(TOKEN);


const url = process.env.APP_URL;
const port = process.env.PORT;


bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'msg.chat.toString()');
});


// bot.setWebHook(`${url}/bot${TOKEN}`);
module.exports = {
    TOKEN, bot
}
