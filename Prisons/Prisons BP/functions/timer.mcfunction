scoreboard players add fill timer 1

execute as @a if score fill timer matches 40.. run function shop/shop_fill
execute as @a if score fill timer matches 40.. run function misc/koth_fill
execute as @a if score fill timer matches 40.. run function mines/mine_npc
execute as @a if score fill timer matches 40.. run function gems/gem_fill
execute as @a if score fill timer matches 40.. run function fragments/fragment_shop
execute as @a if score fill timer matches 40.. run function beacons/beacon_shop_fill

execute as @a if score fill timer matches 40.. run scoreboard players set fill timer 0 

scoreboard players add tips timer 1
execute if score tips timer matches 40.. run tellraw @a {"rawtext":[{"text":"§b§lTip: use -spawn in chat to go back to spawn"}]}
execute if score tips timer matches 40.. run scoreboard players set tips timer 0