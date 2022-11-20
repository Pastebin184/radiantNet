scoreboard players add @s fragments 5
tellraw @a {"rawtext": [{"selector": "@s"},{"text": " §b§lGot 5 Fragments from a common crate "}]}
clear @s radiant:common_crate 0 1
