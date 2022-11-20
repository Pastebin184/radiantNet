import { Client } from "./Api/index.js"
import { config } from "./globalVars.js"
import { checkCommandCooldown } from "./utils.js"

const client = new Client({ command: { enabled: config.commandPrefix } })

client.on("Chat", (data) => {
    data.cancel()
    client.world.broadcast(`§l§8[§r${data.player.getTags().find(tag => tag.startsWith("rank:")) ? data.player.getTags().filter(tag => tag.startsWith('rank:')).map(tag => tag.slice(5)).join('§l§8] [§r') : "§6Member"}§l§8]§r ${data.player.getName()}: ${data.message}`)
})

client.commands.create({
    name: "spawn",
    description: "Go to spawn"
}, ({ player }) => {
    if (checkCommandCooldown("spawn", player)) return
    player.runCommandAsync("tp @s 86 65 91")
})