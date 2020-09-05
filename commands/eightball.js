const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: '8ball',
    description: 'A fun 8ball command',
    usage: '!8ball',
    aliases: []
}

module.exports.run = async (client, message, args) => {
let eightball = ['Yes', 'No', 'Maybe', "I'm not sure, ask again later"]
let eightball1 = Math.floor(Math.random() * eightball.length)
message.channel.send(eightball[eightball1])

}