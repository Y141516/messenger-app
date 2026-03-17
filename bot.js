const TelegramBot = require('node-telegram-bot-api')

const token = "8345855183:AAHHAtau8ADTX4mrg68JSeH7OHDwv-xiHc0"

const bot = new TelegramBot(token, { polling: true })

console.log("Bot is running...")

bot.onText(/\/start/, (msg) => {
  console.log("Received /start from:", msg.chat.id)

  bot.sendMessage(msg.chat.id, 'Open Messenger App 👇', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open App 🚀',
            web_app: {
              url: 'https://messenger-app-ruddy.vercel.app'
            }
          }
        ]
      ]
    }
  })
})