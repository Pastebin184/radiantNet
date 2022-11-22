execute as @a if score @s levels matches 0.. if score @s prestige matches 0.. run tag @s add mineA
execute as @a if score @s levels matches 25.. if score @s prestige matches 0.. run tag @s add mineB
execute as @a if score @s levels matches 50.. if score @s prestige matches 0.. run tag @s add mineC
execute as @a if score @s levels matches 100.. if score @s prestige matches 0.. run tag @s add mineD
execute as @a if score @s levels matches 150.. if score @s prestige matches 0.. run tag @s add mineE
execute as @a if score @s levels matches 200.. if score @s prestige matches 0.. run tag @s add mineF
execute as @a if score @s levels matches 250.. if score @s prestige matches 0.. run tag @s add mineG
execute as @a if score @s levels matches 50.. if score @s prestige matches 1.. run tag @s add mineH
execute as @a if score @s levels matches 150.. if score @s prestige matches 1.. run tag @s add mineI
execute as @a if score @s levels matches 200.. if score @s prestige matches 1.. run tag @s add mineJ
execute as @a if score @s levels matches 50.. if score @s prestige matches 2.. run tag @s add mineK
execute as @a if score @s levels matches 150.. if score @s prestige matches 2.. run tag @s add mineL
execute as @a if score @s levels matches 200.. if score @s prestige matches 2.. run tag @s add mineM
execute as @a if score @s levels matches 0.. if score @s prestige matches 3.. run tag @s add mineN
execute as @a if score @s levels matches 125.. if score @s prestige matches 3.. run tag @s add mineO
execute as @a if score @s levels matches 0.. if score @s prestige matches 4.. run tag @s add mineP
execute as @a if score @s levels matches 125.. if score @s prestige matches 4.. run tag @s add mineQ
execute as @a if score @s levels matches 0.. if score @s prestige matches 6.. run tag @s add mineR
execute as @a if score @s levels matches 0.. if score @s prestige matches 8.. run tag @s add mineS
execute as @a if score @s levels matches 0.. if score @s prestige matches 10.. run tag @s add mineT

execute as @a[hasitem={item=radiant:coal_ore}, tag=mineA] run tp @s 240 75 -421
execute as @a[hasitem={item=radiant:copper_ore}, tag=mineB] run tp @s 240 75 -338
execute as @a[hasitem={item=radiant:iron_ore}, tag=mineC] run tp @s 167 75 -252
execute as @a[hasitem={item=radiant:gold_ore}, tag=mineD] run tp @s 156 74 -342
execute as @a[hasitem={item=radiant:lapis_ore}, tag=mineE] run tp @s 17 75 -205
execute as @a[hasitem={item=radiant:redstone_ore}, tag=mineF] run tp @s 1 75 -321
execute as @a[hasitem={item=radiant:diamond_ore}, tag=mineG] run tp @s 11 74 -418
execute as @a[hasitem={item=radiant:netherrack}, tag=mineH] run tp @s 12 74 -516
execute as @a[hasitem={item=radiant:quartz_ore}, tag=mineI] run tp @s 30 74 -598
execute as @a[hasitem={item=radiant:ancient_debris}, tag=mineJ] run tp @s 38 74 -688
execute as @a[hasitem={item=radiant:emerald_ore}, tag=mineK] run tp @s 38 73 -775
execute as @a[hasitem={item=radiant:end_stone}, tag=mineL] run tp @s 30 80 -865
execute as @a[hasitem={item=radiant:obsidian}, tag=mineM] run tp @s 60 77 -947
execute as @a[hasitem={item=radiant:iron_block}, tag=mineN] run tp @s 28 82 -1053
execute as @a[hasitem={item=radiant:gold_block}, tag=mineO] run tp @s 142 81 -1065
execute as @a[hasitem={item=radiant:lapis_block}, tag=mineP] run tp @s 133 76 -948
execute as @a[hasitem={item=radiant:redstone_block}, tag=mineQ] run tp @s 141 79 -907
execute as @a[hasitem={item=radiant:diamond_block}, tag=mineR] run tp @s 143 73 -821
execute as @a[hasitem={item=radiant:emerald_block}, tag=mineS] run tp @s 162 74 -716
execute as @a[hasitem={item=radiant:netherite_block}, tag=mineT] run tp @s 261 77 -664

execute as @a[hasitem={item=radiant:coal_ore}] run clear @s radiant:coal_ore
execute as @a[hasitem={item=radiant:copper_ore}] run clear @s radiant:copper_ore
execute as @a[hasitem={item=radiant:iron_ore}] run clear @s radiant:iron_ore
execute as @a[hasitem={item=radiant:gold_ore}] run clear @s radiant:gold_ore
execute as @a[hasitem={item=radiant:lapis_ore}] run clear @s radiant:lapis_ore
execute as @a[hasitem={item=radiant:redstone_ore}] run clear @s radiant:redstone_ore
execute as @a[hasitem={item=radiant:diamond_ore}] run clear @s radiant:diamond_ore
execute as @a[hasitem={item=radiant:netherrack}] run clear @s radiant:netherrack
execute as @a[hasitem={item=radiant:quartz_ore}] run clear @s radiant:quartz_ore
execute as @a[hasitem={item=radiant:ancient_debris}] run clear @s radiant:ancient_debris
execute as @a[hasitem={item=radiant:emerald_ore}] run clear @s radiant:emerald_ore
execute as @a[hasitem={item=radiant:end_stone}] run clear @s radiant:end_stone
execute as @a[hasitem={item=radiant:obsidian}] run clear @s radiant:obsidian
execute as @a[hasitem={item=radiant:iron_block}] run clear @s radiant:iron_block
execute as @a[hasitem={item=radiant:gold_block}] run clear @s radiant:gold_block
execute as @a[hasitem={item=radiant:lapis_block}] run clear @s radiant:lapis_block
execute as @a[hasitem={item=radiant:redstone_block}] run clear @s radiant:redstone_block
execute as @a[hasitem={item=radiant:diamond_block}] run clear @s radiant:diamond_block
execute as @a[hasitem={item=radiant:emerald_block}] run clear @s radiant:emerald_block
execute as @a[hasitem={item=radiant:netherite_block}] run clear @s radiant:netherite_block