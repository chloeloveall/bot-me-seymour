require('dotenv').config();

// Client is the class that allows us to interact with the Discord API
const { Client, WebhookClient } = require('discord.js');

// creates an instance of Client class
const client = new Client({
  partials: ['MESSAGE', 'REACTION'],
});

const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN
);

const PREFIX = '$';

// callback function parameter is how we handle the event
client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
  const randomNum = Math.floor(Math.random() * facts.length);
  
  const images = [
    "https://source.unsplash.com/random/?houseplant",
    "https://source.unsplash.com/random/?houseplants",
    "https://source.unsplash.com/random/?plants",
    "https://source.unsplash.com/random/?succulent",
    "https://source.unsplash.com/random/?philodendron",
    "https://source.unsplash.com/random/?forest",
    "https://source.unsplash.com/random/?tree",
    "https://source.unsplash.com/random/?trees",
    "https://source.unsplash.com/random/?cactus",
    "https://source.unsplash.com/random/?succulents",
    "https://source.unsplash.com/random/?succulent",
  ];

  const facts = [
    'Plant are pretty fuckin cool.',
    'Most carnivorous plants are found in areas with low soil nutrition.',
    'Most plants are cooler than your boyfriend.',
    "Ginkgo (Ginkgo biloba) is one of the oldest living tree species, it dates back to about 250 million years. That's really fuckin old",
    'During the 1600s, tulips were so valuable in Holland that their bulbs were worth more than gold. The craze was called tulip mania and caused the crash of the Dutch economy.',
    'Oak trees don’t produce acorns until they are 50 years old.',
    'Sundews have tentacles all over their leaves that adhere to insects that land on them. As soon as an insect lands, its movement will trigger other tentacles to close up around it, suffocating it to death. The plant then digests the bug slowly over time.',
    'In their natural habitat, Monstera deliciosa can grow to over 65 feet tall!',
    'Around 2000 different types of plants are used by humans to make food.',
    'Bamboo is the fastest-growing woody plant in the world; it can grow 35 inches in a single day.',
    '85% of plant life is found in the ocean.',
    'You should buy another plant today',
    ' Indoor plants at work positively affect our brains by nurturing creativity and building memory retention by as much as 20 percent.',
    'Stress relief can be achieved with chemicals in freshly-cut grass.',
    'Dandelion is completely edible, from the petals to the roots.',
    'Trees are the longest-living organisms on earth.',
    'Let go of the plant that the world has told you to be and embrace the plant that you are.',
    'The smell of freshly-cut grass is actually a plant distress call.',
    'Plants dislike human noise. So shut the fuck up.',
    'A flower is the reproductive part of a flowering plant.',
    'If your houseplant is dying it is probably your fault.',
    'Pitcher plants have leaves that are hollow and filled with water and digestive acids. Any insects or prey that fall in drown to death and are slowly digested over time.',
    'Scientists were able to revive a flowering plant from the fossilized fruit found in the stomach of an Arctic ground squirrel who was trapped in ice around 32,000 years ago.',
    'Marijuana and hops are from the same plant family: Cannabaceae. But broccoli, broccolini, and broccoli rabe are not.',
    'Mustard and wasabi aren’t spicy until they are crushed. When the plant’s cells are damaged, two otherwise harmless components mix and produce allyl isothiocyanate, the compound responsible for the familiar pungent taste.',
    'When some plants are being eaten by caterpillars, they send chemical signals to parasitic wasps who swarm and attack the caterpillars.',
    'Plants are never late because time is made up.',
    'Some flowering plants use fragrances to attract insects and animals, while others use them to keep them away.',
    'Venus Fly Traps use a “snap trap” to capture their prey.',
    'Flowers can come in virtually any color, with the exception of true black and emerald green.',
    'Plant very rarely show up for meetings.',
    'Most common houseplants came from the tropics',
    'Peace lilies absorb electromagnetic radiation emitted by computers and printers and keep the air moisturised.',
    'Growing plants indoors began in ancient times',
    'Very few plants have ever been caught doing crimes.',
    'There are more than 80,000 species of edible plants.',
    '90 percent of the foods humans eat come from just 30 plants.',
    '70,000 plant species are utilized for medicine.',
    '68 percent of plants are in danger of going extinct.',
    'Soulmates exist and they are plants.',
    'Grass plants make up 26% of all plant life on earth.',
    'A study by NASA concluded that indoor plants help to purify the air by removing volatile compounds, including carbon dioxide.',
    'The world’s largest individual flower is the rafflesia (Rafflesia arnoldii). It can grow to be 3.3 ft in diameter and can weigh up to 24 lbs.',
    'A 2,500 square foot lawn produces enough oxygen for a family of 4.',
    'A study investigating human responses to vegetation and landscapes revealed that viewing nature – as opposed to urban scenes –  has more positive influences on  our emotional and physiological states.',
    'The first wine grapes were cultivated some 8,000 years ago in Mesopotamia.',
    'The ghost orchid (Dendrophylax lindenii) of Florida and the Caribbean has no leaves. It carries on photosynthesis through its green aerial roots.',
    'The skunk cabbage (Symplocarpus foetidus) produces so much heat when it blooms in late winter that it melts the snow around it and raises its internal temperature to about 72 °F.',
    'Coastal redwoods or sequoia sempervirens can reach up to 379 feet (115 meters) and are the tallest living plant on the planet. ',
    'Apples, peaches, apricots, cherries, plums, strawberries and other berries are all part of the rose family.',
    'Tulips can continue to grow as much as an inch per day after being cut.',
    'Saffron is harvested from the stigmas of a type of fall-blooming crocus, Crocus sativus.',
    'A sunflower looks like one large flower, but each head is composed of hundreds of tiny flowers called florets, which ripen to become the seeds.',
    'There are more than 300,000 identified plant species.',
    'Most plants are fuckin terrible at mario kart',
    'Plant matter which settles down at the base of water bodies like swamps etc. can turn into coal through a process is known as metamorphosis.',
    'About 600 species of carnivorous plants eat small animals and insects too.',
    'If you do not like plants please go to therapy.',
    'A carnivorous plant in the Philippines is capable of devouring a full-grown rat alive.',
    'England’s Alnwick Garden has The Poison Garden that is filled with plants which can kill you.',
    'Plants are a lot like dogs except they probably won’t poop on your carpet.',
    'The Spotted Knapweed is an invasive species that can take over an area by making a chemical that prevents the seeds of other plants from growing.',
    'The wild tobacco plant not only recognizes different types of insects depending on their saliva, but it also changes how it defends itself depending on which insect is eating it.',
    'If you show your crush some plants they might hold your hand lovingly.',
    'Older Douglas Fir trees can transport their extra food to younger trees through mycelia, a type of fungus plants use to communicate and share resources with each other.',
  ];

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
    } else if (CMD_NAME === 'announce') {
      const msg = args.join(' ');
      webhookClient.send(msg);
    } else if (CMD_NAME === 'fact') {
      // const randomNum = Math.floor(Math.random() * facts.length);
      const fact = facts[randomNum];
      return message.channel.send(fact);
    } else if (CMD_NAME === 'pic') {
      let imgUrl = images[randomNum];
      const embed = {
        "image": {
          "url": imgUrl
        }
      };
      message.channel.send({ embed });
    }
  }
});

