execute as @a[hasitem={item=radiant:wood_pickaxe}] if score @s money matches 0.. run give @s wooden_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block","lodestone"]},"keep_on_death":{}}
execute as @a[hasitem={item=radiant:wood_pickaxe}] if score @s money matches 0.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:wood_pickaxe}] run clear @s radiant:wood_pickaxe

execute as @a[hasitem={item=radiant:stone_pickaxe}] if score @s money matches 100.. run give @s stone_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block","lodestone"]},"keep_on_death":{}}
execute as @a[hasitem={item=radiant:stone_pickaxe}] if score @s money matches 100.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:stone_pickaxe}] if score @s money matches 100.. run scoreboard players remove @s money 100
execute as @a[hasitem={item=radiant:stone_pickaxe}] run clear @s radiant:stone_pickaxe

execute as @a[hasitem={item=radiant:iron_pickaxe}] if score @s money matches 3000.. run give @s iron_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block","lodestone"]},"keep_on_death":{}}
execute as @a[hasitem={item=radiant:iron_pickaxe}] if score @s money matches 3000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:iron_pickaxe}] if score @s money matches 3000.. run scoreboard players remove @s money 3000
execute as @a[hasitem={item=radiant:iron_pickaxe}] run clear @s radiant:iron_pickaxe

execute as @a[hasitem={item=radiant:diamond_pickaxe}] if score @s money matches 150000.. if score @s prestige matches 1.. run give @s diamond_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block","lodestone"]},"keep_on_death":{}}
execute as @a[hasitem={item=radiant:diamond_pickaxe}] if score @s money matches 150000.. if score @s prestige matches 1.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:diamond_pickaxe}] if score @s money matches 150000.. if score @s prestige matches 1.. run scoreboard players remove @s money 150000
execute as @a[hasitem={item=radiant:diamond_pickaxe}] run clear @s radiant:diamond_pickaxe

execute as @a[hasitem={item=radiant:netherite_pickaxe}] if score @s money matches 5000000.. if score @s prestige matches 5.. run give @s netherite_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block","lodestone"]},"keep_on_death":{}}
execute as @a[hasitem={item=radiant:netherite_pickaxe}] if score @s money matches 5000000.. if score @s prestige matches 5.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:netherite_pickaxe}] if score @s money matches 5000000.. if score @s prestige matches 5.. run scoreboard players remove @s money 5000000
execute as @a[hasitem={item=radiant:netherite_pickaxe}] run clear @s radiant:netherite_pickaxe

execute as @a[hasitem={item=radiant:wood_sword}] if score @s money matches 200.. run give @s wooden_sword 1 0
execute as @a[hasitem={item=radiant:wood_sword}] if score @s money matches 200.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:wood_sword}] if score @s money matches 200.. run scoreboard players remove @s money 200
execute as @a[hasitem={item=radiant:wood_sword}] run clear @s radiant:wood_sword

execute as @a[hasitem={item=radiant:stone_sword}] if score @s money matches 1000.. run give @s stone_sword 1 0
execute as @a[hasitem={item=radiant:stone_sword}] if score @s money matches 1000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:stone_sword}] if score @s money matches 1000.. run scoreboard players remove @s money 1000
execute as @a[hasitem={item=radiant:stone_sword}] run clear @s radiant:stone_sword

execute as @a[hasitem={item=radiant:iron_sword}] if score @s money matches 5000.. run give @s iron_sword 1 0
execute as @a[hasitem={item=radiant:iron_sword}] if score @s money matches 5000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:iron_sword}] if score @s money matches 5000.. run scoreboard players remove @s money 5000
execute as @a[hasitem={item=radiant:iron_sword}] run clear @s radiant:iron_sword

execute as @a[hasitem={item=radiant:diamond_sword}] if score @s money matches 25000.. run give @s diamond_sword 1 0
execute as @a[hasitem={item=radiant:diamond_sword}] if score @s money matches 25000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:diamond_sword}] if score @s money matches 25000.. run scoreboard players remove @s money 25000
execute as @a[hasitem={item=radiant:diamond_sword}] run clear @s radiant:diamond_sword

execute as @a[hasitem={item=radiant:netherite_sword}] if score @s money matches 125000.. run give @s netherite_sword 1 0
execute as @a[hasitem={item=radiant:netherite_sword}] if score @s money matches 125000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:netherite_sword}] if score @s money matches 125000.. run scoreboard players remove @s money 125000
execute as @a[hasitem={item=radiant:netherite_sword}] run clear @s radiant:netherite_sword

execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run give @s leather_helmet 1 0
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run give @s leather_chestplate 1 0
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run give @s leather_leggings 1 0
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run give @s leather_boots 1 0
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run scoreboard players remove @s money 100
execute as @a[hasitem={item=radiant:leather_chestplate}] run clear @s radiant:leather_chestplate

execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 1000.. run give @s golden_helmet 1 0
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 1000.. run give @s golden_chestplate 1 0
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 1000.. run give @s golden_leggings 1 0
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 1000.. run give @s golden_boots 1 0
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 1000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 1000.. run scoreboard players remove @s money 1000
execute as @a[hasitem={item=radiant:gold_chestplate}] run clear @s radiant:gold_chestplate

execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 2000.. run give @s chainmail_helmet 1 0
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 2000.. run give @s chainmail_chestplate 1 0
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 2000.. run give @s chainmail_leggings 1 0
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 2000.. run give @s chainmail_boots 1 0
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 2000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 2000.. run scoreboard players remove @s money 2000
execute as @a[hasitem={item=radiant:chainmail_chestplate}] run clear @s radiant:chainmail_chestplate

execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run give @s iron_helmet 1 0
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run give @s iron_chestplate 1 0
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run give @s iron_leggings 1 0
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run give @s iron_boots 1 0
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run scoreboard players remove @s money 25000
execute as @a[hasitem={item=radiant:iron_chestplate}] run clear @s radiant:iron_chestplate

execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run give @s diamond_helmet 1 0
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run give @s diamond_chestplate 1 0
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run give @s diamond_leggings 1 0
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run give @s diamond_boots 1 0
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run scoreboard players remove @s money 250000
execute as @a[hasitem={item=radiant:diamond_chestplate}] run clear @s radiant:diamond_chestplate

execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run give @s netherite_helmet 1 0
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run give @s netherite_chestplate 1 0
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run give @s netherite_leggings 1 0
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run give @s netherite_boots 1 0
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run scoreboard players remove @s money 5000000
execute as @a[hasitem={item=radiant:netherite_chestplate}] run clear @s radiant:netherite_chestplate

clear @a radiant:filler

execute as @a[hasitem={item=radiant:prestige}] if score @s money matches 100000.. if score @s levels matches 250 run tag @s add prestigeASD
execute as @a[hasitem={item=radiant:prestige}, tag=prestigeASD] run scoreboard players add @s gems 5
execute as @a[hasitem={item=radiant:prestige}, tag=prestigeASD] run scoreboard players add @s prestige 1
execute as @a[hasitem={item=radiant:prestige}, tag=prestigeASD] run tellraw @s {"rawtext":[{"text":"§aSuccesfully Prestiged"}]}

execute as @a[hasitem={item=radiant:prestige}, tag=prestigeASD] run scoreboard players set @s xp 0
execute as @a[hasitem={item=radiant:prestige}, tag=prestigeASD] run scoreboard players set @s levels 0
execute as @a[hasitem={item=radiant:prestige}, tag=prestigeASD] run scoreboard players set @s money 0
execute as @a[hasitem={item=radiant:prestige}, tag=prestigeASD] run tag @s remove prestigeASD
execute as @a[hasitem={item=radiant:prestige}] run clear @s radiant:prestige

execute as @a[hasitem={item=radiant:common_crate_shop}] if score @s money matches 450.. run give @s radiant:common_crate 1 0
execute as @a[hasitem={item=radiant:common_crate_shop}] if score @s money matches 450.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:common_crate_shop}] if score @s money matches 450.. run scoreboard players remove @s money 450
execute as @a[hasitem={item=radiant:common_crate_shop}] run clear @s radiant:common_crate_shop

execute as @a[hasitem={item=radiant:rare_crate_shop}] if score @s money matches 900.. run give @s radiant:rare_crate 1 0
execute as @a[hasitem={item=radiant:rare_crate_shop}] if score @s money matches 900.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:rare_crate_shop}] if score @s money matches 900.. run scoreboard players remove @s money 900
execute as @a[hasitem={item=radiant:rare_crate_shop}] run clear @s radiant:rare_crate_shop

execute as @a[hasitem={item=radiant:legendary_crate_shop}] if score @s money matches 2000.. run give @s radiant:legendary_crate 1 0
execute as @a[hasitem={item=radiant:legendary_crate_shop}] if score @s money matches 2000.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:legendary_crate_shop}] if score @s money matches 2000.. run scoreboard players remove @s money 2000
execute as @a[hasitem={item=radiant:legendary_crate_shop}] run clear @s radiant:legendary_crate_shop