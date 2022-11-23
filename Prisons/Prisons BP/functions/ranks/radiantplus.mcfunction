execute as @s run tellraw @a {"rawtext": [{"text": "§6Thank you, §a"}, {"selector": "@s"},{"text": " §6for donating to Radiant Prisons. Enjoy your §l§9Radiant§4+ rank"}]}
tag @s add "rank:§9§lRadiant§4+"
execute at @s run structure load radiantprewards ~ ~1 ~