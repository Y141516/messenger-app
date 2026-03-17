// bot.js
const TelegramBot = require('node-telegram-bot-api');

// 1️⃣ Replace with your bot token from BotFather
const token = '8345855183:AAHHAtau8ADTX4mrg68JSeH7OHDwv-xiHc0';

// 2️⃣ Create the bot with polling
const bot = new TelegramBot(token, { polling: true });

console.log("Bot is running...");

// 3️⃣ Listen for /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Click below to open Messenger App 🚀", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Open Messenger",
            web_app: {
              url: "https://messenger-app-ruddy.vercel.app/"
            }
          }
        ]
      ]
    }
  });
});

// Optional: log any messages for debugging
bot.on('message', (msg) => {
  console.log("Received message:", msg.text);
});