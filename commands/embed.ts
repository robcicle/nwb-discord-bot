import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed',

    slash: "both",
    testOnly: true,

    permissions: ['ADMINISTRATOR'],

    callback: async ({ message, text }) => {
        const json = JSON.parse(text)

        const embed = new MessageEmbed(json)

        return embed
        
        // const embed = new MessageEmbed()
        //     .setTitle("Sterling McQueen is a BITCH")
        //     .setDescription("Sterling McQueen is a bitch, and a humongous pussy, one of the worst gangbangers I have ever met. And I wouldn't use that term lightly.")
        //     .setColor('GREEN')
        //     .setAuthor('by Max "The Better Gangbanger" Wood')
        //     .setImage('https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d')
        //     .setFooter('Photo of the humongus pussy above')

        // const newMessage = await message.reply({
        //     embeds: [embed],
        // })

        // await new Promise(resolve => setTimeout(resolve, 5000))

        // const newEmbed = newMessage.embeds[0]
        // newEmbed.setTitle("**EDITED** " + embed.title)
            
        // newMessage.edit({
        //     embeds: [newEmbed],
        // })
    },
} as ICommand