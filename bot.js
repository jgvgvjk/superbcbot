const Discord = require('discord.js');
const client = new Discord.Client();



client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('---premiumbc')){
 if(!message.author.id === '411911292643704854') return;
message.channel.sendMessage(' جار ارسال الرسالة | ✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});










client.login(process.env.BOT_TOKEN)
