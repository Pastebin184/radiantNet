import { world, system, DynamicPropertiesDefinition, MinecraftEntityTypes, MinecraftEffectTypes, ItemStack } from "@minecraft/server";
import { CommandManager, commandPrefix, bypass, getPlayerArg, Commands, toTicks, findRank } from './utils.js'
import "./api.js"

const block = ['coal', 'raw_iron', 'raw_copper', 'raw_gold', 'lapis_lazuli', 'redstone', 'diamond', 'netherrack', 'quartz', 'ancient_debris', 'emerald', 'end_stone', 'obsidian', 'iron_block', 'gold_block', 'lapis_block', 'redstone_block', 'diamond_block', 'emerald_block', 'netherite_block']

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
    if (player.hasTag("banned")) {
        player.runCommandAsync(`kick ${player} §4You have been banned from Radiant Prisons`)
    }
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
    world.sendMessage(`${'\n'.repeat(100)}§g${player.name}§f Cleared Chat`)
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
    target.sendMessage(`You have been warned by ${player}`)
    world.sendMessage(`${target} has been warned by ${player}`)
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
    permission: (plr) => (plr.hasTag("staff"))
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
        let player = world.getAllPlayers()[i]
        if (!world.getAllPlayers()[i].hasTag('banned')) return
        world.getAllPlayers()[i].hasTag('banned').runCommandAsync(`kick ${world.getAllPlayers()[i].name}`)
    }
},
    toTicks(1)
)

system.runInterval(() => {
    for (let i = 0; world.getAllPlayers().length > i; i++) {
        let player = world.getAllPlayers()[i]   
        const inventory = player.getComponent("inventory").container
        if ((!world.scoreboard.getObjective('miningFortune').getScore(player.scoreboard) / 5) > 0) return world.scoreboard.getObjective('effMiningFortune').setScore(player.scoreboard, 1)
        let eMF = Math.floor(world.scoreboard.getObjective('miningFortune').getScore(player.scoreboard) / 5)
        world.scoreboard.getObjective("effMiningFortune").setScore(player.scoreboard, eMF)
    for (let y = 0; y < 27; y++) {
            switch (inventory.getItem(y).typeId.slice(10)) {
                case 'coal':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${1 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${1 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=coal}] coal 0 ${eMF + 1}`)
                case 'raw_copper':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${1 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${2 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF + 1}`)
                case 'raw_iron':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${2 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${3 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF + 1}`)
                case 'raw_gold':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${3 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${4 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF + 1}`)
                case 'lapis_lazuli':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${4 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${3 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'redstone':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${4 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${5 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'diamond':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${6 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${5 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'netherrack':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${1 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${1 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'quartz':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF+1}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${9 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${10 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'ancient_debris':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${15 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${15 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'emerald':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${20 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${25 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'end_stone':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${25 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${30 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'obsidian':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${30 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${35 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'iron_block':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${40 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${50 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'gold_block':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${45 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${55 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'redstone_block':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${50 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${60 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'diamond_block':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${70 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${65 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'emerald_block':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${75 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${70 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                case 'netherite_block':
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s ${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run give @s radiant:re_${item} ${eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s money ${85 * eMF}`)
                    player.runCommandAsync(`execute as @a[hasitem={item=${item}}] run scoreboard players add @s xpSell ${90 * eMF}`)
                    player.runCommandAsync(`execute as @a run clear @a[hasitem={item=${item}}] ${item} 0 ${eMF+1}`)
                default:
                }

        }}
    },
    5
)


