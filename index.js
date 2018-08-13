const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Trivia using Uniscout!");

  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let UniLink = message.channel.send

    if(["how to use bot", "How to use bot", "How do i use the bot", "how do i use bot", "How do I use bot?"]) {
      message.channel.send("**To use the bot, sign up here https://uniscout.live/ and watch it during Game shows!**")
    };
  });
})
bot.login(process.env.NDc4NTM2NTkwNDY2MDg4OTY0.DlMHjw.Iqu4WaNdKgKLK1Ia08Nk0PLEleY);
