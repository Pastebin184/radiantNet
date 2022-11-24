execute as @s[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players add @s gems 1
execute as @s[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players add @s prestige 1

execute as @s[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players set @s money 0
execute as @s[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players set @s xp 0
execute as @s[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players set @s level 0
execute as @s[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run tellraw @s {"rawtext":[{"text":"§aSuccesfully Prestiged"}]}