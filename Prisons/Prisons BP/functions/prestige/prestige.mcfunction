execute as @p[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players add @p gems 1
execute as @p[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players add @p prestige 1

execute as @p[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players set @p money 0
execute as @p[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players set @p xp 0
execute as @p[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run scoreboard players set @p level 0
execute as @p[hasitem={item=radiant:prestige}, r=1] if score @s money matches 100000.. if score @s level matches 250 run tellraw @p {"rawtext":[{"text":"§aSuccesfully Prestiged"}]}