const {Client, Collection, MessageEmbed, RoleManager} = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async (client, message, args) => {
const subReddits = ['dankmemes', 'memes']
const random = subReddits[Math.floor(Math.random() * subReddits.length)];
const img  = await randomPuppy(random);


const memeEmbed = new MessageEmbed()
.setImage(img)
.setTitle(`This meme is from r/${random}`)
.setURL(`https://reddit.com/${random}`)



message.channel.send(memeEmbed)
}


module.exports.config = {
    name: 'meme',
    description: 'An command that sends a random dank meme!',
    usage:'!meme',
    aliases: []
}
