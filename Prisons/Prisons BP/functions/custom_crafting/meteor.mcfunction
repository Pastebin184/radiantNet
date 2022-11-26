scoreboard players random meteor randomScore 1 3

execute as @a if score meteor randomScore matches 1 run structure load mineBMeteor 240 73 -356
execute as @a if score meteor randomScore matches 1 run tellraw @s{"rawtext":[{"text":"A Meteor has Landed in Mine B"}]}
execute as @a if score meteor randomScore matches 2 run structure load mineBMeteor 32 71 -419
execute as @a if score meteor randomScore matches 2 run tellraw @s{"rawtext":[{"text":"A Meteor has Landed in Mine G"}]}
execute as @a if score meteor randomScore matches 3 run structure load mineBMeteor 56 72 -688
execute as @a if score meteor randomScore matches 3 run tellraw @s{"rawtext":[{"text":"A Meteor has Landed in Mine J"}]}

scoreboard players set meteor randomScore 0