execute as @s[hasitem={item=radiant:spawner_tier_2}] run scoreboard players random randomCrate2 random 0 99


execute as @s[hasitem={item=radiant:spawner_tier_2}] run execute if score randomCrate2 random matches 0..75 run structure load zombiespawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_2}] run clear @s radiant:spawner_tier_2 0 1 

execute as @s[hasitem={item=radiant:spawner_tier_2}] run execute if score randomCrate2 random matches 76..98 run structure load spiderspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_2}] run clear @s radiant:spawner_tier_2 0 1 

execute as @s[hasitem={item=radiant:spawner_tier_2}] run execute if score randomCrate2 random matches 99..100 run structure load skeletonspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_2}] run clear @s radiant:spawner_tier_2 0 1 

execute as @s run scoreboard players add @s spawnerPity_2 1 
execute as @s[hasitem={item=radiant:spawner_tier_2}] run execute if score @s spawnerPity_2 matches 100.. run structure load skeletonspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_2}] run clear @s radiant:spawner_tier_2 0 1 

execute as @s[scores={spawnerPity_2=100..}] run scoreboard players set @s spawnerPity_2 0 
