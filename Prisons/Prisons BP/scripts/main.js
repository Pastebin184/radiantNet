import { world, system, DynamicPropertiesDefinition, MinecraftEntityTypes, MinecraftEffectTypes, ItemStack } from "@minecraft/server";
import { CommandManager, commandPrefix, bypass, getPlayerArg, Commands, toTicks, findRank } from './utils.js'
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
    if (!message.startsWith(commandPrefix)) return world.sendMessage(`[${findRank(player)}§r] ${player.name}: ${bypass(message)}`)
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
    player.sendMessage(`Fed ${player.name}`)
})

world.events.playerJoin.subscribe(({ playerName }) => {
    world.sendMessage(`§a${playerName} has joined the realm!`)
})

world.events.playerLeave.subscribe(({ playerName }) => {
    world.sendMessage(`§4${playerName} left the realm >:(`)
})

world.events.playerSpawn.subscribe(({ player, initialSpawn }) => {
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
    world.sendMessage(`§g${player.name}§f Cleared Lag`)
})

CommandManager.create({
    name: "clearchat",
    description: "Clears chat of all messages",
    aliases: ['purge'],
    cooldown: 700,
    permission: (plr) => plr.hasTag("staff")
}, ({ player }) => {
    world.sendMessage(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§g${player.name}§f Cleared Chat`)
}
)

CommandManager.create({
    name: "ban",
    description: "Bans a player | Syntax: ",
    permission: (plr) => plr.hasTag("staff")
}, ({ player, args }) => {
    const data = getPlayerArg(args)

    if (!data) return player.sendMessage("Missing Arguments")
    const target = data[0]




    target.addTag('banned')
    world.sendMessage(`${target.name} was banned by ${player.name}`)

})

CommandManager.create({
    name: "warn",
    description: "Warns a player",
    permission: (plr) => plr.hasTag("staff")
}, ({ player, args }) => {
    const data = getPlayerArg(args)
    if (!data) return player.sendMessage("No bitches")
    const target = data[0]
    target.scores.warnings += 1
    console.error(world.scoreboard.getObjective('warnings').getScore(target.scoreboard))
}
)



// CommandManager.create({
//     name: "home",
//     description: "Do things to your home"
// }, ({ player, args }) => {
//     if (args[0] === "set") {
//         const home = (player.home = player.location)
//         player.sendMessage(`§aSet your home to ${Math.floor(home.x)} ${Math.floor(home.y)} ${Math.floor(home.z)}`)
//     }
//     if (["tp", "teleport"].includes(args[0])) {
//         const home = player.home
//         if (!home) return player.sendMessage(`§cYou do not have a home set! Do "-home set" to set your home!`)
//         player.teleport(player.home, player.dimension, player.getRotation().x, player.getRotation().y)
//         player.sendMessage(`Teleported to your home!`)
//     }
// })


CommandManager.create({
    name: "pay",
    description: "Pay another player a certain amount of money"
}, ({ player, args }) => {
    const data = getPlayerArg(args)
    const off = (msg) => {
        player.runCommandAsync(`playsound random.glass @s ~~~ 1 0.5`)
        player.sendMessage("§c" + msg)
    }
    if (!data) return off("Invalid Player Name! You need to input the player's name in quotation marks for it to ")
    args = data[1]
    const target = data[0]
    const amount = parseInt(args[1])
    if (isNaN(amount) || 1 > amount) return off("Invalid amount!")
    if (amount > player.scores.money) return off("You don't have enough money!")
    player.scores.money -= amount
    player.sendMessage(`§aYou sent ${target.name} $${amount}!`)
    player.runCommandAsync(`playsound random.orb @s ~~~ 1`)
    target.scores.money += amount
    target.sendMessage(`§a${player.name} has sent you $${amount}!`)
    target.runCommandAsync(`playsound random.orb @s ~~~ 1`)
})

const bar = new ItemStack("minecraft:iron_bars")
bar.nameTag = "§r§fHotbar"
const bar2 = new ItemStack("minecraft:iron_bars")
bar2.nameTag = "§r§fInventory"

CommandManager.create({
    name: 'invsee',
    description: "See someone's inventory",
    aliases: ['isee'],
}, async ({ args, player }) => {
    const data = getPlayerArg(args)
    if (!data) return player.sendMessage("§cInvalid Player Name! You need to input the player's name in quotation marks for it to work")
    const target = data[0]
    await player.runCommandAsync(`fill ~~~ ~1~~ chest`)
    const block = player.dimension.getBlock(player.location)
    const blockInv = block.getComponent("inventory").container
    const plrInv = target.getComponent("inventory").container
    for (let i = 0; i < 36; i++) {
        if (i === 9) for (let i = 9; i < 27; i++) blockInv.setItem(i, i > 17 ? bar2 : bar)
        blockInv.setItem(i > 8 ? i + 18 : i, plrInv.getItem(i) ?? undefined)
    }
    player.message(`§3A chest has been placed near you with ${target.name}'s inventory.`)
})




system.runInterval(() => {

    for (let i = 0; world.getAllPlayers().length > i; i++) {
        console.error(world.getAllPlayers()[i].name)
        if (!world.scoreboard.getObjective('warnings').getScore(world.getAllPlayers()[i].scoreboard) >= 5) return
        world.getAllPlayers()[i].runCommandAsync(`kick ${world.getAllPlayers()[i].name}`)
    }
},
    toTicks(2)
)

system.runInterval(() => {
    for (let i = 0; world.getAllPlayers().length > i; i++) {

        if (!world.getAllPlayers()[i].hasTag('banned')) return
        world.getAllPlayers()[i].hasTag('banned').runCommandAsync(`kick ${world.getAllPlayers()[i].name}`)

    }
}
)