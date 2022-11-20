import { Client } from "./Api/index.js"

const client = new Client({ command: { enabled: true } })

client.on("Chat", (data) => {
    data.cancel()
    client.world.broadcast(`§l§8[§r${data.player.getTags().find(tag => tag.startsWith("rank:")) ? data.player.getTags().filter(tag => tag.startsWith('rank:')).map(tag => tag.slice(5)).join('§l§8] [§r') : "§6Member"}§l§8]§r ${data.player.getName()}: ${data.message}`)
})

client.commands.create({
    name: "spawn",
    description: "Go to spawn"
}, ({ player }) => {
    player.runCommandAsync("tp @s 86 65 91")
})