import { Client, Item } from "./Api/index.js"
import { commandCooldowns, config, itemStats } from "./globalVars.js"
import { checkCommandCooldown } from "./utils.js"

const client = new Client({ command: { enabled: config.commandPrefix } })

client.on("Chat", (data) => {
    data.cancel()
    client.world.broadcast(`§l§8[§r${data.player.getTags().find(tag => tag.startsWith("rank:")) ? data.player.getTags().filter(tag => tag.startsWith('rank:')).map(tag => tag.slice(5)).join('§l§8] [§r') : "§6Member"}§l§8]§r ${data.player.getName()}: ${data.message}`)
})

client.on("PlayerJoin", (player) => {
    const log = player.getLog()
    for (const name in commandCooldowns) log.set(`${name}Cooldown`, 0)
})

client.on("Tick", () => {
    client.world.getAllPlayers().forEach(player => {
        const log = player.getLog()
        for (const name in commandCooldowns) {
            const val = log.get(`${name}Cooldown`)
            log.set(`${name}Cooldown`, val !== 0 ? val - 1 : 0)
        }
    })
})

// client.on("BlockBreak", (data) => {
//     const itemId = data.player.getDimension().getEntitiesAtLocation(block.location).filter(entity => entity.getId() === 'minecraft:item')[0]?.getComponent("item")?.itemStack?.typeId
//     if (!itemId) return
//     const stats = itemStats[itemId]
//     if (!stats) return
// })

client.commands.create({
    name: "spawn",
    description: "Go to spawn"
}, ({ player }) => {
    if (checkCommandCooldown("spawn", player)) return
    player.runCommandAsync("tp @s 86 65 91")
})

client.commands.create({
    name: "clearlag",
    description: "Clears items on the floor",
    permission: "staff"
}, ({ player }) => {
    if (checkCommandCooldown("clearlag", player)) return
    player.runCommandAsync("function commands/lagclear")
})

client.commands.create({
    name: "feed",
    description: "Feeds the player",
    permission: "cmd.feed"
}, ({ player }) => {
    if (checkCommandCooldown("feed", player)) return
    player.runCommandAsync("function commands/feed")
})