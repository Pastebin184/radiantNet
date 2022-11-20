scoreboard players add @s fragments 5
tellraw @a {"rawtext": [{"selector": "@s"},{"text": " §b§lGot §d§lEfficiency II§b§l from a common crate "}]}
structure load eff2 ~ ~1 ~ 
clear @s radiant:common_crate 0 1
