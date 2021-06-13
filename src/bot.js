require('dotenv').config();

// Client is the class that allows us to interact with the Discord API
const { Client } = require('discord.js');

// creates an instance of Client class
const client = new Client();
const PREFIX = '$';

// callback function parameter is how we handle the event
client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME === 'kick') {
      if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply('You do not have permission to use that command');
      if (args.length === 0) return message.reply('Please provide an ID');
      const member = message.guild.members.cache.get(args[0]);

      if (member) {
        member
          .kick()
          .then((member) => message.channel.send(`${member} was kicked`))
          .catch((err) =>
            message.channel.send('I do not have permission to do that')
          );
      } else {
        message.channel.send('That member was not found');
      }
    } 
  }
});

// logs in the bot
client.login(process.env.DISCORDJS_BOT_TOKEN);
