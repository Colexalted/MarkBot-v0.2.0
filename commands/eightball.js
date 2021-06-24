const {Client, Collection, MessageEmbed} = require('discord.js');

module.exports.config = {
    name: '8ball',
    description: 'A fun 8ball command',
    usage: '!8ball',
    aliases: []
}

module.exports.run = async (client, message, args) => {
let eightball = ['Yes', 'No', 'Maybe', "I'm not sure, ask again later", "Sorry homie, thats classified :wink:", "If you think so...", "Just a tad", "You don't want to know.", "Nah", "I don't wanna tell you :angry:", "Sure", "I dont see why not", "probably", "There's not a doubt in my mind"]
let eightball1 = Math.floor(Math.random() * eightball.length)
message.channel.send(eightball[eightball1])

//Commented out the below code because it isn't working yet... ;-;



/*
channel.messages.fetch({ limit: 2 }).then(bruh=> {
    
let lastMessage = bruh.first()
let sentBefore = bruh.last()

  
if(!lastMessage.author.client)
{
        if(lastMessage.author = sentBefore.author)
        {
        
            if(lastMessage.content == sentBefore.content) 
            {
             message.channel.send("stop asking bro")
            }
        }
        
 }

})   )
*/






}    
