import { world } from "@minecraft/server";
import { Database } from "./Database";
export class DatabaseUtils {
    /**
     * Create a new database
     * @param {string} name The name of the database
     * @returns {Database} A new database
     */
    create(name) {
        return new Database(name);
    }
    /**
     * Delete a database
     * @param {Database|string} database Database (or database name) to delete
     */
    delete(database) {
        world.scoreboard.removeObjective(database instanceof Database ? database.name : JSON.stringify(database).slice(1, -1).replaceAll(/"/g, '\\"'));
    }
}
