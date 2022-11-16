execute as @s run tellraw @a {"rawtext": [{"text": "§6Thank you, §a"}, {"selector": "@s"},{"text": " §6for donating to Radiant Prisons. Enjoy your §l§aVIP rank"}]}
tag @s add "ranks:§a§lVIP"
execute at @s run structure load viprewards ~ ~1 ~
