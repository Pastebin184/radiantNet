execute as @s run tellraw @a {"rawtext": [{"text": "§6Thank you, §a"}, {"selector": "@s"},{"text": " §6for donating to Radiant Prisons. Enjoy your §l§bMVP§b4+ rank"}]}
tag @s add "ranks:§b§lMVP§4+"
execute at @s run structure load mvpprewards ~ ~1 ~
