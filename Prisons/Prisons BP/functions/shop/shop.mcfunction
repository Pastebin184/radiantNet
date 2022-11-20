replaceitem entity @e[type=radiant:shop] slot.inventory 0 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 1 radiant:stone_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 2 radiant:iron_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 3 radiant:diamond_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 4 radiant:netherite_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 5 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 6 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 7 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 8 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 9 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 10 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 11 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 12 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 13 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 14 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 15 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 16 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 17 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 18 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 19 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 20 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 21 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 22 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 23 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 24 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 25 radiant:wood_pickaxe 1 0
replaceitem entity @e[type=radiant:shop] slot.inventory 26 radiant:wood_pickaxe 1 0

execute as @a[hasitem={item=radiant:wood_pickaxe}] if score @s money matches 0.. run give @s wooden_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:wood_pickaxe}] run clear @s radiant:wood_pickaxe
execute as @a[hasitem={item=radiant:stone_pickaxe}] if score @s money matches 100.. run give @s stone_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:stone_pickaxe}] run clear @s radiant:stone_pickaxe
execute as @a[hasitem={item=radiant:iron_pickaxe}] if score @s money matches 25000.. run give @s iron_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:iron_pickaxe}] run clear @s radiant:iron_pickaxe
execute as @a[hasitem={item=radiant:diamond_pickaxe}] if score @s money matches 250000.. if score @s prestige matches 1.. run give @s diamond_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:diamond_pickaxe}] run clear @s radiant:diamond_pickaxe
execute as @a[hasitem={item=radiant:netherite_pickaxe}] if score @s money matches 5000000.. if score @s prestige matches 5.. run give @s netherite_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["coal_ore","copper_ore","iron_ore","gold_ore","lapis_ore","redstone_ore","lit_redstone_ore","diamond_ore","netherrack","quartz_ore","ancient_debris","emerald_ore","end_stone","obsidian","iron_block","gold_block","lapis_block","redstone_block","diamond_block","emerald_block","netherite_block"]}}
execute as @a[hasitem={item=radiant:netherite_pickaxe}] run clear @s radiant:netherite_pickaxe