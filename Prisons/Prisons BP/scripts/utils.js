import { world, Player } from "@minecraft/server";



export const commandPrefix = "-"



/**
 * @typedef {{name: string, description?: string, aliases?: string[], cooldown?: number permission?: (player: Player) => boolean }} CommandInfo
 */

class Commands {
	/**
	 * Create a new command
	 * @param {CommandInfo} info The command info
	 * @param {(data: {player: Player, args: string[]}) => void} callback Code to run when the command is ran
	 */
	create(info, callback) {
		Commands.registeredCommands.push({
			name: info.name.toLowerCase().split(' ')[0],
			description: info.description ?? undefined,
			aliases: info.aliases?.map(aL => aL.toLowerCase().split(' ')[0]) ?? [],
			permission: info.permission ?? (() => true),
			cooldown: info.cooldown ?? 0,
			callback
		});
	}
	/**
	 * Remove a command
	 * @param {string} command The name of the command to remove
	 */
	remove(command) {
		const index = Commands.registeredCommands.findIndex(cmd => cmd.name === command.toLowerCase());
		if (index === -1)
			return;
		Commands.registeredCommands.splice(index, 1);
	}
	/**
	 * Loop through all commands
	 * @param {(value: CommandData, index: number, array: CommandData[]) => void} callback Code to run per loop
	 * @param {any} thisArg The value of this "this" word
	 */
	forEach(callback, thisArg) {
		Commands.registeredCommands.forEach(callback, thisArg);
	}
	/**
	 * Clear all commands
	 */
	clear() {
		Commands.registeredCommands = [];
	}
}

export const CommandManager = new Commands()

Commands.registeredCommands = [];

world.events.beforeChat.subscribe((data) => {
	const { message, sender: player } = data;
	if (!message.startsWith(commandPrefix))
		return;
	const args = message.trim().slice(commandPrefix.length).split(/\s+/g);
	const cmd = args.shift().toLowerCase();
	const cmdData = Commands.registeredCommands.find(c => c.name === cmd || c.aliases?.includes(cmd));
	data.cancel = true;
	if (!cmdData)
		return player.sendMessage(`§cInvalid command!`);
	if (player.getItemCooldown(`CD_${cmdData.name}`) !== 0) 
		return player.sendMessage(`Command on cooldown for ${player.getItemCooldown(`CD_${cmdData.name}`) * 20} seconds!`)
	if (!cmdData.permission(player))
		return player.sendMessage(`§cInvalid permission!`);
	player.startItemCooldown(`CD_${cmdData.name}`, cmdData.cooldown)
	cmdData.callback({ player, args });
});
