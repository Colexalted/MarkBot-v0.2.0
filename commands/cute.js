const {Client, Collection, MessageEmbed, RoleManager} = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async (client, message, args) => {
const subReddits = ['awww', 'dogs', 'cats']
const random = subReddits[Math.floor(Math.random() * subReddits.length)];
const img  = await randomPuppy(random);


const cuteEmbed = new MessageEmbed()
.setImage(img)
.setTitle(`This image is from r/${random}`)
.setURL(`https://reddit.com/${random}`)



message.channel.send(cuteEmbed)
}


module.exports.config = {
    name: 'cute',
    description: 'A command that sends a random cute photo!!',
    usage:'!meme',
    aliases: []
}
