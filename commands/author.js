const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: 'Author',
    description:'A special little command, which mentions the creator of this bot; yours truly!',
    usage: 'Author',
    aliases: []

}

module.exports.run = async (client, message, args) => {
const authorMessage = new MessageEmbed()
    .setAuthor('ItsCob')
    .setTitle('A message, from me, to you.')
    .setDescription('I, ItsCob, have a dream, which I believe to be just. I wanted to make a discord bot, \n one that anyone could use, and could do anything. And here, I have achieved that dream. \n Thank you to those who support me by using the bot, and thank you to the internet, for teaching me entirely how to make it.')
    .setColor('#e81f10')
    .setTimestamp(Date.now())
    
    .setFooter('Love you guys!\n --ItsCob')

message.channel.send(authorMessage);
}