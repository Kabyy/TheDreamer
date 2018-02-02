// VARIABLES

var Discord = require ("discord.js");
var bot = new Discord.Client();




bot.login("NDA4NTkyNzA4MjA3MTE2Mjg5.DVSTYA.gSZr8CsFl9YobwIQptia9f52Sig");



bot.on("ready", function()
{
  console.log("Bot en ligne");
  bot.user.setPresence({ game: { name: 'Codez vos rêves...', type: 0} })
});



bot.on('message', (message) =>  {

  if (message.content == 'Bonjour') {
    // message.reply('Bonjour.');
      message.channel.sendMessage('Hey ! ;)');

    }

      if (message.content == 'Quels sont les grades disbonibles ?') {
        message.channel.sendMessage('Les grades disbonibles sont ceci :');

       }
       if (!message.content.startsWith(prefix)) return;
       var args = message.content.substring(prefix.length).split('');

       switch (args[0].toLowerCase()){

        case "newstory";
        var value = message.content.substr(10);
        var author = message.author.id;
        console.log(value);
        message.reply('Ajout à la base de données')

        db.get('histoires')
            .push({ id: number +1, story_value: value, story_author: author});
            .write();

        break;
      


       }
});
