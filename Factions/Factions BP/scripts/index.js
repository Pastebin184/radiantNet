import { world } from "@minecraft/server";
import { system } from "@minecraft/server";

const amongUs = "Gay among us sex "
console.warn(amongUs * 100)

system.runInterval(() =>{
    world.sendMessage(amongUs);
})