import { world } from "@minecraft/server";
import { system } from "@minecraft/server";
import { commandCreate } from 'commands.js'
import {prefix} from 'config.js'


const amongUs = ""
console.warn(amongUs * 100)



function isRank(tag) {
    tag = tag.toString()
    const rankName = tag.slice(5)
    if (tag.startsWith('rank_'))
        return rankName
    else return false
}


const findRank = (tags) => {
    let i = 0
    let x = []
    while (i < tags.length) {
        if (tags[i].startsWith('rank_')) {
            x.push([isRank(`${tags[i]}`)])
            console.error(x)
        }
        i++
    }
    console.error(x)
    return x[1]
}


const isPlayer = (playerName) => !world.getPlayers({ name: playerName }).next().done

system.runInterval(() => {

})


world.events.beforeChat.subscribe((data) => {
    const player = data.sender
    const message = data.message
    data.cancel = true
    world.sendMessage(`[${findRank(player.getTags())}§r] ${player.name}`)



    if (!message.startsWith(`${prefix}`))return
    const args =  message.slice(prefix.length).trim().split(/\s+/);
    const command = args.shift()
    commandCreate(command, args, args.join(" "), player)
    findRank(player.getTags())

})


