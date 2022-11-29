scoreboard players add @a money 0
scoreboard players add @a levels 0
scoreboard players add @a xp 0
scoreboard players add @a xpmulti 0 
scoreboard players set @a[scores={xpmulti=0}] xpmulti 1
scoreboard players set @a[tag=doubleXp] xpmulti 2
scoreboard players add @a xpSell 0
scoreboard players add @a xptimer 0
scoreboard players add @a beaconsell 0
scoreboard players add @a beaconmulti 0
scoreboard players set @a[scores={beaconmulti=0}] beaconmulti 1
scoreboard players set @a[scores={beaconmulti=151..}] beaconmulti 150
scoreboard players add @a timeplayed 0

#XpSell Multi
execute as @a run scoreboard players operation @s xpSell *= @s xpmulti
execute as @a run scoreboard players operation @s xp += @s xpSell
execute as @a run scoreboard players set @s xpSell 0

#beaconsell Multi :grr:
execute as @a run scoreboard players operation @s beaconsell *= @s beaconmulti
execute as @a run scoreboard players operation @s beacons += @s beaconsell
execute as @a run scoreboard players set @s beaconsell 0