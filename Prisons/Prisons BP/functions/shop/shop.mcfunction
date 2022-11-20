execute as @a[hasitem={item=radiant:wood_pickaxe}] if score @s money matches 0.. run give @s wooden_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:wood_pickaxe}] run clear @s radiant:wood_pickaxe

execute as @a[hasitem={item=radiant:stone_pickaxe}] if score @s money matches 100.. run give @s stone_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:stone_pickaxe}] if score @s money matches 100.. run scoreboard players remove @s money 100
execute as @a[hasitem={item=radiant:stone_pickaxe}] run clear @s radiant:stone_pickaxe

execute as @a[hasitem={item=radiant:iron_pickaxe}] if score @s money matches 25000.. run give @s iron_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:iron_pickaxe}] if score @s money matches 25000.. run scoreboard players remove @s money 25000
execute as @a[hasitem={item=radiant:iron_pickaxe}] run clear @s radiant:iron_pickaxe

execute as @a[hasitem={item=radiant:diamond_pickaxe}] if score @s money matches 250000.. if score @s prestige matches 1.. run give @s diamond_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:diamond_pickaxe}] if score @s money matches 250000.. if score @s prestige matches 1.. run scoreboard players remove @s money 250000
execute as @a[hasitem={item=radiant:diamond_pickaxe}] run clear @s radiant:diamond_pickaxe

execute as @a[hasitem={item=radiant:netherite_pickaxe}] if score @s money matches 5000000.. if score @s prestige matches 5.. run give @s netherite_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:netherite_pickaxe}] if score @s money matches 5000000.. if score @s prestige matches 5.. run scoreboard players remove @s money 5000000
execute as @a[hasitem={item=radiant:netherite_pickaxe}] run clear @s radiant:netherite_pickaxe

execute as @a[hasitem={item=radiant:wood_sword}] if score @s money matches 200.. run give @s wooden_sword 1 0
execute as @a[hasitem={item=radiant:wood_sword}] if score @s money matches 200.. run scoreboard players remove @s money 200
execute as @a[hasitem={item=radiant:wood_sword}] run clear @s radiant:wood_sword

execute as @a[hasitem={item=radiant:stone_sword}] if score @s money matches 1000.. run give @s stone_sword 1 0
execute as @a[hasitem={item=radiant:stone_sword}] if score @s money matches 1000.. run scoreboard players remove @s money 1000
execute as @a[hasitem={item=radiant:stone_sword}] run clear @s radiant:stone_sword

execute as @a[hasitem={item=radiant:iron_sword}] if score @s money matches 5000.. run give @s iron_sword 1 0
execute as @a[hasitem={item=radiant:iron_sword}] if score @s money matches 5000.. run scoreboard players remove @s money 5000
execute as @a[hasitem={item=radiant:iron_sword}] run clear @s radiant:iron_sword

execute as @a[hasitem={item=radiant:diamond_sword}] if score @s money matches 25000.. run give @s diamond_sword 1 0
execute as @a[hasitem={item=radiant:diamond_sword}] if score @s money matches 25000.. run scoreboard players remove @s money 25000
execute as @a[hasitem={item=radiant:diamond_sword}] run clear @s radiant:diamond_sword

execute as @a[hasitem={item=radiant:netherite_sword}] if score @s money matches 125000.. run give @s netherite_sword 1 0
execute as @a[hasitem={item=radiant:netherite_sword}] if score @s money matches 125000.. run scoreboard players remove @s money 125000
execute as @a[hasitem={item=radiant:netherite_sword}] run clear @s radiant:netherite_sword

execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run give @s leather_helmet 1 0
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run give @s leather_chestplate 1 0
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run give @s leather_leggings 1 0
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run give @s leather_boots 1 0
execute as @a[hasitem={item=radiant:leather_chestplate}] if score @s money matches 100.. run scoreboard players remove @s money 0
execute as @a[hasitem={item=radiant:leather_chestplate}] run clear @s radiant:leather_chestplate

execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 100.. run give @s golden_helmet 1 0
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 100.. run give @s golden_chestplate 1 0
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 100.. run give @s golden_leggings 1 0
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 100.. run give @s golden_boots 1 0
execute as @a[hasitem={item=radiant:gold_chestplate}] if score @s money matches 100.. run scoreboard players remove @s money 100
execute as @a[hasitem={item=radiant:gold_chestplate}] run clear @s radiant:gold_chestplate

execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 200.. run give @s chainmail_helmet 1 0
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 200.. run give @s chainmail_chestplate 1 0
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 200.. run give @s chainmail_leggings 1 0
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 200.. run give @s chainmail_boots 1 0
execute as @a[hasitem={item=radiant:chainmail_chestplate}] if score @s money matches 200.. run scoreboard players remove @s money 200
execute as @a[hasitem={item=radiant:chainmail_chestplate}] run clear @s radiant:chainmail_chestplate

execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run give @s iron_helmet 1 0
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run give @s iron_chestplate 1 0
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run give @s iron_leggings 1 0
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run give @s iron_boots 1 0
execute as @a[hasitem={item=radiant:iron_chestplate}] if score @s money matches 25000.. run scoreboard players remove @s money 25000
execute as @a[hasitem={item=radiant:iron_chestplate}] run clear @s radiant:iron_chestplate

execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run give @s diamond_helmet 1 0
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run give @s diamond_chestplate 1 0
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run give @s diamond_leggings 1 0
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run give @s diamond_boots 1 0
execute as @a[hasitem={item=radiant:diamond_chestplate}] if score @s money matches 250000.. run scoreboard players remove @s money 250000
execute as @a[hasitem={item=radiant:diamond_chestplate}] run clear @s radiant:diamond_chestplate

execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run give @s netherite_helmet 1 0
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run give @s netherite_chestplate 1 0
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run give @s netherite_leggings 1 0
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run give @s netherite_boots 1 0
execute as @a[hasitem={item=radiant:netherite_chestplate}] if score @s money matches 5000000.. run scoreboard players remove @s money 5000000
execute as @a[hasitem={item=radiant:netherite_chestplate}] run clear @s radiant:netherite_chestplate