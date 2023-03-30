import { world, Player } from "@minecraft/server";



export const commandPrefix = "-"



/**
 * @typedef {{name: string, description?: string, aliases?: string[], cooldown?: number permission?: (player: Player) => boolean }} CommandInfo
 * @typedef {{name: string, description?: string, aliases?: string[], cooldown?: number permission?: (player: Player) => boolean, callback: (data: {player: Player, args: string[]}) => void}} CommandData
 */

export class Commands {
	/** @readonly @type {Map<string, CommandData>}*/
	static cache
	constructor() {}
	/**
	 * Create a new command
	 * @param {CommandInfo} info The command info
	 * @param {(data: {player: Player, args: string[]}) => void} callback Code to run when the command is ran
	 */
	create(info, callback) {
		Commands.cache.set(info.name, {
			name: info.name.toLowerCase().split(' ')[0],
			description: info.description,
			aliases: info.aliases?.map(aL => aL.toLowerCase().split(' ')[0]) ?? [],
			permission: info.permission ?? (() => true),
			cooldown: info.cooldown ?? 0,
			callback
		})
	}
	/**
	 * Remove a command
	 * @param {string} command The name of the command to remove
	 */
	remove(command) {
		Commands.cache.delete(command)
	}
	/**
	 * Loop through all commands
	 * @param {(value: CommandData, index: number, array: CommandData[]) => void} callback Code to run per loop
	 * @param {any} thisArg The value of this "this" word
	 */
	forEach(callback, thisArg) {
		[...Commands.cache.values()].forEach(callback, thisArg);
	}
	/**
	 * Clear all commands
	 */
	clear() {
		Commands.cache.clear()
	}
}

Commands.cache = new Map()

export const CommandManager = new Commands()

world.events.beforeChat.subscribe((data) => {
	const { message, sender: player } = data;
	if (!message.startsWith(commandPrefix))
		return;
	const args = message.trim().slice(commandPrefix.length).split(/\s+/g);
	const cmd = args.shift().toLowerCase();
	const cmdData = [...Commands.cache.values()].find((c) => c.name === cmd || c.aliases?.includes(cmd));
	data.cancel = true;
	if (!cmdData)
		return player.sendMessage(`§cInvalid command!`);
	if (player.getItemCooldown(`CD_${cmdData.name}`) !== 0) 
		return player.sendMessage(`§cCommand on cooldown for ${player.getItemCooldown(`CD_${cmdData.name}`) / 20} seconds!`)
	if (!cmdData.permission(player))
		return player.sendMessage(`§cInvalid permission!`);
	player.startItemCooldown(`CD_${cmdData.name}`, cmdData.cooldown)
	cmdData.callback({ player, args });
});

const bypassedWords = {
    'fuck': 'fùck',
    'nigger': 'nígger',
    'nigga': 'nígga',
    'retard': 'rètard',
    'shit': 'shít',
    'cum': 'cùm',
    'ass': 'àss',
    'kys': 'kŷs',
    'chink': 'chínk',
}

export const bypass = (str) => Object.keys(bypassedWords).reduce((p, v) => p.replaceAll(v, bypassedWords[v]), str)

/**@param {string} args @param {Player} player */
export function getPlayerArg(args) {
	const joinedArgs = args.join(" ")
    if (!/(?<=").+?(?=")/.test(joinedArgs)) return
	const name = joinedArgs.match(/(?<=").+?(?=")/)[0]
    const target = world.getAllPlayers().find(e => e.name === name)
    if (!target) return
    return [target, joinedArgs.slice(name + 2).split(/\s+/g)]
}

/**
 * Converts a certain amount of seconds to ticks
 * @param {number} seconds Amoount of seconds 
 * @returns {number} The amount of ticks
 */
export const toTicks = (seconds) => seconds * 20

/**
 * 
 * @param {String} plr - player
 * @returns Inputted player's rank
 */


export function findRank(plr) {
	if (!plr.getTags().find(tag => tag.startsWith('rank_')))  return 'Member'
	return plr.getTags().find(tag => tag.startsWith('rank_')).slice(5)
}


