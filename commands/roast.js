const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: 'roast',
    description: 'a command to roast your friends',
    usage: '!roast',
    aliases: []
}


module.exports.run = async (client, message, args) => {
    let target = message.mentions.users.first()


    let roastOne = [`did your mother smoke during the pregnancy??`, `i can smell you through the computer, and i **am** a computer`, `go outside`, `who asked you?`, `if i wanted to kill myself i would've talked to you already`, 
    `this is the next stupidest conversation i've ever had, next to the one with your mother last night`, `you're almost as full of shit as big corporations during pride month`, `clearly your self esteem couldn't be lower if al-qaeda flew two planes into it`,
    `are you this stupid or do you just look it`, `no way you look like that bruh`, `did you get that haircut from a chainsaw killer or are you blind?`, `shut fuck dumbass`]
    let roastTwo = Math.floor(Math.random() * roastOne.length)

    message.channel.send("<@" + target + ">" + " " + roastOne[roastTwo])
    
}