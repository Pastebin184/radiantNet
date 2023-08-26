import {JsonDatabase} from "./database.js" //import your downloaded file
const db = new JsonDatabase("commandCd").load();
import { world, system, Vector } from "@minecraft/server"
const prefix = '-'


let d = new Date()
let date = d.getDate()

let lastDatOfMonth = new Date(d.getFullYear(),d.getMonth()+1,0)


function getCooldown(player,kitType){
    return db.get(player.id + kitType)??0;}

function setCooldown(player,kitType,cooldown) {
    db.set(player.id + kitType,cooldown);}

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
        let command = data.message.replace(`${prefix}`,'').replace(/[^a-z]/g, "")
        let subCommand = command.slice(command.length)
        switch (command){
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
            case 'help':
                    player.sendMessage(`These are the commands:\n${prefix}spawn\n${prefix}sethome\n${prefix}home\n${prefix}wild`)
                    break
            case 'kitvip':
                console.error(getCooldown(player,"vip"))
                    if (player.hasTag("rank.vip"))
                    {
                        if (date >= getCooldown(player,"vip")|| getCooldown(player,"vip") == undefined) {
                            player.runCommandAsync("summon zombie")
                            player.sendMessage("VIP kit claimed")
                            setCooldown(player,"vip",date +1 )
                        }
                        else {
                            player.sendMessage(`§cCommand on cooldown! Try again tomorrow!`)
                        }
                        if (getCooldown(player,"vip") >lastDatOfMonth)
                            setCooldown(player,"vip",0)
                    }

                    break
            case 'kitmvp':
                console.error(getCooldown(player,"mvp"))
                    if (player.hasTag("rank.mvp"))
                    {
                        if (date >= getCooldown(player,"mvp")|| getCooldown(player,"mvp") == undefined) {
                            player.runCommandAsync("summon skeleton")
                            player.sendMessage("Mvp kit claimed")
                            setCooldown(player,"mvp",date +1 )
                        }
                        else {
                            player.sendMessage(`§cCommand on cooldown! Try again tomorrow!`)
                        }
                        if (getCooldown(player,"mvp") >lastDatOfMonth)
                            setCooldown(player,"mvp",0)
                    }
                        break
            case 'kitradiant':
                console.error(getCooldown(player,"radiant"))
                    if (player.hasTag("rank.radiant"))
                    {
                        if (date >= getCooldown(player,"radiant")|| getCooldown(player,"radiant") == undefined) {
                            player.runCommandAsync("summon spider")
                            player.sendMessage("Radiant kit claimed")
                            setCooldown(player,"radiant",date +1 )
                        }
                        else {
                            player.sendMessage(`§cCommand on cooldown! Try again tomorrow!`)
                        }
                        if (getCooldown(player,"radiant") >lastDatOfMonth)
                            setCooldown(player,"radiant",0)
                    }
                    break
                case 'debug':
                    player.sendMessage("Running Stable Build 0.11")
                    break
            default:
                player.sendMessage("Not a command")
                break
            }} 


})

world.afterEvents.playerSpawn.subscribe((data) => {
    let player = data.player
    player.sendMessage("§aHello, Welcome to §bRadiant Factions§f §a To get started grab the starter kit in front of you!§d Do -help for the commands!")
})

system.runInterval(() => {
    world.getAllPlayers()[0].runCommandAsync("function shop/shopfill")
},20)      
