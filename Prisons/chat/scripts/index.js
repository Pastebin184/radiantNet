import { world } from "@minecraft/server"

world.events.beforeChat.subscribe(data => {
    data.cancel = true
    world.say(`§l§8[§r${data.sender.getTags().find(tag => tag.startsWith("rank:")) ? data.sender.getTags().filter(tag => tag.startsWith('rank:')).map(tag => tag.slice(5)).join('§l§8] [§r') : "§6Member"}§l§8]§r ${data.sender.name}: ${data.message}`)
})