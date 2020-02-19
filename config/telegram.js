require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(TOKEN);


const url = process.env.APP_URL;
const port = process.env.PORT;


bot.on('message', msg => {
    const user = msg.from;

    bot.sendMessage(msg.chat.id, user.first_name+' '+user.last_name);
});


// bot.setWebHook(`${url}/bot${TOKEN}`);
module.exports = {
    TOKEN, bot
}
