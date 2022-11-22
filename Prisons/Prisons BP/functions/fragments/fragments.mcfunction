execute as @a[hasitem={item=radiant:super_crate_shop}] if score @s fragments matches 1850.. run give @s radiant:super_crate
execute as @a[hasitem={item=radiant:super_crate_shop}] if score @s fragments matches 1850.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:super_crate_shop}] if score @s fragments matches 1850.. run scoreboard players remove @s fragments 1850
execute as @a[hasitem={item=radiant:super_crate_shop}] run clear @s radiant:super_crate_shop

execute as @a[hasitem={item=radiant:deluxe_crate_shop}] if score @s fragments matches 2500.. run give @s radiant:deluxe_crate
execute as @a[hasitem={item=radiant:deluxe_crate_shop}] if score @s fragments matches 2500.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:deluxe_crate_shop}] if score @s fragments matches 2500.. run scoreboard players remove @s fragments 2500
execute as @a[hasitem={item=radiant:deluxe_crate_shop}] run clear @s radiant:deluxe_crate_shop

execute as @a[hasitem={item=radiant:dire_crate_shop}] if score @s fragments matches 10500.. run give @s radiant:dire_crate
execute as @a[hasitem={item=radiant:dire_crate_shop}] if score @s fragments matches 10500.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:dire_crate_shop}] if score @s fragments matches 10500.. run scoreboard players remove @s fragments 10500
execute as @a[hasitem={item=radiant:dire_crate_shop}] run clear @s radiant:dire_crate_shop

execute as @a[hasitem={item=radiant:radiant_crate_shop}] if score @s fragments matches 25500.. run give @s radiant:radiant_crate
execute as @a[hasitem={item=radiant:radiant_crate_shop}] if score @s fragments matches 25500.. run tellraw @s {"rawtext": [{"text": "§l§aPurchase Succeeded!"}]}
execute as @a[hasitem={item=radiant:radiant_crate_shop}] if score @s fragments matches 25500.. run scoreboard players remove @s fragments 25500
execute as @a[hasitem={item=radiant:radiant_crate_shop}] run clear @s radiant:radiant_crate_shop

execute as @a[hasitem={item=radiant:filler_crate_shop}] run clear @s radiant:filler_crate_shop
