execute as @s run tellraw @a {"rawtext": [{"text": "§6Thank you, §a"}, {"selector": "@s"},{"text": " §6for donating to Radiant Prisons. Enjoy your §l§bMVP§4+ rank"}]}
tag @s add "rank:§b§lMVP§4+"
execute at @s run structure load mvpprewards ~ ~1 ~
