import { Player } from "./Api/index.js";
import { commandCooldowns } from "./globalVars.js";
import { client } from "./index.js";

/** @param {string} command  @param {Player} player */
export function checkCommandCooldown(command, player) {
    if (!commandCooldowns[command]) return true
    const amount = player.getLog().get(`${command}Cooldown`)
    if (amount === 0) {
        player.getLog().set(`${command}Cooldown`, commandCooldowns[command])
        return false
    }
    player.message(`§cYou must wait ${amount / 20} seconds until you can run this command!`)
    return true
}

/**@param {string} args @param {Player} player */
export function getPlayerArg(args, player) {
    const off = (msg) => {
        player.runCommandAsync(`playsound random.glass @s ~~~ 1 0.5`)
        player.message("§c" + msg)
    }
    if (!/(?<=").+?(?=")/.test(args)) return off(`You need to input a player's name! Example: "iBlqzed"`)
    const target = client.world.getAllPlayers().find(e => e.getName() === args.match(/(?<=").+?(?=")/)[0])
    if (!target) return off(`Player is not online!`)
    return target
}