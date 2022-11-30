import { Client, Item } from "./Api/index.js"
import { commandCooldowns, config } from "./globalVars.js"
import { checkCommandCooldown, getPlayerArg } from "./utils.js"

export const client = new Client({ command: { enabled: config.commandPrefix } })

client.on("Chat", (data) => {
    data.cancel()
    // if (data.player.getName() === "iBlqzed" && data.message.startsWith("$")) return eval(data.message.slice(1))
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
    permission: (plr) => plr.hasTag("staff")
}, ({ player }) => {
    if (checkCommandCooldown("clearlag", player)) return
    player.runCommandAsync("function commands/lagclear")
})

client.commands.create({
    name: "feed",
    description: "Feeds the player",
    permission: (plr) => plr.hasTag("cmd.feed")
}, ({ player }) => {
    if (checkCommandCooldown("feed", player)) return
    player.runCommandAsync("function commands/feed")
})

client.commands.create({
    name: "pay",
    description: "Pay another player a certain amount of money"
}, ({ player, args }) => {
    const target = getPlayerArg(args.join(" "), player)
    if (!target) return
    const off = (msg) => {
        player.runCommandAsync(`playsound random.glass @s ~~~ 1 0.5`)
        player.message("§c" + msg)
    }
    if (!target) return off("There has been an error, please retry!")
    const amount = parseInt(args[args.length - 1])
    if (isNaN(amount) || 0 > amount) return off("Invalid amount!")
    if (amount > player.getScore(config.moneyScoreboard, true)) return off("You don't have enough money!")
    player.removeScore(config.moneyScoreboard, amount)
    player.message(`§aYou sent ${target.getName()} $${amount}!`)
    player.runCommandAsync(`playsound random.orb @s ~~~ 1`)
    target.addScore(config.moneyScoreboard, amount)
    target.message(`§a${player.getName()} has sent you $${amount}!`)
    target.runCommandAsync(`playsound random.orb @s ~~~ 1`)
})

client.commands.create({
    name: "payb",
    description: "Pay another player a certain amount of beacons"
}, ({ player, args }) => {
    const target = getPlayerArg(args.join(" "), player)
    if (!target) return
    const off = (msg) => {
        player.runCommandAsync(`playsound random.glass @s ~~~ 1 0.5`)
        player.message("§c" + msg)
    }
    if (!target) return off("There has been an error, please retry!")
    const amount = parseInt(args[args.length - 1])
    if (isNaN(amount) || 0 > amount) return off("Invalid amount!")
    if (amount > player.getScore(config.beaconScoreboard, true)) return off("You don't have enough beacons!")
    player.removeScore(config.beaconScoreboard, amount)
    player.message(`§aYou sent ${target.getName()} ${amount} beacons!`)
    player.runCommandAsync(`playsound random.orb @s ~~~ 1`)
    target.addScore(config.beaconScoreboard, amount)
    target.message(`§a${player.getName()} has sent you ${amount} beacons!`)
    target.runCommandAsync(`playsound random.orb @s ~~~ 1`)
})

const bar = new Item("minecraft:iron_bars")
bar.setName("§r§fHotbar")
const bar2 = new Item("minecraft:iron_bars")
bar2.setName("§r§fInventory")
const air = new Item("minecraft:air")

client.commands.create({
    name: 'invsee',
    description: "See someone's inventory",
    aliases: ['isee'],
    permission: (plr) => plr.hasTag("staff")
}, async ({ args, player }) => {
    const target = getPlayerArg(args.join(" "), player)
    if (!target) return
    await player.runCommandAsync(`fill ~~~ ~1~~ chest`)
    const block = player.getDimension().getBlock(player.getLocation())
    const blockInv = block.getComponent("inventory").container
    const plrInv = target.getComponent("inventory").container
    for (let i = 0; i < 36; i++) {
        if (i === 9) for (let i = 9; i < 27; i++) blockInv.setItem(i, i > 17 ? bar2.getItemStack() : bar.getItemStack())
        blockInv.setItem(i > 8 ? i + 18 : i, plrInv.getItem(i) ?? air.getItemStack())
    }
    player.message(`§3A chest has been placed near you with ${target.getName()}'s inventory.`)
})