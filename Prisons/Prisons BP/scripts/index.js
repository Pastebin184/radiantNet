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
}, ({ player }) => {
    const players = client.world.getAllPlayers(), nameList = players.map(e => e.getName()), loc = player.getLocation(), rot = player.getRotation()
    player.message("§3Please close chat so that way a form can open up!")
    const event = client.on("Tick", () => {
        if (!client.world.getAllPlayers().find(e => e.getName() === player.getName())) return client.off(event)
        const _loc = player.getLocation(), _rot = player.getRotation()
        if (!((_loc.x !== loc.x) || (_loc.y !== loc.y) || (_loc.z !== loc.z) || (_rot.x !== rot.x) || (_rot.y !== rot.y))) return
        const off = (msg) => {
            client.off(event)
            player.runCommandAsync(`playsound random.glass @s ~~~ 1 0.5`)
            player.message("§c" + msg)
        }
        new ModalForm().addDropdown("Choose a player!", nameList).addTextField("Input the amount you would like to pay", "Input a number here...").show(player).then(e => {
            const target = client.world.getAllPlayers().find(player => player.getName() === players[e.formValues[0]].getName())
            if (!target) return off("There has been an error, please retry!")
            const amount = parseInt(e.formValues[1])
            if (isNaN(amount) || 0 > amount) return off("Invalid amount!")
            if (amount > player.getScore(config.moneyScoreboard, true)) return off("You don't have enough money!")
            player.removeScore(config.moneyScoreboard, amount)
            player.message(`§aYou sent ${target.getName()} $${amount}!`)
            player.runCommandAsync(`playsound random.orb @s ~~~ 1`)
            target.addScore(config.moneyScoreboard, amount)
            target.message(`§a${player.getName()} has sent you $${amount}!`)
            target.runCommandAsync(`playsound random.orb @s ~~~ 1`)
        })
        client.off(event)
    })
})

client.commands.create({
    name: "payb",
    description: "Pay another player a certain amount of beacons"
}, ({ player }) => {
    const players = client.world.getAllPlayers(), nameList = players.map(e => e.getName()), loc = player.getLocation(), rot = player.getRotation()
    player.message("§3Please close chat so that way a form can open up!")
    const event = client.on("Tick", () => {
        if (!client.world.getAllPlayers().find(e => e.getName() === player.getName())) return client.off(event)
        const _loc = player.getLocation(), _rot = player.getRotation()
        if (!((_loc.x !== loc.x) || (_loc.y !== loc.y) || (_loc.z !== loc.z) || (_rot.x !== rot.x) || (_rot.y !== rot.y))) return
        const off = (msg) => {
            client.off(event)
            player.runCommandAsync(`playsound random.glass @s ~~~ 1 0.5`)
            player.message("§c" + msg)
        }
        new ModalForm().addDropdown("Choose a player!", nameList).addTextField("Input the amount of beacons you would like to pay", "Input a number here...").show(player).then(e => {
            const target = client.world.getAllPlayers().find(player => player.getName() === players[e.formValues[0]].getName())
            if (!target) return off("There has been an error, please retry!")
            const amount = parseInt(e.formValues[1])
            if (isNaN(amount) || 0 > amount) return off("Invalid amount!")
            if (amount > player.getScore(config.beaconScoreboard, true)) return off("You don't have enough beacons!")
            player.removeScore(config.beaconScoreboard, amount)
            player.message(`§aYou sent ${target.getName()} ${amount} beacons!`)
            player.runCommandAsync(`playsound random.orb @s ~~~ 1`)
            target.addScore(config.beaconScoreboard, amount)
            target.message(`§a${player.getName()} has sent you ${amount} beacons!`)
            target.runCommandAsync(`playsound random.orb @s ~~~ 1`)
        })
        client.off(event)
    })
})