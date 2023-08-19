import { world, system } from "@minecraft/server";
const prefix = '-'


world.beforeEvents.chatSend.subscribe((data) => {
    let player = data.sender
    data.cancel = true 
    function hasRank() {
        if (player.getTags().filter((tags) => tags.startsWith("rank-"))[0]) {
            return player.getTags().filter((tags) => tags.startsWith("rank-"))[0].toString().slice(5)
        }
        else (!player.getTags().filter((tags) => tags.startsWith("rank-")))
        {
            return 'Member'
        }
    }
    if (hasRank()) world.sendMessage(`<${hasRank()}§f> <${player.nameTag}> ${data.message}`) 
    
    if (data.message.startsWith(prefix)) {
        switch (data.message.replace(`${prefix}`, '')){
            case 'spawn':
                player.runCommandAsync("tp @s 0 100 0 ")
            
    }}


})
