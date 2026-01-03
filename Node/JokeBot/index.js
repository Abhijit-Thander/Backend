require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

let bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// bot.on("message", (option) => {
//   console.log("Message Received", option);
//   bot.sendMessage(
//     option.chat.id,
//     "Hello! You are Diya Right??🤭🤭🤭🤭🤭. Ato voi kothai lukia rakho kothai??"
//   );
// });

bot.onText(/\/joke/, async (option) => {
  const res = await axios.get(
    "http://www.official-joke-api.appspot.com/random_joke"
  );

  const setup = res.data.setup;
  const punchline = res.data.punchline;

  bot.sendMessage(option.chat.id, setup + " , " + punchline);
});
