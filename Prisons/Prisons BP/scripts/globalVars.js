export const config = {
    commandPrefix: '-',
    moneyScoreboard: 'money',
    xpScoreboard: 'xp'
}

export const commandCooldowns = {
    spawn: 100
}

/**@type {{[key: string]: {cost: number, xp: number}}} */
export const itemStats = {
    "minecraft:coal": {
        cost: 1,
        xp: 1
    },
    "minecraft:raw_copper": {
        cost: 2,
        xp: 4
    },
    "minecraft:raw_iron": {
        cost: 3,
        xp: 9
    },
    "minecraft:raw_gold": {
        cost: 4,
        xp: 16
    },
    "minecraft:lapis_lazuli": {
        cost: 5,
        xp: 25
    },
    "minecraft:redstone": {
        cost: 6,
        xp: 36
    },
    "minecraft:diamond": {
        cost: 7,
        xp: 49
    },
    "minecraft:netherrack": {
        cost: 8,
        xp: 64
    },
    "minecraft:quartz": {
        cost: 9,
        xp: 81
    },
    "minecraft:netherite_scrap": {
        cost: 10,
        xp: 100
    }
}