const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: 'update',
    description: 'An update command',
    usage: '!update',
    aliases: []
}



module.exports.run = async (client, message, args) =>
{
    let helpEmbed = new MessageEmbed()
    .setAuthor(client.user.username)
    .setTitle('Newest MarBot™ Update')
    .setDescription('All my newest updates!')
    .setColor('#b70ee6')
    .setTimestamp(Date.now())
    .addFields(
    { name: "Small !8ball Update', value: 'A small update to the '!8ball command', a few new phrases have been added. Check it out! " },
    )
    .setFooter('Thats all folks! Stay tuned for more updates coming soon!')
        message.channel.send(helpEmbed);
}
