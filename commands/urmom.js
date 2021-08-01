const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: 'yomama',
    description: 'a command to tell shitty your mom jokes',
    usage: '!yomama',
    aliases: []
}


module.exports.run = async (client, message, args) => {
    let target = message.mentions.users.first()


    let urmom = ["Yo mama's so fat, when she skips a meal, the stock market drops.", "Yo mama's so fat, her car has stretch marks.", "Yo mama's so stupid, she put airbags on her computer in case it crashed.", "Yo mama's so stupid, she got locked in the grocery store and starved to death.", "Yo mama's teeth are so yellow when she smiles at traffic, it slows down.","Yo mama's so poor, the ducks throw bread at her." ]
    let urmom1 = Math.floor(Math.random() * urmom.length)

    message.channel.send("<@" + target + ">" + " " + urmom[urmom1])
    
}