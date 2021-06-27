const prefix = '!'

const {Client, Collection, MessageEmbed, Message, ClientUser} = require('discord.js');

const client = new Client();

const fs = require('fs');
const { basename } = require('path');
client.commands = new Collection()
client.aliases = new Collection();



//COMMAND HANDLER
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === 'js')
    if (jsfile.length <= 0) {
        return console.log("I could not find the commands!");
    }

    jsfile.forEach((file, i) => {
        let pullcmd = require(`./commands/${file}`)
        client.commands.set(pullcmd.config.name, pullcmd)
        pullcmd.config.aliases.forEach(alias => {
            client.aliases.set(alias, pullcmd.config.name)
        })
    })
})



// THIS IS THE COMMAND HANDLER EXECUTOR
client.on("message", async message => {

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)

    if (!message.content.startsWith(prefix)) return;
    const commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if (commandFile) commandFile.run(client, message, args)

})


client.on('ready', () => {
    console.log('ready boss');
    
});

//DM RESPONDER
client.on('message', async message => {
if(message.channel.type === 'dm') {
if (!message.author.bot){
 message.channel.send("Sorry, I don't work with dm's. Try me in a server text channel.");
        }
    }
})








client.login("NzM5OTE4MTk4OTU4MzI1OTAy.XyhchQ.30ddq1vVr94jVDhrNFi7NkqmXzQ");

