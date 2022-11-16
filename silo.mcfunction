execute as @a run scoreboard players operation @s siloFinalAmount += @s siloAdd
execute as @a run scoreboard players operation @s siloFinalAmount *= @s siloMultiplier

execute as @a run scoreboard players operation @s money += @s siloFinalAmount
scoreboard players set @a siloFinalAmount 1