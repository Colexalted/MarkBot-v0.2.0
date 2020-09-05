const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: 'kick',
    description: 'An administrator/Mod tool, used to kick misbehaving people',
    usage:'!kick',
    aliases: []
}

module.exports.run = async (client, message, args) => {
if (message.member.hasPermission('KICK_MEMBERS')) {
    let MemberMessage = message.mentions.members.first();
    MemberMessage.kick();
    message.channel.send('See Ya Later!')
}
else
{
    let kickReply = [`Sorry, ${message.author}, you can't do that`,`Whoops! looks like you can't do that one ${message.author}`,`Lol nope`,`Why don't you make me. :angry:`,`No, ${message.author}, I don't think I will.`,]
    let kickReply1 = Math.floor(Math.random() * kickReply.length)
    message.channel.send(kickReply[kickReply1]);
}
}
