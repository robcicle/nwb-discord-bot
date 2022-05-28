import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import 'dotenv/config'
import mongoose from 'mongoose'

import testSchema from './test-schema'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on('ready', async () => {
    // await mongoose.connect(process.env.MONGO_URI || '', {
    //     keepAlive: true,
    // })

    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['979497672081817710'],
        mongoUri: process.env.MONGO_URI,
    })

    setTimeout(async() => {
        await new testSchema({
            message: 'hello world!!'
        }).save()
    }, 1000);
})

client.login(process.env.TOKEN)