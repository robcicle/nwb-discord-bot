import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Fuck around and find out pussy',

    slash: "both",
    testOnly: true,

    callback: ({ message, interaction }) => {
        return 'Pong'
    },
} as ICommand