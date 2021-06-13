require('dotenv').config();

// Client is the class that allows us to interact with the Discord API
const { Client, WebhookClient } = require('discord.js');

// creates an instance of Client class
const client = new Client({
  partials: ['MESSAGE', 'REACTION'],
});

const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN,
);

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
    } else if (CMD_NAME === 'ban') {
      if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply('You do not have permission to use that command');
      if (args.length === 0) return message.reply('Please provide an ID');
      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send('User was banned successfully.');
      } catch (err) {
        message.channel.send(
          'An error occurred. Either I do not have permissions or the user was not found.'
        );
      }
    }
  }
});

// new event to listen for adding roles
client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '853483986936135703') {
    switch (name) {
      case '🌨️':
        member.roles.add('853482490605862962');
        break;
      case '☀️':
        member.roles.add('853482497644167190');
        break;
      case '🌱':
        member.roles.add('853483664511205435');
        break;
      case '🍂':
        member.roles.add('853483772154871819');
        break;
    }
  }
});

// new event to listen for removing roles
client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '853483986936135703') {
    switch (name) {
      case '🌨️':
        member.roles.remove('853482490605862962');
        break;
      case '☀️':
        member.roles.remove('853482497644167190');
        break;
      case '🌱':
        member.roles.remove('853483664511205435');
        break;
      case '🍂':
        member.roles.remove('853483772154871819');
        break;
    }
  }
});

// logs in the bot
client.login(process.env.DISCORDJS_BOT_TOKEN);
