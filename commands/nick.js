const {Client, Collection, MessageEmbed} = require('discord.js');
const { MessageManager } = require("discord.js")

module.exports.config = {
    name: 'nick',
    description: 'A command to change the nickname of a specified member',
    usage: '!nick',
    aliases: []
}

module.exports.run = async(client, message, args) => {
    if(message.member.hasPermission("MANAGE_NICKNAMES", "CHANGE_NICKNAME")) {
        let mentMem = message.mentions.users.first()
        let mem = message.guild.members.cache.get(mentMem.id)



        args.shift()
        let newName = args.join(' ')

        mem.setNickname(newName)
        message.reply("done!")


    }
    else
    {
        let noPerm1 = [`Sorry bro, no can do.`, `That's a no for me dawg.`, `How about no.`, `Nah.`]
        let noPerm2 = Math.floor(Math.random() * noPerm1.length)

        message.channel.send(noPerm1[noPerm2]);




    }

}
