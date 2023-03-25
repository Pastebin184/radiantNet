import { world, system, DynamicPropertiesDefinition, MinecraftEntityTypes } from "@minecraft/server";
import { CommandManager, commandPrefix } from './util.js'

CommandManager.create({
    name: "spawn",
    description: "Go to spawn",
    cooldown: 100
}, ({ player }) => player.teleport({ x: 86, y: 65, z: 91 }, player.dimension, player.getRotation().x, player.getRotation().y))