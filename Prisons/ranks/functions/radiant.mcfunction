execute as @s run tellraw @a {"rawtext": [{"text": "§6Thank you, §a"}, {"selector": "@s"},{"text": " §6for donating to Radiant Prisons. Enjoy your §l§9Radiant rank"}]}
tag @s add "ranks:§9§lRadiant"
execute at @s run structure load radiantrewards ~ ~1 ~