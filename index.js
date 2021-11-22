import discord, {Intents} from 'discord.js';
import dotenv from 'dotenv';
dotenv.config()

const client = new discord.Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES ]
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
})

client.login(process.env.DISCORD_TOKEN);