execute as @s run tellraw @a {"rawtext": [{"text": "§6Thank you, §a"}, {"selector": "@s"},{"text": " §6for donating to Radiant Prisons. Enjoy your §l§eRadiance§rank"}]}
tag @s add "ranks:§e§lRadiance"
execute at @s run structure load radiancerewards ~ ~1 ~
