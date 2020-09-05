const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
name: 'clear',
description: 'A command that purges old messages',
usage: '!clear',
aliases: []

}

module.exports.run = async (client, message, args) => {
if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    return message.reply("Sorry, you aren't allowed to delete messages other than your own")
}

if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
    return message.reply("Bro, you need an actual number over zero. How am I supposed to delete a message that isn't there?").then(message => {
        message.delete({ timeout: 1000 })
      })
    }



let deleteAmount;

if(parseInt(args[0]) > 100) {
    deleteAmount = 100
}else{
    deleteAmount = parseInt(args[0]);
}

message.channel.bulkDelete(deleteAmount, true)
 .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages` ))
 .catch(err => message.reply(`Something went wrong... ${err}`));
}