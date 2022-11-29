execute as @a run scoreboard players operation @s siloFinalAmount += @s siloAdd
execute as @a run scoreboard players operation @s siloFinalAmount *= @s siloMultiplier

execute as @a run titleraw @s actionbar {"rawtext": [{"text": "\n§aSilo Money Recieved: $"}, {"score": {"name": "@s", "objective":  "siloFinalAmount"}}]}
execute as @a run scoreboard players operation @s money += @s siloFinalAmount

scoreboard players set @a siloFinalAmount 5
