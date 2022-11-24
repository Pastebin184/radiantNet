scoreboard players add @s money 10000000
tellraw @a {"rawtext": [{"selector": "@s"},{"text": " §b§lGot $10M from a fall crate "}]}
scoreboard players add @s fragments 200000
tellraw @a {"rawtext": [{"selector": "@s"},{"text": " §b§lGot 200K Fragments from a fall crate "}]}
tellraw @a {"rawtext": [{"selector": "@s"},{"text": " §b§lGot §dVarious Enchantments§b§l from a fall crate"}]}
structure load drop2 ~ ~1 ~ 
clear @s radiant:fall_crate 0 1