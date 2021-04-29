const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ['MESSAGE', 'USER', 'REACTION'],
	ws: {intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']}
})
const {token} = require('../config.json')
const fs = require('fs')

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
    
	client.commands = new Discord.Collection
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
	for (const file of commandFiles) {
		const command = require(`../commands/${file}`)
		client.commands.set(command.name, command)
	}
})

client.login(token).catch(err => console.error(err))

// client.on('debug', console.log)
module.exports = client