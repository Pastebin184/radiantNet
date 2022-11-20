import { Player } from "./Api/index.js";
import { commandCooldowns } from "./globalVars.js";

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