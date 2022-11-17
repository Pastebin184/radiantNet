execute as @s run tellraw @a {"rawtext": [{"text": "§6Thank you, §a"}, {"selector": "@s"},{"text": " §6for donating to Radiant Prisons. Enjoy your §l§9Supreme rank"}]}
tag @s add "ranks:§4§lSupreme"
execute at @s run structure load supremerewards ~ ~1 ~