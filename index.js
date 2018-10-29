const Commando = require("discord.js-commando");
const bot = new Commando.Client();

bot.registry.registerGroup("simple", "Simple");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("message", function(message){
    if(message.content == "kanna")
    {
        message.reply("I am here to help!");
    }
});

bot.on("ready", function(){
    console.log("Ready");
})

global.servers = {};

bot.login(process.env.BOT_TOKEN);
