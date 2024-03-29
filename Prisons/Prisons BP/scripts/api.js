import { world, Player, World } from "@minecraft/server"
import { bypass } from "./utils.js"

const msg = Player.prototype.sendMessage
const msgAll = World.prototype.sendMessage
const objectiveCache = new Map()

Object.defineProperties(Player.prototype, {
    home: {
        get() {
            if (!this.getDynamicProperty("homeX")) return undefined
            return {
                x: this.getDynamicProperty("homeX"),
                y: this.getDynamicProperty("homeY"),
                z: this.getDynamicProperty("homeZ"),
            }
        },
        set(homeLocation) {
            this.setDynamicProperty("homeX", homeLocation.x)
            this.setDynamicProperty("homeY", homeLocation.y)
            this.setDynamicProperty("homeZ", homeLocation.z)
        }
    },
    scores: {
        get() {
            const player = this
            return new Proxy({}, {
                get(_, property) {
                    try {
                        return (objectiveCache.get(property) ?? objectiveCache.set(property, world.scoreboard.getObjective(property)).get(property)).getScore(player.scoreboard)
                    } catch {
                        return 0
                    }
                },
                set(_, property, value) {
                    try {
                        (objectiveCache.get(property) ?? objectiveCache.set(property, world.scoreboard.getObjective(property)).get(property)).setScore(player.scoreboard, value)
                    } catch {
                        player.runCommandAsync(`scoreboard players set @s "${property}" ${value}`)
                    }
                    return true
                }
            })
        }
    },
	sendMessage: {
		value(message) {
			msg.call(this, [bypass(message)])
		}
	}
})

Object.defineProperties(World.prototype, {
    sendMessage: {
        value(message) {
            msgAll.call(this, [bypass(message)])
        }
    }
})

