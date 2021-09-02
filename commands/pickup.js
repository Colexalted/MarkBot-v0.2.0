const {Client, Collection, MessageEmbed} = require('discord.js');
const fs = require('fs');


module.exports.config = {
    name: 'pickup',
    description: 'a command to recite a pickup line',
    usage: '!pickup',
    aliases: []
}

module.exports.run = async (client, message, args) => {
    let target = message.mentions.users.first()

    


    let joe = ["You’re so hot, my zipper is falling for you.", "I’m on top of things. Would you like to be one of them?", "I’m not into watching sunsets, but I’d love to see you go down.", "Your outfit would look great on my bedroom floor.", "I lost my keys… can I check your pants?",  "Are you my homework? Because I’m not doing you, but I definitely should be.", "If you were a flower, you’d be a damn-delion.","Is that a mirror in your pants because I can see myself in them.", "If you look that good in clothes, you must look even better out of them.", "Are you lightning McQueen, cuz you give me a rock hard boner", "Are you google because you're everything I'm searching for."]
    
    let pickup2 = Math.floor(Math.random() * joe.length)

    
    message.channel.send("<@" + target + ">" + " " + joe[pickup2])
    
    
    }
