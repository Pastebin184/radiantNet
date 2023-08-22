import { world, system, Vector } from "@minecraft/server";
const prefix = '-'


world.beforeEvents.chatSend.subscribe((data) => {
    let player = data.sender
    data.cancel = true 
    function hasRank() {
        if (!data.message.startsWith(prefix)) { 
        if (player.getTags().filter((tags) => tags.startsWith("rank-"))[0]) {
            return player.getTags().filter((tags) => tags.startsWith("rank-"))[0].toString().slice(5)
        }
        else (!player.getTags().filter((tags) => tags.startsWith("rank-")))
        {
            return 'Member'
        }
    }
    }
    if (hasRank()) world.sendMessage(`<${hasRank()}§f> <${player.nameTag}> ${data.message}`) 
    
    if (data.message.startsWith(prefix)) {
        let sp = player.getSpawnPoint()
        switch (data.message.replace(`${prefix}`, '')){
            case 'spawn':
                player.runCommandAsync("tp @s 146 153 101")
                player.sendMessage("Teleported to spawn!")
                break
            case 'sethome':
                system.run(() =>
                {
                    sp = player.getSpawnPoint()
                    player.runCommandAsync("spawnpoint @s ~ ~ ~")
                    player.sendMessage(`Home set)`)
                })
                break
            case 'home':
                system.run(() =>
                {
                    player.teleport(new Vector(sp.x,sp.y,sp.z))
                })
                break
            case 'wild':
                system.run(()=>{
                    switch (Math.random() * 10){
                        case 1:
                            player.teleport(new Vector(Math.random() *200 + 600,Math.random() *100 + 100,Math.random() *175 + 600))
                            break
                        case 2: 
                            player.teleport(new Vector(Math.random() *200 + 900,Math.random() *100 + 100,Math.random() *175 + 800))
                            break
                        case 3:
                            player.teleport(new Vector(Math.random() *200 + 900,Math.random() *100 + 100,Math.random() *175 + 1000))
                            break
                        case 4:
                            player.teleport(new Vector(Math.random() *200 + 900,Math.random() *100 + 100,Math.random() *175 + 1000))
                            break
                        default:
                            player.teleport(new Vector(Math.random() *210 +750,Math.random() *100 + 100,Math.random() *175 + 750))
                            break
                    }
                    player.sendMessage("Teleported to Wild")
                    player.addEffect("resistance",500,{amplifier: 255,})
                })
                break;
            default:
                player.sendMessage("Not a command")
                break
            }} 


})

system.runInterval(() => {
    world.runCommandAsync("function shop/shopfill"),
    20
})