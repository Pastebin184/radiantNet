import type { Vector3 } from "@minecraft/server"

declare module "@minecraft/server" {
	interface Player {
		readonly scores: Record<string, number>
		home: Vector3
	}
}