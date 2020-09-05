const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: 'help',
    description: 'A introduction/help command',
    usage: '!help',
    aliases: []
}

module.exports.run = async (client, message, args) => {
let helpEmbed = new MessageEmbed()
    .setAuthor(client.user.username)
    .setTitle('Help command list, by MarkBot™')
    .setDescription('Here are some commands... from me, to you! ;)')
    .setColor('#b70ee6')
    .setTimestamp(Date.now())
    .addFields(
        { name: 'Ping', value: 'A simple ping command. To use this, type !ping.' },

        { name: 'Kick', value: 'A very useful kick command, made specially for admins and mods. To use this command, type !kick.' },

        { name: 'Ban', value: 'A very useful ban command, made specially for admins and mods. To use this command, type !ban.' },

        { name: '8ball', value: 'A fun 8ball command. AMA! To use this, type !8ball' },





    )
    
    .setFooter('Thats all folks! Stay tuned for more commands coming soon!')
        message.channel.send(helpEmbed);
    
    


    
}