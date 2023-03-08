const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content === '!give-roles') { // or any other command you want
    const rolesToGive = ['Put Roles ID']; // Replace with the role IDs you want to give
    const guild = client.guilds.cache.get('Server ID'); // Replace with your server's ID
    const members = await guild.members.fetch();

    let count = 0;

    members.forEach(async member => {
      const hasRoles = member.roles.cache.some(role => rolesToGive.includes(role.id));
      if (!hasRoles) {
        const rolesToAdd = rolesToGive.map(roleId => guild.roles.cache.get(roleId));
        await member.roles.add(rolesToAdd);
        console.log(`Added roles to ${member.user.tag} (${member.id})`);
        count++;
      }
    });

    console.log(`Added roles to ${count} members.`);
    message.reply(`Roles have been given to ${count} members.`);
  }
});

client.login('UR DISCORD BOT PUT');