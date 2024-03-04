require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require ('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

let status = [
    {
        name: 'Your mom masturbate',
        type: ActivityType.Watching,
    },
    {
        name: 'Your dad cum',
        type: ActivityType.Listening,
    },
]

client.on('ready', (c) => { 
    console.log(`${c.user.tag} is online`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random])
    }, 10000);
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if( interaction.commandName === 'ping') {
        interaction.reply('pong!');
    }
    if( interaction.commandName === 'toke') {
        interaction.reply('Timer set for 5 minutes. Get ready!');
    }
    if( interaction.commandName === 'toke-time') {
        const num = interaction.options.get('interval').value;
        interaction.reply(`Timer set for ${num} minutes. Get ready!`);
    }
});

client.login(process.env.TOKEN);