import { world, system, DynamicPropertiesDefinition, MinecraftEntityTypes, MinecraftEffectTypes } from "@minecraft/server";
import { CommandManager, commandPrefix, bypass, getPlayerArg, Commands } from './utils.js'
import "./api.js"

world.events.worldInitialize.subscribe((data) => {
    const v = new DynamicPropertiesDefinition()
    v.defineNumber("homeX")
    v.defineNumber("homeY")
    v.defineNumber("homeZ")
    data.propertyRegistry.registerEntityTypeDynamicProperties(v, MinecraftEntityTypes.player)
})

world.events.beforeChat.subscribe((data) => {
    const { message, sender: player } = data
    data.cancel = true
    if (!message.startsWith(commandPrefix)) return world.sendMessage(`[${findRank(player.getTags())}§r] ${player.name}: ${bypass(message)}`)
})

CommandManager.create({
    name: "spawn",
    description: "Go to spawn",
    cooldown: 100
}, ({ player }) => player.teleport({ x: 86, y: 65, z: 91 }, player.dimension, player.getRotation().x, player.getRotation().y))

CommandManager.create({
    name: "feed",
    description: "Feeds you",
    cooldown: 1200,
    permissions: (plr) => plr.hasTag("cmd.feed")
}, ({ player }) => {
    player.addEffect(MinecraftEffectTypes.saturation, 10, 255, true)
    player.sendMessage("Fed the fatass")
})

world.events.playerJoin.subscribe(({ playerName }) => {
    world.sendMessage(`§a${playerName} has joined the realm!`)
})

world.events.playerLeave.subscribe(({ playerName }) => {
    world.sendMessage(`§4${playerName} left the realm >:(`)
})

world.events.playerSpawn.subscribe(({ player, initialSpawn }) =>{
    if (!initialSpawn) return
    player.sendMessage("§aWelcome to Radiant Prisons!")
    Commands.cache.get("spawn").callback({ player, args: [] })
})

CommandManager.create({
    name: "clearlag",
    description: "Clears lag",
    cooldown: 600,
    permissions: (plr) => plr.hasTag("staff")
}, ({ player }) => {
    player.runCommandAsync('kill @e[type=item]')
    player.sendMessage("Cleared lag")
})

CommandManager.create({
    name: "home",
    description: "Do things to your home"
}, ({ player, args }) => {
    if (args[0] === "set") {
        const home = (player.home = player.location)
        player.sendMessage(`§aSet your home to ${Math.floor(home.x)} ${Math.floor(home.y)} ${Math.floor(home.z)}`)
    }
    if (["tp", "teleport"].includes(args[0])) {
        const home = player.home
        if (!home) return player.sendMessage(`§cYou do not have a home set! Do "-home set" to set your home!`)
        player.teleport(player.home, player.dimension, player.getRotation().x, player.getRotation().y)
        player.sendMessage(`Teleported to your home!`)
    }
})

CommandManager.create({
    name: "pay",
    description: "Pay another player a certain amount of money"
}, ({ player, args }) => {
    const [target, _args] = getPlayerArg(args.join(" "), player)
    args = _args
    const off = (msg) => {
        player.runCommandAsync(`playsound random.glass @s ~~~ 1 0.5`)
        player.sendMessage("§c" + msg)
    }
    if (!target) return off("Invalid Player Name! You need to input the player's name in quotation marks for it to ")
    const amount = parseInt(args[0])
    if (isNaN(amount) || 1 > amount) return off("Invalid amount!")
    if (amount > player.getScore(config.moneyScoreboard, true)) return off("You don't have enough money!")
    player.removeScore(config.moneyScoreboard, amount)
    player.sendMessage(`§aYou sent ${target.getName()} $${amount}!`)
    player.runCommandAsync(`playsound random.orb @s ~~~ 1`)
    target.addScore(config.moneyScoreboard, amount)
    target.sendMessage(`§a${player.getName()} has sent you $${amount}!`)
    target.runCommandAsync(`playsound random.orb @s ~~~ 1`)
})