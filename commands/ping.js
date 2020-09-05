const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: 'ping',
    description: 'a simple ping command',
    usage: '!ping',
    aliases: []
}


module.exports.run = async (client, message, args) => {
    message.reply('pong')
    
}