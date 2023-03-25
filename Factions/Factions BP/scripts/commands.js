export { commandCreate }
import { world } from "@minecraft/server";
import { system } from "@minecraft/server";
import { Player } from "@minecraft/server";
/**
 * 
 * @param {string} The commnad name
 * @param {string[]} Arguments
 * @param {string} Message Data
 * @param {Player} Player who send message 
 */


function commandCreate(command, args,data, player) {
    switch(command) {
        case "gay":
            player.runCommandAsync(`say ${player.name} gay`)
            break;
        case "sus":
            player.runCommandAsync(`say sus`)
        default:
            player.runCommandAsync(`say not a command`)
    }
}