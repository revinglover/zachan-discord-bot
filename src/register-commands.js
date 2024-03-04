require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: "Test ping.",
    },
    {
        name: 'toke',
        description: "Starts the E-toke timer after default time",
    },
    {
        name: 'pause',
        description: "Pause the active E-toke timer",
    },
    {
        name: 'join',
        description: "Joins an active E-toke session",
    },
    {
        name: 'ready',
        description: "Did you remember to ready up Stoner?",
    },
    {
        name: 'toke-time',
        description: "Starts E-toke timer after provided time.",
        options: [
            {
                name: 'interval',
                description: 'How long before the E-toke starts.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Slash commands registered');
    } catch (error) {
     console.log(`There was an: ${error}`);
    }
})();