const Dicord = require('discord.js');

const client = new Dicord.Client();

const prefix = '-';



client.once('ready', ()=>{
    console.log('Gordonbot is online');
    console.log('Waiting for messages ...');

})

client.on('message', message =>{
        if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'ping'){
            message.channel.send('pong');
            console.log('sent through a reply');
        }

        else if(command === 'hello'){
            message.channel.send('sup bro');
        }
});

// add token key below
client.login('');