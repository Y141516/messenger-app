const TelegramBot = require('node-telegram-bot-api')

const token = "8345855183:AAHHAtau8ADTX4mrg68JSeH7OHDwv-xiHc0"

const bot = new TelegramBot(token, { polling: true })

console.log("Bot running...")

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Click below to open app 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Open Messenger",
            web_app: { url: "https://messenger-app-ruddy.vercel.app/" }
          }
        ]
      ]
    }
  })
})