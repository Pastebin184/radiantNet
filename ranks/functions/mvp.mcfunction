execute as @s run tellraw @a {"rawtext": [{"text": "§6Thank you, §a"}, {"selector": "@s"},{"text": " §6for donating to Radiant Prisons. Enjoy your §l§bRank rank"}]}
tag @s add "ranks:§b§lMVP"
execute at @s run structure load mvprewards ~ ~1 ~
