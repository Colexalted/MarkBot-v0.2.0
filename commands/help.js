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

        { name: 'Kick', value: 'A very useful kick command, made specially for admins and mods. To use this command, type !kick, and then the server members mention.' },

        { name: 'Ban', value: 'A very useful ban command, made specially for admins and mods. To use this command, type !ban, and then the server members mention.' },

        { name: '8ball', value: 'A fun 8ball command. AMA! To use this, type !8ball, and then your question.' },

        { name: 'Meme', value: 'A command that sends a random meme. To use, type !meme' },

        { name: 'Clear', value: 'A command that clears the amount of specified messages. To use, type !clear, and then the amound of messages you would like deleted.' },

        { name:'Cute', value: 'A command that shows a random cute image! To use, type !cute' },
        
        { name:'Update', value: 'A command that diplays info on thenewest update! To use, type !update' },

        { name:'Nick', value: "A command that changes the nickname of the mentioned person! (Assuming you have correct permissions that is...) To use this command, type !nick, mention the person who's name you wish to change, and then the new name!" },

        { name:'Roast', value: 'A command to roast and insult the mentioned user. To use, type !roast and then mention the user you wish to insult!' },




    )
    
    .setFooter('Thats all folks! Stay tuned for more commands coming soon!')
        message.channel.send(helpEmbed);
    
    


    
}
