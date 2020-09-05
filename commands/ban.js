const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: 'ban',
    description: 'An administrator/Mod tool, used to ban misbehaving people',
    usage:'!ban',
    aliases: []
}

module.exports.run = async (client, message, args) => {
if (message.member.hasPermission('BAN_MEMBERS')) {
    let MemberMessage = message.mentions.members.first();
    
    let bannedMessage = [`Bye Bye ${MemberMessage}!!, Don't let the door hit you on the way out!`,`***BAN HAMMER NOISES***`,`Gottem`,`Haha byeeeee`]
    let bannedMessage1 = Math.floor(Math.random() * bannedMessage.length)
    MemberMessage.ban();
    message.channel.send(bannedMessage[bannedMessage1]);
    
}
else
{
    let bReply = [`Sorry, ${message.author}, you can't do that`,`Whoops! looks like you can't do that one ${message.author}`,`Lol nope`,`Why don't you make me. :angry:`,`No, ${message.author}, I don't think I will.`]
    let bReply1 = Math.floor(Math.random() * kickReply.length)
    message.channel.send(bReply[bReply1]);
}
}
