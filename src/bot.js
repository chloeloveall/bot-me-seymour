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

// logs in the bot
client.login(process.env.DISCORDJS_BOT_TOKEN);
