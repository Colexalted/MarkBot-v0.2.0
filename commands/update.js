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
    .setTitle('Newest MarkBot™ Update')
    .setDescription('All my newest updates!')
    .setColor('#b70ee6')
    .setTimestamp(Date.now())
    .addFields(
    { name: "Update MarkBot-v0.2.2,  Command Update, v2!", value: "A small update to my command list! New commands are: !pickup. !pickup is in beta still, with more responses coming soon! Check !help if you have any questions regarding the new commands!" },
    )
    .setFooter('Thats all folks! Stay tuned for more updates coming soon!')
        message.channel.send(helpEmbed);
}
