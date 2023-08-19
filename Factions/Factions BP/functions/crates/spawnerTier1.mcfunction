execute as @s[hasitem={item=radiant:spawner_tier_1}] run scoreboard players random randomCrate1 random 0 99


execute as @s[hasitem={item=radiant:spawner_tier_1}] run execute if score randomCrate1 random matches 0..75 run structure load sheepspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_1}] run execute if score randomCrate1 random matches 0..75 run clear @s radiant:spawner_tier_1 0 1 

execute as @s[hasitem={item=radiant:spawner_tier_1}] run execute if score randomCrate1 random matches 76..98 run structure load pigspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_1}] run execute if score randomCrate1 random matches 76..98 run clear @s radiant:spawner_tier_1 0 1 

execute as @s[hasitem={item=radiant:spawner_tier_1}] run execute if score randomCrate1 random matches 99..100 run structure load cowspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_1}] run execute if score randomCrate1 random matches 99..100 run clear @s radiant:spawner_tier_1 0 1 

execute as @s run scoreboard players add @s spawnerPity_1 1 
execute as @s[hasitem={item=radiant:spawner_tier_1}] run execute if score @s spawnerPity_1 matches 100.. run structure load cowspawner ~ ~1 ~ 
execute as @s[hasitem={item=radiant:spawner_tier_1}] run execute if score @s spawnerPity_1 matches 100.. run clear @s radiant:spawner_tier_1 0 1 

execute as @s[scores={spawnerPity_1=100..}] run scoreboard players set @s spawnerPity_1 0 