// new event to listen for adding roles
client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (
    reaction.message.id === '853483986936135703' ||
    reaction.message.id === '856358583523475456'
  ) {
    switch (name) {
      case '🌨️':
        member.roles.add('853482490605862962');
        member.roles.add('856359000709791745');
        break;
      case '☀️':
        member.roles.add('853482497644167190');
        member.roles.add('856358926521991168');
        break;
      case '🌱':
        member.roles.add('853483664511205435');
        member.roles.add('856358851175120926');
        break;
      case '🍂':
        member.roles.add('853483772154871819');
        member.roles.add('856358962298486845');
        break;
    }
  }
});

// new event to listen for removing roles
client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (
    reaction.message.id === '853483986936135703' ||
    reaction.message.id === '856358583523475456'
  ) {
    switch (name) {
      case '🌨️':
        member.roles.remove('853482490605862962');
        member.roles.remove('856359000709791745');
        break;
      case '☀️':
        member.roles.remove('853482497644167190');
        member.roles.remove('856358926521991168');
        break;
      case '🌱':
        member.roles.remove('853483664511205435');
        member.roles.remove('856358851175120926');
        break;
      case '🍂':
        member.roles.remove('853483772154871819');
        member.roles.remove('856358962298486845');
        break;
    }
  }
});

// logs in the bot
client.login(process.env.DISCORDJS_BOT_TOKEN);
