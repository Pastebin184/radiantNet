execute as @s[hasitem={item=radiant:spawner_tier_3}] run scoreboard players random randomCrate3 random 0 99


execute as @s[hasitem={item=radiant:spawner_tier_3}] run execute if score randomCrate2 random matches 0..75 run structure load blazespawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_3}] run clear @s radiant:spawner_tier_3 0 1 

execute as @s[hasitem={item=radiant:spawner_tier_3}] run execute if score randomCrate2 random matches 76..98 run structure load witherskeletonspaw ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_3}] run clear @s radiant:spawner_tier_3 0 1 

execute as @s[hasitem={item=radiant:spawner_tier_3}] run execute if score randomCrate2 random matches 99..100 run structure load endermanspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_3}] run clear @s radiant:spawner_tier_3 0 1 

execute as @s run scoreboard players add @s spawnerPity_3 1 
execute as @s[hasitem={item=radiant:spawner_tier_3}] run execute if score @s spawnerPity_3 matches 100.. run structure load endermanspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_3}] run clear @s radiant:spawner_tier_3 0 1 

execute as @s[scores={spawnerPity_3=100..}] run scoreboard players set @s spawnerPity_3 0 
# Tellraw with pity here